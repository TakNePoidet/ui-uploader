import { OptionUploader } from './interface';
import Uploader from './Uploader';
export declare type InstanseUplaoder<F = any, M extends {} = {}> = Uploader<F, M>;
export declare function create<F, M extends {} = {}>($el: HTMLElement, option?: Partial<OptionUploader & M>, state?: F | F[]): InstanseUplaoder;
