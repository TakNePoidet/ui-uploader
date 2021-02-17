import { FILE_STATUS, EventUploaderType, UploaderPrivateApi } from '../interface';

import { append, destroyHtml, filesizeformat, make } from '../utils/util';
// @ts-ignore
import CancelIcon from '../svg/002-close.inline.svg';
// @ts-ignore
import ReplayIcon from '../svg/001-replay.inline.svg';


export class PreviewItem {
	private _status: FILE_STATUS;

	private _error: null | string = null;

	private _progress: number = 0;

	private nodes: Record<string, HTMLElement>;

	protected listeners: string[] = [];


	private _isReplay = false;

	private get css() {
		return {
			container: 'preview-item',
			// progress: 'preview-item__progress',
			information: 'preview-item__information',
			title: 'preview-item__title',
			size: 'preview-item__size',
			type: 'preview-item__type',
			actions: 'preview-item__actions',
			actionCancel: ['preview-item-action', 'preview-item-action-cancel'],
			actionReplay: ['preview-item-action', 'preview-item-action-replay'],

			show: 'preview-item--show',
			error: 'preview-item__error',
			progressContainer: ['preview-item__progress', 'preview-item-progress'],
			progressLine: 'preview-item-progress__line',
			progressProcessing: 'preview-item-progress--processing',



			isReplay: ['preview-item--replay']


		};
	}

	get file() {
		return this._file;
	}

	set error(value: string) {
		this._error = value;
		if (value.length > 0) {
			this.status = FILE_STATUS.ERROR;
		}
		this.nodes.error.innerText = this._error;
	}

	get isReplay() {
		return this._isReplay;
	}

	set isReplay(value) {
		this._isReplay = value;
		const className = Array.isArray(this.css.isReplay) ? this.css.isReplay[0] : this.css.isReplay;
		this.nodes.container.classList.toggle(className, value);
	}

	get status() {
		return this._status;
	}

	set status(value: FILE_STATUS) {
		this._status = value;
		for (const key in FILE_STATUS) {
			if (Object.prototype.hasOwnProperty.call(FILE_STATUS, key)) {
				// @ts-ignore
				const status = FILE_STATUS[key];
				this.nodes.container.classList.toggle(`${this.css.container}--${status.replace(/[A-Z]/g, (m: string) => `-${m.toLowerCase()}`)}`, this.status === status);
			}
		}
		this.nodes.progressContainer.classList.remove(this.css.progressProcessing);
	}

	set progress(value: number) {
		const { progressLine } = this.nodes;
		progressLine.style.width = `${value}%`;
		this._progress = value;
		if (value === 100) {
			this.nodes.progressContainer.classList.add(this.css.progressProcessing);
		}
	}

	constructor(readonly _file: File, public readonly id: string, private uploaderApi: UploaderPrivateApi) {
		this._status = FILE_STATUS.ADDED;
		this.nodes = {
			container: make('div', { className: this.css.container }),
			information: make('div', { className: this.css.information }),
			progressContainer: make('div', { className: this.css.progressContainer }),
			progressLine: make('div', { className: this.css.progressLine }),
			actions: make('div', { className: this.css.actions }),
			actionCancel: make('button', { className: this.css.actionCancel }),
			actionReplay: make('button', { className: this.css.actionReplay }),
			error: make('div', { className: this.css.error })
		};
	}

	public destroy(): void {
		for (const id of this.listeners) {
			this.uploaderApi.listeners.offById(id);
		}
		destroyHtml(this.nodes, this.css);
		this.nodes.container.remove();
	}

	private addEvent($el: HTMLElement, type: string, handler: (event: Event) => void): void {
		this.listeners.push(this.uploaderApi.listeners.on($el, type, handler));
	}

	private removeEvent($el: HTMLElement, type: string, handler: (event: Event) => void): void {
		const event = this.uploaderApi.listeners.findOne($el, type, handler);
		if (!event) {
			return;
		}
		const index = this.listeners.findIndex(eventId => eventId === event.id);
		this.uploaderApi.listeners.offById(event.id);
		this.listeners = this.listeners.slice(index, 1);
	}

	public render(): HTMLElement {
		const { container } = this.nodes;
		const { information, error } = this.nodes;
		const { name, size } = this.file;
		const type = /[^.]+$/.exec(this.file.type);
		this.nodes.type = make('div', { className: this.css.type }, make('span', null, type ? type.toString() : 'unknown'));
		this.nodes.title = make('div', { className: this.css.title }, name);
		this.nodes.size = make('div', { className: this.css.size }, filesizeformat(size).join(' '));


		const { actions, actionCancel, actionReplay } = this.nodes;

		actionCancel.innerHTML = CancelIcon;
		actionReplay.innerHTML = ReplayIcon;
		append(actions, actionCancel, actionReplay);
		append(information, this.nodes.type, this.nodes.title, this.nodes.size, actions);

		this.addEvent(actionCancel, 'click', event => {
			event.preventDefault();
			if ([FILE_STATUS.ADDED, FILE_STATUS.QUEUED, FILE_STATUS.UPLOADING].includes(this.status)) {
				this.uploaderApi.createEvent(EventUploaderType.CANCEL, { preview: this });
				this.status = FILE_STATUS.CANCELED;
				this.isReplay = true;
			}
		});

		this.addEvent(actionReplay, 'click', event => {
			event.preventDefault();
			if (this.isReplay) {
				this.status = FILE_STATUS.QUEUED;
				this.progress = 0;
				this.uploaderApi.createEvent(EventUploaderType.REPLAY, { preview: this });
				this.error = '';
				this.isReplay = false;
			}
		});

		append(container, information);
		append(container, error);
		const { progressContainer, progressLine } = this.nodes;
		append(progressContainer, progressLine);
		append(container, progressContainer);
		this.progress = 0;
		return container;
	}

	public show() {
		this.nodes.container.classList.add(this.css.show);
	}

}
