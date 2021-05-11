import { generateId } from './util';

export interface ListenerData {
	id: string;
	element: EventTarget;
	eventType: string;
	handler: (event: Event) => void;
}

export class Listeners {
	private listeners: ListenerData[] = [];

	public on(element: EventTarget, eventType: string, handler: (event: Event) => void): string {
		const id = generateId('event');
		const assignedEventData = {
			id,
			element,
			eventType,
			handler
		};

		const alreadyExist = this.findOne(element, eventType, handler);

		if (alreadyExist) {
			return alreadyExist.id;
		}
		this.listeners.push(assignedEventData);
		element.addEventListener(eventType, handler);
		return id;
	}

	public off(element: EventTarget, eventType: string, handler: (event: Event) => void): void {
		const existingListeners = this.findAll(element, eventType, handler);

		existingListeners.forEach((listener, i) => {
			const index = this.listeners.indexOf(existingListeners[i]);

			if (index > 0) {
				this.listeners.splice(index, 1);
				listener.element.removeEventListener(listener.eventType, listener.handler);
			}
		});
	}

	public offById(id: string): void {
		const listener = this.findById(id);

		if (!listener) {
			return;
		}
		listener.element.removeEventListener(listener.eventType, listener.handler);
	}

	public findOne(element: EventTarget, eventType?: string, handler?: (event: Event) => void): ListenerData | null {
		const foundListeners = this.findAll(element, eventType, handler);

		return foundListeners.length > 0 ? foundListeners[0] : null;
	}

	public findAll(element: EventTarget, eventType?: string, handler?: (event: Event) => void): ListenerData[] {
		let found;
		const foundByEventTargets = element ? this.findByEventTarget(element) : [];

		if (element && eventType && handler) {
			found = foundByEventTargets.filter((event) => event.eventType === eventType && event.handler === handler);
		} else if (element && eventType) {
			found = foundByEventTargets.filter((event) => event.eventType === eventType);
		} else {
			found = foundByEventTargets;
		}

		return found;
	}

	private findByEventTarget(element: EventTarget): ListenerData[] {
		return this.listeners.filter((listener) => {
			if (listener.element === element) {
				return listener;
			}
			return false;
		});
	}

	private findById(id: string): ListenerData | undefined {
		return this.listeners.find((listener) => listener.id === id);
	}

	public removeAll(): void {
		this.listeners.forEach((current) => {
			current.element.removeEventListener(current.eventType, current.handler);
		});

		this.listeners = [];
	}

	public destroy(): void {
		this.removeAll();
	}
}
