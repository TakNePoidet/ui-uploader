import { UploaderPrivateApi } from '../interface';
import { FileManagerBase, OptionDefaultFileManager } from './FileManagerBase';
interface OptionStandartFileManager extends OptionDefaultFileManager {
    string: {
        emptyUplaod: string;
        filledUplaod: string;
    };
}
export declare class StandartFileManager extends FileManagerBase {
    static default: OptionStandartFileManager;
    protected nodes: Record<string, HTMLElement>;
    protected option: OptionStandartFileManager;
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
    constructor($el: HTMLElement, uploaderApi: UploaderPrivateApi, option?: Partial<OptionStandartFileManager>);
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
}
export {};