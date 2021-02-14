import { UploaderPrivateApi } from '../interface';
import { PreviewItem } from './PreviewItem';
export declare class Previews {
    private $container;
    private uploaderApi;
    items: Map<string, PreviewItem>;
    constructor($container: HTMLElement, uploaderApi: UploaderPrivateApi);
    newPreview(file: File): PreviewItem;
    render(preview: PreviewItem): void;
    destroy(): void;
    removePreviewItem(id: string): void;
    clear(): Promise<void>;
}
