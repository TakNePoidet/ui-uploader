import deepmerge from 'deepmerge';
import { FileManagerBase, StandartFileManager } from './fileManagers';
import { EventUploaderType, OptionUploader, STATUS_UPLOADER, UploaderPrivateApi, FILE_STATUS, StatusUploadApi, UploadResult, UploadApi } from './interface';
import { Previews } from './previews/Previews';
import { append, checkAccept, destroyHtml, errorTemplate, filesizeformat, make } from './utils/util';
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
	FileManager: StandartFileManager
};

export default class Uploader<F, M extends {} = {}> extends Emitter {
	private option: OptionUploader;

	private nodes: Record<string, HTMLElement> = {};

	private previews: Previews;

	private fileManager: FileManagerBase;

	private _files = new Map<string, F>();

	private _disabled: boolean = false;

	private _status: STATUS_UPLOADER = STATUS_UPLOADER.NOT_READY;

	private _multiple: boolean = false;

	private get css() {
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
			on: (...args: Parameters<Emitter['on']>) => {
				self.on(...args);
			},
			off: (...args: Parameters<Emitter['off']>) => {
				self.off(...args);
			},
			listeners: this.listeners,
			createEvent: this.createEvent,
		};
	}

	get files() {
		return this._files;
	}

	set files(value) {
		console.log(value);
		this._files = value;
	}

	constructor($el: HTMLElement, option: Partial<OptionUploader & M> = {}) {
		super($el);
		this.option = deepmerge(defaultOption, option);
		this.nodes.container = $el;
		const api = this.api;
		const wrapper = make('div', { className: this.css.wrapper });
		const preview = make('div', { className: this.css.preview });
		const fileManager = make('div', { className: this.css.fileManager });

		this._multiple = this.option.count > 1;
		this.previews = new Previews(preview, api);
		this.fileManager = new this.option.FileManager(fileManager, api, this.option);
		this.nodes.wrapper = wrapper;
		this.nodes.preview = preview;
		this.nodes.fileManager = fileManager;

		this.on(EventUploaderType.SELECTED, ({ files }) => {
			this.seleced(files);
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

	public async seleced(files: File[]) {
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
				max: filesizeformat(this.option.fileSize).join('')
			});
		}
		if (preview.status === FILE_STATUS.ERROR) {
			this.createEvent(EventUploaderType.ERROR, { error: new Error(preview.error), preview });
		}
		this.previews.render(preview);
		await this.seleced(files);
	}

	private async uploaders() {
		const preview = Array.from(this.previews.items.values()).find(({ status }) => status === FILE_STATUS.QUEUED);

		if (preview) {
			preview.status = FILE_STATUS.UPLOADING;
			const response = await this.uplaodItem(preview);
			if (response.status === StatusUploadApi.ERROR) {
				preview.error = response.error.message;
				preview.isReplay = true;
				this.createEvent(EventUploaderType.ERROR, { error: new Error(response.error.message), preview });
			}
			if (response.status === StatusUploadApi.SUCCESS) {
				this.files.set(preview.id, response.result);
				preview.status = FILE_STATUS.SUCCESS;
				this.createEvent(EventUploaderType.LOADED, {
					file: response.result as F
				});
			}
			await this.uploaders();
		} else {
			this.createEvent(EventUploaderType.UPLOADED, { value: this.value });
			this._status = STATUS_UPLOADER.WAITING;
			this.enabledFileManaged();
		}
	}

	private uplaodItem(preview: PreviewItem): Promise<UploadResult> {
		return new Promise(async (resolve) => {
			const UploadConstructor = this.option.Upload;
			const uplaodApi = new UploadConstructor(preview.file, {
				updatePercent: (percent: number) => {
					preview.progress = percent;
					this.createEvent(EventUploaderType.UNLOADING, {
						preview
					});
				}
			});
			const cancel = () => {
				uplaodApi.destroy();
				resolve({ status: StatusUploadApi.CANCEL });
			};
			this.on(EventUploaderType.BEFORE_DESTROYED, cancel);
			this.on(EventUploaderType.CANCEL, cancel);
			// this.on(EventUploaderType., cancel);
			let response: UploadResult;
			try {
				const result = await uplaodApi.send();
				response = { status: StatusUploadApi.SUCCESS, result };
			} catch (error) {
				response = { status: StatusUploadApi.ERROR, error };
			}
			this.off(EventUploaderType.BEFORE_DESTROYED, uplaodApi.destroy);
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
		const files = Array.from(this.files.entries()).map((([, file]) => file));
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
