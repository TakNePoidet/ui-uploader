import { FileCount, FileAccept, UploaderPrivateApi } from '../interface';
export interface FileManagerApi {
    disabled: boolean;
    input(): void;
}
export interface OptionDefaultFileManager {
    accept: FileAccept;
    count: FileCount;
}
export declare class FileManagerBase {
    protected uploaderApi: UploaderPrivateApi;
    protected _disabled: boolean;
    constructor(uploaderApi: UploaderPrivateApi);
    get disabled(): boolean;
    set disabled(value: boolean);
    destroy(): void;
    set accept(value: FileAccept);
    set count(value: FileCount);
    input(): void;
    protected onSeleced(files: File[]): void;
}
