import { EmitterCallbacks, EventUploader, EventUploaderHandlerValues, EventUploaderType } from './interface';
import { Listeners } from './utils/Listeners';
import { bind, generateId } from './utils/util';

export class Emitter<F> {
	protected listeners = new Listeners();

	constructor(private $el: HTMLElement, private id = generateId('uploader')) {
		this.listeners.on(this.$el, id, this.dispatch.bind(this));
	}

	private callbacks: EmitterCallbacks = [];

	public on<T extends EventUploaderType>(event: T, handler: (args: EventUploaderHandlerValues<F>[T]) => void): this {
		this.callbacks.push({ event, handler });
		return this;
	}

	public off<T extends EventUploaderType>(event: T, handler: (args: EventUploaderHandlerValues<F>[T]) => void): this {
		const index = this.callbacks.findIndex((item) => item.event === event && item.handler === handler);

		this.callbacks.slice(index, 1);
		return this;
	}

	private dispatch(event: CustomEventInit<EventUploader>) {
		const { type, values } = event.detail;

		this.callbacks.forEach((item) => {
			if (item.event === type) {
				item.handler(values);
			}
		});
	}

	@bind
	protected createEvent<T extends EventUploaderType>(type: T, values?: EventUploaderHandlerValues[T]): void {
		// console.log(type, values);
		const event = new CustomEvent(`${this.id}`, { detail: { type, values } });

		this.$el.dispatchEvent(event);
	}
}
