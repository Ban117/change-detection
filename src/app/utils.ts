import { NgZone } from '@angular/core';

export function flashEl(
	el: HTMLElement,
	originalColor: string,
	ngZone: NgZone
) {
	ngZone.runOutsideAngular(() => {
		el.style.background = 'blue';
		setTimeout(() => {
			el.style.background = originalColor;
		}, 50);
	});
}
