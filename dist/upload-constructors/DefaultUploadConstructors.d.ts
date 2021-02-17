import { PreviewApiFromUplaod, UploadApi } from '../interface';
export declare class DefaultUploadConstructors implements UploadApi {
    private file;
    private previewApi;
    private interval;
    constructor(file: File, previewApi: PreviewApiFromUplaod);
    send(): Promise<any>;
    destroy(): void;
}
