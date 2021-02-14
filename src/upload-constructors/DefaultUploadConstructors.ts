import { PreviewApiFromUplaod, UploadApi } from '../interface';

function getRndInteger(min: number, max: number) {
	return Math.floor(Math.random() * (max - min)) + min;
}

export class DefaultUploadConstructors implements UploadApi {
	private interval: NodeJS.Timeout | null = null;

	constructor(private file: File, private previewApi: PreviewApiFromUplaod) {

	};

	send(): Promise<any> {
		return new Promise((resolve, reject) => {
			let percent = 0;
			// @ts-ignore
			this.interval = setInterval(() => {
				percent++;
				this.previewApi.updatePercent(percent);
				if (percent === 100) {
					const reader = new FileReader();
					clearInterval(this.interval!);
					reader.onload = e => {
						setTimeout(() => {
							if (getRndInteger(1, 100) < 50) {
								resolve(e.target!.result);
							} else {
								reject(new Error('Ошибка загрузки'));
							}
						}, 1000);
					};
					reader.readAsDataURL(this.file);
				}
			}, 0);
		});
	}

	destroy(): void {
		if (this.interval) {
			clearInterval(this.interval);
		}
	}
}
