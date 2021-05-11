import { UploaderPrivateApi } from '../interface';
import { FileManagerBase, OptionDefaultFileManager } from './FileManagerBase';
interface OptionStandardFileManager extends OptionDefaultFileManager {
    string: {
        emptyUpload: string;
        filledUpload: string;
    };
}
export declare class StandardFileManager extends FileManagerBase {
    static default: OptionStandardFileManager;
    protected nodes: Record<string, HTMLElement>;
    protected option: OptionStandardFileManager;
    protected listeners: string[];
    protected state: {
        textDropZone: string;
    };
    protected get css(): {
        container: string;
        wrapper: string;
        control: string;
        button: string;
        input: string;
        hide: string;
    };
    constructor($el: HTMLElement, uploaderApi: UploaderPrivateApi, option?: Partial<OptionStandardFileManager>);
    private listener;
    protected onSelected(files: File[]): void;
    private render;
    destroy(): void;
    private addEvent;
    private removeEvent;
    set disabled(value: boolean);
    set accept(value: string | string[]);
    set count(value: number);
    get api(): {
        status(value: 'empty' | 'filled'): void;
    };
    input(): void;
}
export {};
