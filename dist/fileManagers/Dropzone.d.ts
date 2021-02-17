import { UploaderPrivateApi, FileAccept, FileCount } from '../interface';
import { FileManagerBase, OptionDefaultFileManager } from './FileManagerBase';
export interface OptionDropzone {
    accept: FileAccept;
    count: FileCount;
    string: {
        buttonUplaod: string;
        dropzoneDrag: string;
        dropzoneDrop: string;
    };
}
interface OptionDropzoneFileManager extends OptionDefaultFileManager {
    accept: FileAccept;
    count: FileCount;
    string: {
        emptyUplaod: string;
        filledUplaod: string;
        dropzoneDrag: string;
        dropzoneDrop: string;
    };
}
export declare class Dropzone extends FileManagerBase {
    static default: {
        accept: string;
        count: number;
        string: {
            emptyUplaod: string;
            filledUplaod: string;
            dropzoneDrag: string;
            dropzoneDrop: string;
        };
    };
    protected nodes: Record<string, HTMLElement>;
    protected option: OptionDropzoneFileManager;
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
    constructor($el: HTMLElement, uploaderApi: UploaderPrivateApi, option?: Partial<OptionDropzoneFileManager>);
    private listener;
    protected onSeleced(files: File[]): void;
    private render;
    get api(): {
        status(value: 'empty' | 'filled'): void;
    };
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
export {};
