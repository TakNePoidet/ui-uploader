interface Metadata {
	modificationTime: Date;
	size: number;
}

interface FileSystemEntry {
	fullPath: string;
	isFile: boolean;
	isDirectory: boolean;
	name: string;

	getMetadata(successCallback: (metadata: Metadata) => void, errorCallback?: (error: Error) => void): void;
}
interface FileSystemFileEntry extends FileSystemEntry {
	file(successCallback: (file: File) => void, errorCallback?: (error: Error) => void): void;
}
interface FileSystemDirectoryReader {
	readEntries(successCallback: (entries: FileSystemEntry[]) => void, errorCallback?: (error: Error) => void): void;
}

interface FileSystemDirectoryEntry extends FileSystemEntry {
	createReader(): FileSystemDirectoryReader;
	getDirectory(): FileSystemDirectoryEntry;
	getFile(): FileSystemFileEntry;
}

interface DataTransferItem {
	webkitGetAsEntry(): FileSystemEntry;
}

function isDirectory(entry: FileSystemEntry): entry is FileSystemDirectoryEntry {
	if (entry && typeof entry.isDirectory !== 'undefined') {
		return entry.isDirectory;
	}
	return false;
}

function isFile(entry: FileSystemEntry): entry is FileSystemFileEntry {
	if (entry && typeof entry.isFile !== 'undefined') {
		return entry.isFile;
	}
	return false;
}

function readDirectoryReader(reader: FileSystemDirectoryReader): Promise<any> {
	return new Promise((resolve) => {
		reader.readEntries((entries: any) => {
			resolve(entries);
		});
	});
}

function readEntryFile(entry: FileSystemEntry): Promise<File> {
	return new Promise((resolve) => {
		if (isFile(entry)) {
			entry.file((file) => {
				resolve(file);
			});
		}
	});
}

export async function getFilesAsync(dataTransfer: DataTransfer) {
	const fileEntrys: FileSystemFileEntry[] = [];
	const files: File[] = [];

	function readEntry(entry: FileSystemEntry): Promise<void> {
		return new Promise((resolve) => {
			if (isFile(entry)) {
				fileEntrys.push(entry);
				resolve();
			}
		});
	}
	async function scanFiles(item: FileSystemEntry): Promise<void> {
		if (isDirectory(item)) {
			const directoryReader = item.createReader();
			const entries = await readDirectoryReader(directoryReader);

			for await (const entry of entries) {
				await scanFiles(entry);
			}
		} else if (isFile(item)) {
			await readEntry(item);
		}
	}
	for await (const item of Array.from(dataTransfer.items)) {
		if (item.kind === 'file') {
			if (typeof item.webkitGetAsEntry === 'function') {
				const entry = item.webkitGetAsEntry();

				await scanFiles(entry);
			} else {
				const file = item.getAsFile();

				if (file) {
					files.push(file);
				}
			}
		}
	}
	for await (const entry of fileEntrys) {
		const file = await readEntryFile(entry);

		files.push(file);
	}
	return files;
}
