export interface ListenerData {
    id: string;
    element: EventTarget;
    eventType: string;
    handler: (event: Event) => void;
}
export declare class Listeners {
    private listeners;
    on(element: EventTarget, eventType: string, handler: (event: Event) => void): string;
    off(element: EventTarget, eventType: string, handler: (event: Event) => void): void;
    offById(id: string): void;
    findOne(element: EventTarget, eventType?: string, handler?: (event: Event) => void): ListenerData | null;
    findAll(element: EventTarget, eventType?: string, handler?: (event: Event) => void): ListenerData[];
    private findByEventTarget;
    private findById;
    removeAll(): void;
    destroy(): void;
}
