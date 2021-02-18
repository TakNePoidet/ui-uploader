import { OptionDefaultFileManager } from './fileManagers/FileManagerBase';
import { StandartFileManager } from './fileManagers/Standart';
import { Dropzone, OptionDropzone } from './fileManagers';
import './style.scss';

import { create as uploader, InstanseUplaoder } from './creeate';


export { UploadApi, PreviewApiFromUplaod } from './interface';
export { DefaultUploadConstructors } from './upload-constructors';

export { Dropzone, StandartFileManager, OptionDropzone, OptionDefaultFileManager };
export { uploader, InstanseUplaoder };

