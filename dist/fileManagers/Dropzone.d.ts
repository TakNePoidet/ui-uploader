import { UploaderPrivateApi, FileAccept, FileCount } from '../interface';
import { FileManagerBase, OptionDefaultFileManager } from './FileManagerBase';
export interface OptionDropzone {
    accept: FileAccept;
    count: FileCount;
    string: {
        buttonUpload: string;
        dropzoneDrag: string;
        dropzoneDrop: string;
    };
}
interface OptionDropzoneFileManager extends OptionDefaultFileManager {
    accept: FileAccept;
    count: FileCount;
    string: {
        emptyUpload: string;
        filledUpload: string;
        dropzoneDrag: string;
        dropzoneDrop: string;
    };
}
export declare class Dropzone extends FileManagerBase {
    static default: {
        accept: string;
        count: number;
        string: {
            emptyUpload: string;
            filledUpload: string;
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
    protected get css(): Record<string, string>;
    constructor($el: HTMLElement, uploaderApi: UploaderPrivateApi, option?: Partial<OptionDropzoneFileManager>);
    private listener;
    protected onSelected(files: File[]): void;
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
    private toggleDropzone;
    private toggleDropDropzone;
}
export {};
