import deepmerge from 'deepmerge';
import { UploaderPrivateApi, OptionDropzone } from '../interface';

import { append, bind, destroyHtml, make, reactive } from '../utils/util';
import { getFilesAsync } from '../previews/dataTransfer';
import { FileManagerBase } from './FileManagerBase';



export const defaultOptionDropzone: OptionDropzone = {
	accept: '*',
	count: 1,
	string: {
		buttonUplaod: 'Загрузить файл',
		dropzoneDrag: 'Перетащите файл сюда или загрузите вручную',
		dropzoneDrop: 'Отпустите кнопку мыши, чтобы прикрепить файл/лы'
	}
};


export class Dropzone extends FileManagerBase {
	protected nodes: Record<string, HTMLElement>;

	protected option: OptionDropzone;

	protected listeners: string[] = [];

	protected state: { textDropZone: string; };

	protected get css() {
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

	constructor($el: HTMLElement, uploaderApi: UploaderPrivateApi, option: Partial<OptionDropzone> = {}) {
		super(uploaderApi);
		this.option = deepmerge(defaultOptionDropzone, option);
		this.nodes = {
			container: $el,
			wrapper: make('div', { className: [this.css.wrapper] }),
			dragZone: make('div', { className: [this.css.dragZone] }),
			control: make('div', { className: [this.css.control] }),
			button: make('button', { className: [this.css.button], type: 'button' }, this.option.string.buttonUplaod),
			input: make('input', {
				className: [this.css.input],
				type: 'file',
				accept: Array.isArray(this.option.accept) ? this.option.accept.join(', ') : this.option.accept,
				multiple: this.option.count > 1
			})
		};
		this.render();
		this.listener();

		this.state = reactive({
			textDropZone: this.option.string.dropzoneDrag
		}, (obj, prop, val) => {
			switch (prop) {
				case 'textDropZone':
					this.nodes.dragZone.dataset.text = val;
					break;
				default:
					break;
			}
		});
	}

	private listener() {
		this.addEvent(this.nodes.input, 'input', e => {
			const target = e.target as HTMLInputElement | null;
			if (target && target.files) {
				this.onSeleced(Array.from(target.files));
			}
		});

		['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
			this.addEvent(this.nodes.wrapper, eventName, this.preventDefaults);
		});

		['dragover', 'dragenter'].forEach(eventName => {
			this.addEvent(document.body, eventName, this.bodyDragOverHandler);
			this.addEvent(this.nodes.dragZone, eventName, this.dragOverHandler);
		});

		['dragleave', 'dragend'].forEach(eventName => {
			this.addEvent(document.body, eventName, this.bodyDragLeaveHandler);
			this.addEvent(this.nodes.dragZone, eventName, this.dragLeaveHandler);
		});

		['drop'].forEach(eventName => {
			this.addEvent(this.nodes.dragZone, eventName, this.dropHandler);
		});


		['paste'].forEach(eventName => {
			this.addEvent(document.body, eventName, this.pasteHandler);
		});


	}

	protected onSeleced(files: File[]) {
		if (this.disabled !== true) {
			super.onSeleced(files);
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
		const index = this.listeners.findIndex(eventId => eventId === event.id);
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
		this.toogleDropzone(true);
	}

	@bind
	private bodyDragLeaveHandler(e: DragEvent) {
		const relatedTarget = e.relatedTarget as HTMLElement;
		if (!document.body.contains(relatedTarget)) {
			this.toogleDropzone(false);
		}
	}

	@bind
	private dragOverHandler() {
		this.toogleDropDropzone();
	}

	@bind
	private dragLeaveHandler(e: DragEvent) {
		const relatedTarget = e.relatedTarget as HTMLElement;
		if (!this.nodes.dragZone.contains(relatedTarget)) {
			this.toogleDropDropzone(false);
		}
	}

	@bind
	private async dropHandler(event: DragEvent) {
		this.toogleDropzone(false);
		this.toogleDropDropzone(false);

		const files: File[] = [];
		for (const file of await getFilesAsync(event.dataTransfer!)) {
			files.push(file);
		}
		this.onSeleced(files);
	}

	@bind
	private async pasteHandler(event: ClipboardEvent) {
		event.preventDefault();
		const files: File[] = [];
		for (const file of await getFilesAsync(event.clipboardData)) {
			files.push(file);
		}
		this.onSeleced(files);
	}

	@bind
	private toogleDropzone(show = true) {
		this.state.textDropZone = this.option.string.dropzoneDrop;
		this.nodes.container.classList.toggle(this.css.activeDragzone, show);
	}

	@bind
	private toogleDropDropzone(active = true) {
		this.state.textDropZone = active ? this.option.string.dropzoneDrop : this.option.string.dropzoneDrag;
		this.nodes.container.classList.toggle(this.css.dropDragzone, active);
	}
}