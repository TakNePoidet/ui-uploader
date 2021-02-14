import { UploaderPrivateApi, OptionDropzone } from '../interface';
import { FileManagerBase } from './FileManagerBase';
export declare const defaultOptionDropzone: OptionDropzone;
export declare class Dropzone extends FileManagerBase {
    protected nodes: Record<string, HTMLElement>;
    protected option: OptionDropzone;
    protected listeners: string[];
    protected state: {
        textDropZone: string;
    };
    protected get css(): {
        container: string;
        wrapper: string;
        dragZone: string;
        control: string;
        button: string;
        input: string;
        hide: string;
        activeDragzone: string;
        dropDragzone: string;
    };
    constructor($el: HTMLElement, uploaderApi: UploaderPrivateApi, option?: Partial<OptionDropzone>);
    private listener;
    protected onSeleced(files: File[]): void;
    private render;
    destroy(): void;
    private addEvent;
    private removeEvent;
    set disabled(value: boolean);
    set accept(value: string | string[]);
    set count(value: number);
    input(): void;
    private preventDefaults;
    private bodyDragOverHandler;
    private bodyDragLeaveHandler;
    private dragOverHandler;
    private dragLeaveHandler;
    private dropHandler;
    private pasteHandler;
    private toogleDropzone;
    private toogleDropDropzone;
}
