import Uploader from './Uploader';

export function create<F>(...args: ConstructorParameters<typeof Uploader>) {
	const uploader = new Uploader<F>(...args);
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