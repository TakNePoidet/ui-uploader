type OptionsTag<T extends keyof HTMLElementTagNameMap> = Partial<HTMLElementTagNameMap[T]>;
interface Options {
	className: string[] | string;
	dataset: DOMStringMap;
	[key: string]: any;
}

export class Dom {
	public static append($element: Node, ...children: (Node | string | number | null)[]): Node {
		for (const child of children) {
			if (child instanceof Node) {
				$element.appendChild(child);
			} else {
				$element.textContent = child ? child.toString() : '';
			}
		}

		return $element;
	}

	public static make<T extends keyof HTMLElementTagNameMap>(tagName: T, options: Partial<Options | OptionsTag<T>> | null, ...children: (Node | string | number)[]) {
		const $element: HTMLElementTagNameMap[T] = document.createElement(tagName);
		if (options) {
			const { className = [], dataset = {}, ...attr } = options;
			if (Array.isArray(className)) {
				$element.classList.add(...className);
			} else if (className) {
				$element.classList.add(className);
			}
			const attributes = attr as Record<string, any>;
			for (const attrName in attributes) {
				if (Object.prototype.hasOwnProperty.call(attributes, attrName)) {
					($element as any)[attrName] = attributes[attrName];
				}
			}
			Dom.setDateset($element, dataset);
		}
		Dom.append($element, ...children);
		return $element;
	}

	public static setDateset($element: HTMLElement, dataset: DOMStringMap) {
		for (const key in dataset) {
			if (Object.prototype.hasOwnProperty.call(dataset, key)) {
				$element.dataset[key] = dataset[key];
			}
		}
	}
}
