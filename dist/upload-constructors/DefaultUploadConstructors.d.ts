import { PreviewApiFromUpload, UploadApi } from '../interface';
export declare class DefaultUploadConstructors implements UploadApi {
    private file;
    private previewApi;
    private interval;
    constructor(file: File, previewApi: PreviewApiFromUpload);
    send(): Promise<any>;
    destroy(): void;
}
