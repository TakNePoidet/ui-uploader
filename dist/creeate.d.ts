import { OptionUploader } from './interface';
import Uploader from './Uploader';
export declare function create<F, M extends {} = {}>($el: HTMLElement, option?: Partial<OptionUploader & M>, state?: F[]): Uploader<F, {}>;
