import { EmptyObject, OptionUploader } from './interface';
import Uploader from './Uploader';
export declare type InstanceUploader<F = any, M extends EmptyObject = EmptyObject> = Uploader<F, M>;
export declare function create<F, M extends EmptyObject = EmptyObject>($el: HTMLElement, option?: Partial<OptionUploader & M>, state?: F | F[]): InstanceUploader;
