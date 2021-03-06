import deepmerge from 'deepmerge';
import { FileManagerBase, StandardFileManager } from './fileManagers';
import {
	EventUploaderType,
	OptionUploader,
	STATUS_UPLOADER,
	UploaderPrivateApi,
	FILE_STATUS,
	StatusUploadApi,
	UploadResult,
	UploadApi
} from './interface';
import { Previews } from './previews/Previews';
import { append, checkAccept, destroyHtml, errorTemplate, fileSizeFormat, generateId, make } from './utils/util';
import { DefaultUploadConstructors } from './upload-constructors';
import { Emitter } from './Emitter';
import { PreviewItem } from './previews';

const defaultOption: OptionUploader = {
	accept: '*',
	count: 1,
	fileSize: 1048576 * 15,
	errors: {
		accept: 'Должно быть файлом одного из следующих типов: :values.',
		fileSize: 'Размер файла не может быть больше :max.'
	},
	Upload: DefaultUploadConstructors,
	FileManager: StandardFileManager
};

export default class Uploader<F, M extends {} = {}> extends Emitter<F> {
	private option: OptionUploader;

	private nodes: Record<string, HTMLElement> = {};

	private previews: Previews;

	private fileManager: FileManagerBase;

	private _files = new Map<string, F>();

	private _disabled = false;

	private _status: STATUS_UPLOADER = STATUS_UPLOADER.NOT_READY;

	private _multiple = false;

	private get css(): Record<string, string> {
		return {
			container: 'uploader',
			wrapper: 'uploader__wrapper',
			fileManager: 'uploader__file-manager',
			preview: 'uploader__preview',
			disabled: 'uploader--disabled'
		};
	}

	private get api(): UploaderPrivateApi {
		const self = this;

		return {
			on(...args: Parameters<Emitter<F>['on']>) {
				self.on(...args);
			},
			off(...args: Parameters<Emitter<F>['off']>) {
				self.off(...args);
			},
			listeners: this.listeners,
			createEvent: this.createEvent
		};
	}

	get files() {
		return this._files;
	}

	set files(value) {
		this.fileManager.api.status(this._files.size > 0 ? 'filled' : 'empty');
		this._files = value;
	}

	private pushFile(file: F, key = generateId('file')) {
		this.files.set(key, file);
		this.fileManager.api.status(this._files.size > 0 ? 'filled' : 'empty');
	}

	constructor($el: HTMLElement, option: Partial<OptionUploader & M> = {}, state: F[] | F | null = null) {
		super($el);
		this.option = deepmerge(defaultOption, option);
		this.nodes.container = $el;
		const { api } = this;
		const wrapper = make('div', { className: this.css.wrapper });
		const preview = make('div', { className: this.css.preview });
		const fileManager = make('div', { className: this.css.fileManager });

		this._multiple = this.option.count > 1;
		this.previews = new Previews(preview, api);
		this.fileManager = new this.option.FileManager(fileManager, api, this.option);
		this.nodes.wrapper = wrapper;
		this.nodes.preview = preview;
		this.nodes.fileManager = fileManager;

		if (state) {
			for (const file of Array.isArray(state) ? state : [state]) {
				this.pushFile(file);
			}
		}
		this.on(EventUploaderType.SELECTED, ({ files }) => {
			this.selected(files);
		});

		setTimeout(() => this.createEvent(EventUploaderType.INIT), 0);
		this.render();
		this._status = STATUS_UPLOADER.WAITING;

		this.on(EventUploaderType.REPLAY, () => {
			if (this.status === STATUS_UPLOADER.WAITING) {
				this.uploaders();
			}
		});
	}

	private render() {
		const { container, wrapper, preview, fileManager } = this.nodes;

		container.classList.add(this.css.container);
		append(wrapper, preview, fileManager);
		append(container, wrapper);
	}

	public async selected(files: File[]) {
		if (this.status === STATUS_UPLOADER.WAITING) {
			await this.previews.clear();
			this.files.clear();
			if (this._multiple) {
				files = files.slice(0, this.option.count);
			} else {
				files = files.slice(0, 1);
			}
			this._status = STATUS_UPLOADER.SELECTED;
		}
		if (files.length < 1) {
			this.uploaders();
			return;
		}

		this.fileManager.disabled = true;
		const file = files.shift() as File;

		const preview = this.previews.newPreview(file);

		if (!checkAccept(preview.file.type, this.option.accept)) {
			preview.error = errorTemplate(this.option.errors.accept, {
				values: Array.isArray(this.option.accept) ? this.option.accept.join(',') : this.option.accept
			});
		}
		if (preview.file.size > this.option.fileSize) {
			preview.error = errorTemplate(this.option.errors.fileSize, {
				max: fileSizeFormat(this.option.fileSize).join('')
			});
		}
		if (preview.status === FILE_STATUS.ERROR) {
			this.createEvent(EventUploaderType.ERROR, { error: new Error(preview.error), preview });
		}
		this.previews.render(preview);
		await this.selected(files);
	}

