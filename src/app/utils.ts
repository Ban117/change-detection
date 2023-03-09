export function flashEl(el: HTMLElement, originalColor: string) {
	el.style.background = 'blue';
	setTimeout(() => {
		el.style.background = originalColor;
	}, 50);
}
