import deepmerge from 'deepmerge';
import { UploaderPrivateApi } from '../interface';
import { append, destroyHtml, make } from '../utils/util';
import { FileManagerBase, OptionDefaultFileManager } from './FileManagerBase';

interface OptionStandartFileManager extends OptionDefaultFileManager {
	string: {
		buttonUplaod: 'Загрузить файл',
	};
}

export const defaultOptionDropzone: OptionStandartFileManager = {
	accept: '*',
	count: 1,
	string: {
		buttonUplaod: 'Загрузить файл'
	}
};

export class StandartFileManager extends FileManagerBase {
	public static default: {
		accept: '*',
		count: 1,
		string: {
			buttonUplaod: 'Загрузить файл';
		};
	};

	protected nodes: Record<string, HTMLElement>;

	protected option: OptionStandartFileManager;

	protected listeners: string[] = [];

	protected state: { textDropZone: string; };

	protected get css() {
		return {
			container: 'standart-file-manager',
			wrapper: 'standart-file-manager__wrapper',
			control: 'standart-file-manager__control',
			button: 'standart-file-manager__button',
			input: 'standart-file-manager__input',
			hide: 'standart-file-manager--hide',
		};
	}

	constructor($el: HTMLElement, uploaderApi: UploaderPrivateApi, option: Partial<OptionStandartFileManager> = {}) {
		super(uploaderApi);
		this.option = deepmerge(StandartFileManager.default, option);
		this.nodes = {
			container: $el,
			wrapper: make('div', { className: [this.css.wrapper] }),
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
	}

	private listener() {
		this.addEvent(this.nodes.input, 'input', e => {
			const target = e.target as HTMLInputElement | null;
			if (target && target.files) {
				this.onSeleced(Array.from(target.files));
			}
		});
	}

	protected onSeleced(files: File[]) {
		if (this.disabled !== true) {
			super.onSeleced(files);
		}
	}

	private render() {
		const { container, wrapper, input, button, control } = this.nodes;
		container.classList.add(this.css.container);
		append(control, input, button);
		append(wrapper, control);
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
}
