
// import { EventUploaderType } from './interface';
import { Emitter } from './Emitter';
import { PreviewItem } from './previews';
import { Listeners } from './utils/Listeners';

export enum StatusUploadApi {
	'SUCCESS' = 'success',
	'ERROR' = 'error',
	'CANCEL' = 'cancel'
}

export interface UploadResultSuccess {
	status: StatusUploadApi.SUCCESS,
	result: any;
}
export interface UploadResultError {
	status: StatusUploadApi.ERROR,
	error: Error;
}

export interface UploadResultCancel {
	status: StatusUploadApi.CANCEL,
}

export type UploadResult = UploadResultSuccess | UploadResultError | UploadResultCancel;


export enum STATUS_UPLOADER {
	NOT_READY = 'notReady',
	WAITING = 'waiting',
	SELECTED = 'selected',
	UPLOADING = 'uploading',
	UPLOADED = 'uploaded',
	DISABLED = 'disabled'
}


export enum FILE_STATUS {
	ADDED = 'added',
	PREVIEWS = 'previews',
	QUEUED = 'queued',
	UPLOADING = 'uploading',
	SUCCESS = 'success',
	ERROR = 'error',
	ERROR_UPLOAD = 'errorUpload',
	CANCELED = 'canceled',
	// DELETED = 'deleted',
}


export enum EventUploaderType {
	INIT = 'init',
	SELECTED = 'selected',
	UNLOADING = 'unloading',
	LOADED = 'loaded',
	ERROR = 'error',
	UPLOADED = 'uploaded',
	CANCEL = 'cancel',
	REPLAY = 'replay',
	BEFORE_DESTROYED = 'beforeDestroyed',
	CLEAR = 'clear',
	DESTROYED = 'destroyed',
}
export interface EventUploaderHandlerValues<F = any> {
	[EventUploaderType.INIT]: undefined,
	[EventUploaderType.SELECTED]: {
		files: File[];
	},
	[EventUploaderType.UNLOADING]: {
		preview: PreviewItem;
	},
	[EventUploaderType.LOADED]: { file: F; },
	[EventUploaderType.ERROR]: { error: Error; preview: PreviewItem; },
	[EventUploaderType.UPLOADED]: { value: F | F[] | null; },
	[EventUploaderType.CANCEL]: { preview: PreviewItem; },
	[EventUploaderType.REPLAY]: { preview: PreviewItem; },
	[EventUploaderType.BEFORE_DESTROYED]: undefined,
	[EventUploaderType.CLEAR]: undefined,
	[EventUploaderType.DESTROYED]: undefined,
}


export type FileAccept = string[] | string;
export type FileSize = number;
export type FileCount = number;


export type EmitterCallbackHandler<T extends EventUploaderType> = (values: EventUploaderHandlerValues[T]) => void;
export interface EmitterCallback<T extends EventUploaderType> {
	event: T;
	handler: EmitterCallbackHandler<T>;
}

export type EmitterCallbacks = EmitterCallback<any>[];

export interface EventUploader {
	type: EventUploaderType;
	values: any;
}

export interface UploaderPrivateApi {
	createEvent<T extends EventUploaderType>(type: T, values: EventUploaderHandlerValues[T]): void;
	listeners: Listeners;
	on: (...args: Parameters<Emitter['on']>) => void;
	off: (...args: Parameters<Emitter['off']>) => void;
}

export interface OptionDropzone {
	accept: FileAccept;
	count: FileCount;
	string: {
		buttonUplaod: string;
		// dropzoneDefault: string;
		dropzoneDrag: string,
		dropzoneDrop: string,
	};
}
export interface UploadApi {
	send(): Promise<any>;
	destroy(): void;
}
export interface OptionUploader extends OptionDropzone {
	fileSize: number;
	errors: {
		accept: string;
		fileSize: string;
	};
	upload: new (...args: any[]) => UploadApi;
}


export interface PreviewApiFromUplaod {
	updatePercent(percent: number): void;
}



