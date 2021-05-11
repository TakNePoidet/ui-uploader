import { Dom } from './Dom';

export const { make } = Dom;
export const { append } = Dom;
export function checkAccept(type: string, accepts: string | string[]) {
	for (const accept of Array.isArray(accepts) ? accepts : [accepts]) {
		if (accept === '*' || type.match(accept)) {
			return true;
		}
	}
	return false;
}

export function generateId(prefix = ''): string {
	return `${prefix}${Math.floor(Math.random() * 1e8).toString(16)}`;
}

export function fileSizeFormat(bytes: number, binary = false, precision = 2): [number, string] {
	const base = binary ? 1000 : 1024;
	const prefixes = [
		binary ? 'KiB' : 'kB',
		binary ? 'MiB' : 'MB',
		binary ? 'GiB' : 'GB',
		binary ? 'TiB' : 'TB',
		binary ? 'PiB' : 'PB',
		binary ? 'EiB' : 'EB',
		binary ? 'ZiB' : 'ZB',
		binary ? 'YiB' : 'YB'
	];

	if (!Number.isFinite(bytes)) {
		return [Infinity, 'B'];
	}
	if (bytes === 1) {
		return [1, 'B'];
	}
	if (bytes < base) {
		return [bytes, 'B'];
	}
	const index = Math.floor(Math.log(bytes) / Math.log(base));

	const size = parseFloat((bytes / base ** Math.floor(index)).toFixed(precision));

	return [size, prefixes[index - 1]];
}

export function delay(time = 2) {
	return new Promise((resolve) => {
		setTimeout(resolve, time * 1000);
	});
}
export function extract<T, J extends keyof T>(keys: J[], obj: T) {
	const newObj: Partial<T> = {};

	for (const key of keys) {
		newObj[key] = obj[key];
	}
	return newObj as Extract<J[], T>;
}

export function errorTemplate(template: string, data: Record<string, string>): string {
	let message = template;

	for (const attribute of Object.keys(data)) {
		message = message.replace(new RegExp(`:${attribute}`, 'g'), data[attribute]);
	}
	return message;
}

export function clearHtml(element: HTMLElement) {
	element.innerHTML = '';
}

export type Nodes = Record<string, HTMLElement>;
export type CSS = Record<string, string | string[]>;

export function clearClassName(nodes: Nodes, classLists: CSS) {
	for (const key in nodes) {
		if (Object.prototype.hasOwnProperty.call(nodes, key)) {
			const node = nodes[key];
			let classList = classLists[key] ? classLists[key] : '';

			classList = Array.isArray(classList) ? classList : [classList];
			node.classList.remove(...classList);
		}
	}
}

export function destroyHtml(nodes: Nodes, classLists: CSS) {
	clearClassName(nodes, classLists);
	const { container } = nodes;

	for (const key in nodes) {
		if (Object.prototype.hasOwnProperty.call(nodes, key)) {
			const node = nodes[key];

			if (container !== node) {
				node.remove();
			}
		}
	}
}

function makeReactive(obj: { [key: string]: any; }, key: string, notify: (...args: any[]) => any) {
	let val = obj[key];

	Object.defineProperty(obj, key, {
		get() {
			return val;
		},
		set(newVal) {
			val = newVal;
			notify({
				self: obj,
				key,
				value: newVal
			});
		}
	});
}

export function reactive<T extends { [key: string]: any; }>(
	obj: T,
	notify: (self: T, prop: keyof T, value: T[keyof T]) => void
): T {
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			// const element = obj[key];
			notify(obj, key, obj[key]);
		}
	}
	return new Proxy(obj, {
		get(target, phrase) {
			// eslint-disable-next-line no-restricted-syntax
			if (phrase in target) {
				return target[phrase as string];
			}
			return undefined;
		},
		// @ts-ignore
		set(target: T, prop: keyof T, val: T[keyof T]) {
			let modif = false;

			if (val !== target[prop]) {
				modif = true;
			}
			target[prop as keyof T] = val;
			if (modif) {
				notify(obj, prop, val);
			}
			return true;
		}
	});
}

export function ref<T>(value: T, notify: (value: T) => void): { value: T; } {
	const obj = reactive<{ value: T; }>(
		{
			value
		},
		(_, prop, val) => {
			notify(val);
		}
	);

	notify(value);
	return obj;
}

export function bind<T extends (...args: any[]) => any>(
	target: object,
	propertyKey: string,
	descriptor: TypedPropertyDescriptor<T>
): TypedPropertyDescriptor<T> | void {
	if (!descriptor || typeof descriptor.value !== 'function') {
		throw new TypeError(`Only methods can be decorated with @bind. <${propertyKey}> is not a method!`);
	}

	return {
		configurable: true,
		get(this: T): T {
			// @ts-ignore
			const bound: T = descriptor.value!.bind(this);

			Object.defineProperty(this, propertyKey, {
				value: bound,
				configurable: true,
				writable: true
			});
			return bound;
		}
	};
}
