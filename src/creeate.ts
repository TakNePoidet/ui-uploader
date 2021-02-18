import { EventUploaderType, OptionUploader } from './interface';
import Uploader from './Uploader';

export type InstanseUplaoder<F = any, M extends {} = {}> = Uploader<F, M>;


export function create<F, M extends {} = {}>($el: HTMLElement, option: Partial<OptionUploader & M> = {}, state: F | F[] = []): InstanseUplaoder {
	const uploader = new Uploader<F, M>($el, option, state);
	const props = ['disabled', 'accept', 'count', 'upload', 'fileSize', 'status', 'value', 'multiple', 'files'];
	const methods = ['on', 'off', 'destroy', 'seleced', 'clear', 'input'];
	const api = new Proxy(uploader, {
		set(_, prop: string, val) {
			if (props.includes(prop)) {
				uploader[prop] = val;
			}
			return undefined;
		},
		get(_, prop: string) {
			if (methods.includes(prop)) {
				return uploader[prop].bind(uploader);
			} if (props.includes(prop)) {
				return uploader[prop];
			}
			return undefined;
		}
	});
	return api;
}
const up = create<{ uuid: string; }>(document.createElement('div')).on(EventUploaderType.LOADED, (value) => {

});