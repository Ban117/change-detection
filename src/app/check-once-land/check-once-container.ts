import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-check-once-container',
	host: { class: 'app-check-once-container' },
	template: ` <h1>Check Once</h1> `,
	styles: [
		`
			.app-check-once-container {
				display: block;
				background: black;
				padding: 20px;
			}
		`,
	],
	encapsulation: ViewEncapsulation.None,
})
export class CheckOnceContainer {
	// todo impl
	// constructor(private el: ElementRef, private zone: NgZone) {}
	// It's executed before Angular will run change detection for
	// the component but during the check of the parent component.
	// Called:
	// 1. immediately after ngOnChanges()
	// 2. on every change detection run
	// 3. and immediately after ngOnInit() on the first run.
	// ngDoCheck() {
	// 	console.log('%c>>>> root -> cd ran', 'color: LightSalmon');
	// 	flashEl(this.el.nativeElement, 'LightSalmon', this.zone);
	// }
}
