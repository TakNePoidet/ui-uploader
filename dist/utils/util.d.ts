import { Dom } from './Dom';
export declare const make: typeof Dom.make;
export declare const append: typeof Dom.append;
export declare function checkAccept(type: string, accepts: string | string[]): boolean;
export declare function generateId(prefix?: string): string;
export declare function filesizeformat(bytes: number, binary?: boolean, precision?: number): [number, string];
export declare function dealy(time?: number): Promise<unknown>;
export declare function extract<T, J extends keyof T>(keys: J[], obj: T): Extract<J[], T>;
export declare function errorTemplate(template: string, data: Record<string, string>): string;
export declare function clearHtml(elemet: HTMLElement): void;
export declare type Nodes = Record<string, HTMLElement>;
export declare type CSS = Record<string, string | string[]>;
export declare function cleaerClassName(nodes: Nodes, classLists: CSS): void;
export declare function destroyHtml(nodes: Nodes, classLists: CSS): void;
export declare function reactive<T extends {
    [key: string]: any;
}>(obj: T, notify: (self: T, prop: keyof T, value: T[keyof T]) => void): T;
export declare function ref<T>(value: T, notify: (value: T) => void): {
    value: T;
};
export declare function bind<T extends (...args: any[]) => any>(target: object, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