	private async uploaders() {
		const preview = Array.from(this.previews.items.values()).find(({ status }) => status === FILE_STATUS.QUEUED);

		if (preview) {
			preview.status = FILE_STATUS.UPLOADING;
			const response = await this.uploadItem(preview);

			if (response.status === StatusUploadApi.ERROR) {
				preview.error = response.error.message;
				preview.isReplay = true;
				this.createEvent(EventUploaderType.ERROR, { error: new Error(response.error.message), preview });
			}
			if (response.status === StatusUploadApi.SUCCESS) {
				this.pushFile(response.result, preview.id);
				preview.status = FILE_STATUS.SUCCESS;
				this.createEvent(EventUploaderType.LOADED, {
					file: response.result
				});
			}
			await this.uploaders();
		} else {
			this.createEvent(EventUploaderType.UPLOADED, { value: this.value });
			this._status = STATUS_UPLOADER.WAITING;
			this.enabledFileManaged();
		}
	}

	private uploadItem(preview: PreviewItem): Promise<UploadResult> {
		return new Promise(async (resolve) => {
			const UploadConstructor = this.option.Upload;
			const uploadApi = new UploadConstructor(preview.file, {
				updatePercent: (percent: number) => {
					preview.progress = percent;
					this.createEvent(EventUploaderType.UNLOADING, {
						preview
					});
				}
			});
			const cancel = () => {
				uploadApi.destroy();
				resolve({ status: StatusUploadApi.CANCEL });
			};

			this.on(EventUploaderType.BEFORE_DESTROYED, cancel);
			this.on(EventUploaderType.CANCEL, cancel);
			// this.on(EventUploaderType., cancel);
			let response: UploadResult;

			try {
				const result = await uploadApi.send();

				response = { status: StatusUploadApi.SUCCESS, result };
			} catch (error) {
				response = { status: StatusUploadApi.ERROR, error };
			}
			this.off(EventUploaderType.BEFORE_DESTROYED, uploadApi.destroy);
			resolve(response);
		});
	}

	private enabledFileManaged(): void {
		this.fileManager.disabled = false;
	}

	public destroy(): void {
		this.createEvent(EventUploaderType.BEFORE_DESTROYED);
		this.fileManager.destroy();
		this.previews.destroy();
		this.listeners.destroy();
		destroyHtml(this.nodes, this.css);
	}

	protected setDisabled(value: boolean): void {
		this.disabled = value;
		this.nodes.container.classList.toggle(this.css.disabled, value);
	}

	public get disabled() {
		return this._disabled;
	}

	public set disabled(value) {
		this.setDisabled(value);
	}

	public set accept(value: string | string[]) {
		if (this.status !== STATUS_UPLOADER.WAITING) {
			throw new Error();
		}
		this.option.accept = value;
		this.fileManager.accept = this.option.accept;
	}

	public get count() {
		return this.option.count;
	}

	public set count(value: number) {
		if (this.status !== STATUS_UPLOADER.WAITING) {
			throw new Error();
		}
		this.option.count = value;
		this._multiple = this.option.count > 1;
		this.fileManager.count = this.option.count;
	}

	public set upload(value: new (...args: any[]) => UploadApi) {
		if (this.status !== STATUS_UPLOADER.WAITING) {
			throw new Error();
		}
		this.option.Upload = value;
	}

	public set fileSize(value: number) {
		if (this.status !== STATUS_UPLOADER.WAITING) {
			throw new Error();
		}
		this.option.fileSize = value;
	}

	public get status() {
		return this._status;
	}

	public input() {
		this.fileManager.input();
	}

	public get value() {
		const files = Array.from(this.files.entries()).map(([, file]) => file);

		return this._multiple ? files : files.pop();
	}

	public get multiple() {
		return this._multiple;
	}

	public set multiple(value: boolean) {
		this.count = value ? 2 : 1;
	}

	public clear() {
		this.previews.clear();
		this.createEvent(EventUploaderType.CLEAR);
	}
}
