import { FILE_STATUS, UploaderPrivateApi } from '../interface';
export declare class PreviewItem {
    readonly _file: File;
    readonly id: string;
    private uploaderApi;
    private _status;
    private _error;
    private _progress;
    private nodes;
    protected listeners: string[];
    private _isReplay;
    private get css();
    get file(): File;
    set error(value: string);
    get isReplay(): boolean;
    set isReplay(value: boolean);
    get status(): FILE_STATUS;
    set status(value: FILE_STATUS);
    set progress(value: number);
    constructor(_file: File, id: string, uploaderApi: UploaderPrivateApi);
    destroy(): void;
    private addEvent;
    private removeEvent;
    render(): HTMLElement;
    show(): void;
}
