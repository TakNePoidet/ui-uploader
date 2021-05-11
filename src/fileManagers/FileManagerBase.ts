import { FileCount, FileAccept, UploaderPrivateApi, EventUploaderType } from '../interface';

export interface FileManagerApi {
	disabled: boolean;
	// destroy(): void;
	input(): void;
}

export interface OptionDefaultFileManager {
	accept: FileAccept;
	count: FileCount;
}

export class FileManagerBase {
	protected _disabled = false;

	constructor(protected uploaderApi: UploaderPrivateApi) {}

	public get disabled() {
		return this._disabled;
	}

	public set disabled(value: boolean) {
		this._disabled = value;
	}

	public destroy(): void {
		throw new Error('Method not implemented.');
	}

	public set accept(value: FileAccept) {
		throw new Error('Not prop accept');
	}

	public set count(value: FileCount) {
		throw new Error('Not prop count');
	}

	public input(): void {
		throw new Error('Method not implemented.');
	}

	protected onSelected(files: File[]) {
		this.uploaderApi.createEvent(EventUploaderType.SELECTED, {
			files: Array.from(files)
		});
	}

	get api() {
		return {
			status(value: 'empty' | 'filled') {}
		};
	}
}
type FileManagerPrivateApi = FileManagerBase;
type FileManagerConstructor = new (_uploaderApi: UploaderPrivateApi) => FileManagerPrivateApi;
