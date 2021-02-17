import { EventUploaderHandlerValues, EventUploaderType } from './interface';
import { Listeners } from './utils/Listeners';
export declare class Emitter<F> {
    private $el;
    private id;
    protected listeners: Listeners;
    constructor($el: HTMLElement, id?: string);
    private callbacks;
    on<T extends EventUploaderType>(event: T, handler: (args: EventUploaderHandlerValues<F>[T]) => void): this;
    off<T extends EventUploaderType>(event: T, handler: (args: EventUploaderHandlerValues<F>[T]) => void): this;
    private dispatch;
    protected createEvent<T extends EventUploaderType>(type: T, values?: EventUploaderHandlerValues[T]): void;
}
