import { FileCount, FileAccept, UploaderPrivateApi, EventUploaderType } from '../interface';




export interface FileManagerApi {
	disabled: boolean;
	// destroy(): void;
	input(): void;
}

// export interface FileManagerPrivateApi extends FileManagerApi {
// 	_onSeleced(files: FileList): void;
// }



export class FileManagerBase {

	protected _disabled: boolean = false;

	constructor(protected uploaderApi: UploaderPrivateApi) { }

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
	};

	public set count(value: FileCount) {
		throw new Error('Not prop count');
	};


	public input(): void {
		throw new Error('Method not implemented.');
	}

	protected onSeleced(files: File[]) {
		this.uploaderApi.createEvent(EventUploaderType.SELECTED, { files: Array.from(files) });
	}
}
type FileManagerPrivateApi = FileManagerBase;
type FileManagerConstructor = new (_uploaderApi: UploaderPrivateApi) => FileManagerPrivateApi;
// export class FileManagerBase {
// 	// protected _disabled: boolean = false;

// 	constructor(protected _uploaderApi: UploaderPrivateApi) { }

// 	public get disabled(): boolean {
// 		return this._disabled;
// 	}

// 	public set disabled(value: boolean) {
// 		this._disabled = value;
// 	}

// 	public destroy() {
// 		throw new Error('Not prop destroy');
// 	}

// 	set accept(value: string | string[]) {
// 		throw new Error('Not prop accept');
// 	}

// 	set count(value: number) {
// 		throw new Error('Not prop count');
// 	}

// 	input() {
// 		throw new Error('Not init method input');
// 	};


// }

