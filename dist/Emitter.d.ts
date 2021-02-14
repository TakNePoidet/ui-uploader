import { EmitterCallbackHandler, EventUploaderHandlerValues, EventUploaderType } from './interface';
import { Listeners } from './utils/Listeners';
export declare class Emitter {
    private $el;
    private id;
    protected listeners: Listeners;
    constructor($el: HTMLElement, id?: string);
    private callbacks;
    on<T extends EventUploaderType>(event: T, handler: EmitterCallbackHandler<T>): this;
    off<T extends EventUploaderType>(event: T, handler: EmitterCallbackHandler<T>): this;
    private dispatch;
    protected createEvent<T extends EventUploaderType>(type: T, values?: EventUploaderHandlerValues[T]): void;
}
