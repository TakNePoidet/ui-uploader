declare type OptionsTag<T extends keyof HTMLElementTagNameMap> = Partial<HTMLElementTagNameMap[T]>;
interface Options {
    className: string[] | string;
    dataset: DOMStringMap;
    [key: string]: any;
}
export declare class Dom {
    static append($element: Node, ...children: (Node | string | number | null)[]): Node;
    static make<T extends keyof HTMLElementTagNameMap>(tagName: T, options: Partial<Options | OptionsTag<T>> | null, ...children: (Node | string | number)[]): HTMLElementTagNameMap[T];
    static setDateset($element: HTMLElement, dataset: DOMStringMap): void;
}
export {};
