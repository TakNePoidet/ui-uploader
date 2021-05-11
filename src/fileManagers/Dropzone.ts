import deepmerge from 'deepmerge';
import { UploaderPrivateApi, FileAccept, FileCount, EventUploaderType } from '../interface';

import { append, bind, destroyHtml, make, reactive } from '../utils/util';
import { getFilesAsync } from '../utils/dataTransfer';
import { FileManagerBase, OptionDefaultFileManager } from './FileManagerBase';

export interface OptionDropzone {
	accept: FileAccept;
	count: FileCount;
	string: {
		buttonUpload: string;
		dropzoneDrag: string;
		dropzoneDrop: string;
	};
}
interface OptionDropzoneFileManager extends OptionDefaultFileManager {
	accept: FileAccept;
	count: FileCount;
	string: {
		emptyUpload: string;
		filledUpload: string;
		dropzoneDrag: string;
		dropzoneDrop: string;
	};
}
export class Dropzone extends FileManagerBase {
	public static default = {
		accept: '*',
		count: 1,
		string: {
			emptyUpload: 'Загрузить файл',
			filledUpload: 'Загрузить другой файл',
			dropzoneDrag: 'Перетащите файл сюда или загрузите вручную',
			dropzoneDrop: 'Отпустите кнопку мыши, чтобы прикрепить файл/лы'
		}
	};

	protected nodes: Record<string, HTMLElement>;

	protected option: OptionDropzoneFileManager;

	protected listeners: string[] = [];

	protected state: { textDropZone: string; };

	protected get css(): Record<string, string> {
		return {
			container: 'dropzone',
			wrapper: 'dropzone__wrapper',
			dragZone: 'dropzone__dragzone',
			control: 'dropzone__control',
			button: 'dropzone__button',
			input: 'dropzone__input',
			hide: 'dropzone--hide',
			activeDragzone: 'dropzone--active-dragzone',
			dropDragzone: 'dropzone--drop-dragzone'
		};
	}

	constructor($el: HTMLElement, uploaderApi: UploaderPrivateApi, option: Partial<OptionDropzoneFileManager> = {}) {
		super(uploaderApi);
		this.option = deepmerge(Dropzone.default, option);
		this.nodes = {
			container: $el,
			wrapper: make('div', { className: [this.css.wrapper] }),
			dragZone: make('div', { className: [this.css.dragZone] }),
			control: make('div', { className: [this.css.control] }),
			button: make('button', { className: [this.css.button], type: 'button' }, this.option.string.emptyUpload),
			input: make('input', {
				className: [this.css.input],
				type: 'file',
				accept: Array.isArray(this.option.accept) ? this.option.accept.join(', ') : this.option.accept,
				multiple: this.option.count > 1
			})
		};
		this.render();
		this.listener();

		this.state = reactive(
			{
				textDropZone: this.option.string.dropzoneDrag
			},
			(obj, prop, val) => {
				switch (prop) {
					case 'textDropZone':
						this.nodes.dragZone.dataset.text = val;
						break;
					default:
						break;
				}
			}
		);
	}

	private listener() {
		this.addEvent(this.nodes.input, 'input', (e) => {
			const target = e.target as HTMLInputElement | null;

			if (target && target.files) {
				this.onSelected(Array.from(target.files));
			}
		});

		['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
			this.addEvent(this.nodes.wrapper, eventName, this.preventDefaults);
		});

		['dragover', 'dragenter'].forEach((eventName) => {
			this.addEvent(document.body, eventName, this.bodyDragOverHandler);
			this.addEvent(this.nodes.dragZone, eventName, this.dragOverHandler);
		});

		['dragleave', 'dragend'].forEach((eventName) => {
			this.addEvent(document.body, eventName, this.bodyDragLeaveHandler);
			this.addEvent(this.nodes.dragZone, eventName, this.dragLeaveHandler);
		});

		['drop'].forEach((eventName) => {
			this.addEvent(this.nodes.dragZone, eventName, this.dropHandler);
		});

