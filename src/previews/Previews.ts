import { UploaderPrivateApi, FILE_STATUS } from '../interface';


import { append, generateId } from '../utils/util';
import { PreviewItem } from './PreviewItem';

export class Previews {

	public items = new Map<string, PreviewItem>();

	constructor(private $container: HTMLElement, private uploaderApi: UploaderPrivateApi) { }

	public newPreview(file: File): PreviewItem {
		const preview = new PreviewItem(file, generateId('file'), this.uploaderApi);
		this.items.set(preview.id, preview);
		return preview;
	}

	public render(preview: PreviewItem) {
		append(this.$container, preview.render());
		setTimeout(() => preview.show(), 0);
		if (FILE_STATUS.ADDED === preview.status) {
			preview.status = FILE_STATUS.QUEUED;
		}
	}

	public destroy() {
		this.clear();
	}

	public removePreviewItem(id: string) {
		const preview = this.items.get(id);
		if (preview) {
			preview.destroy();
			this.items.delete(id);
		}
	}

	public async clear() {
		for await (const preview of this.items.values()) {
			preview.destroy();
		}
		this.items.clear();
	}
}