		// ['paste'].forEach(eventName => {
		// 	this.addEvent(document.body, eventName, this.pasteHandler);
		// });
	}

	protected onSelected(files: File[]): void {
		if (this.disabled !== true) {
			super.onSelected(files);
		}
	}

	private render() {
		const { container, wrapper, dragZone, input, button, control } = this.nodes;

		container.classList.add(this.css.container);
		append(control, input, button);
		append(wrapper, dragZone, control);
		append(container, wrapper);
		// this.status = true;
	}

	get api() {
		const self = this;

		return {
			status(value: 'empty' | 'filled') {
				switch (value) {
					case 'empty':
						self.nodes.button.innerText = self.option.string.emptyUpload;
						break;
					case 'filled':
						self.nodes.button.innerText = self.option.string.filledUpload;
						break;
					default:
						break;
				}
			}
		};
	}

	public destroy(): void {
		for (const id of this.listeners) {
			this.uploaderApi.listeners.offById(id);
		}
		destroyHtml(this.nodes, this.css);
	}

	private addEvent($el: HTMLElement, type: string, handler: (event: any) => void): void {
		this.listeners.push(this.uploaderApi.listeners.on($el, type, handler));
	}

	private removeEvent($el: HTMLElement, type: string, handler: (event: any) => void): void {
		const event = this.uploaderApi.listeners.findOne($el, type, handler);

		if (!event) {
			return;
		}
		const index = this.listeners.findIndex((eventId) => eventId === event.id);

		this.uploaderApi.listeners.offById(event.id);
		this.listeners = this.listeners.slice(index, 1);
	}

	public set disabled(value: boolean) {
		this.nodes.container.classList.toggle(this.css.hide, value);
		this._disabled = value;
	}

	set accept(value: string | string[]) {
		this.option.accept = value;
		const input = this.nodes.input as HTMLInputElement;

		input.accept = Array.isArray(this.option.accept) ? this.option.accept.join(', ') : this.option.accept;
	}

	set count(value: number) {
		this.option.count = value;
		const input = this.nodes.input as HTMLInputElement;

		input.multiple = this.option.count > 1;
	}

	public input() {
		if (this.disabled !== true) {
			this.nodes.input.click();
		}
	}

	private preventDefaults(e: DragEvent) {
		e.preventDefault();
		// e.stopPropagation();
	}

	@bind
	private bodyDragOverHandler(e: DragEvent) {
		this.toggleDropzone(true);
	}

	@bind
	private bodyDragLeaveHandler(e: DragEvent) {
		const relatedTarget = e.relatedTarget as HTMLElement;

		if (!document.body.contains(relatedTarget)) {
			this.toggleDropzone(false);
		}
	}

	@bind
	private dragOverHandler() {
		this.toggleDropDropzone();
	}

	@bind
	private dragLeaveHandler(e: DragEvent) {
		const relatedTarget = e.relatedTarget as HTMLElement;

		if (!this.nodes.dragZone.contains(relatedTarget)) {
			this.toggleDropDropzone(false);
		}
	}

	@bind
	private async dropHandler(event: DragEvent) {
		this.toggleDropzone(false);
		this.toggleDropDropzone(false);
		const files: File[] = [];

		for (const file of await getFilesAsync(event.dataTransfer!)) {
			files.push(file);
		}
		this.onSelected(files);
	}

	@bind
	private async pasteHandler(event: ClipboardEvent) {
		console.log(event.clipboardData);
		const files: File[] = [];
		const filesClipboard = await getFilesAsync(event.clipboardData);

		if (filesClipboard.length > 0) {
			event.preventDefault();
		}
		for (const file of filesClipboard) {
			files.push(file);
		}
		this.onSelected(files);
	}

	@bind
	private toggleDropzone(show = true) {
		this.state.textDropZone = this.option.string.dropzoneDrop;
		this.nodes.container.classList.toggle(this.css.activeDragzone, show);
	}

	@bind
	private toggleDropDropzone(active = true) {
		this.state.textDropZone = active ? this.option.string.dropzoneDrop : this.option.string.dropzoneDrag;
		this.nodes.container.classList.toggle(this.css.dropDragzone, active);
	}
}
