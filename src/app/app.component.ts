import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	NgZone,
	ViewEncapsulation,
} from '@angular/core';
import { flashEl } from './utils';

@Component({
	selector: 'app-root',
	host: { class: 'app-root' },
	template: `
		<h1>Change Detection - app-root</h1>
		<app-a></app-a>
		<app-d></app-d>
	`,
	styles: [
		`
			.app-root {
				display: block;
				margin: 40px;
				padding: 20px;
				background-color: LightSalmon;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
	constructor(private el: ElementRef, private _ngZone: NgZone) {}

	// It's executed before Angular will run change detection for
	// the component but during the check of the parent component.

	// Called:
	// 1. immediately after ngOnChanges()
	// 2. on every change detection run
	// 3. and immediately after ngOnInit() on the first run.
	ngDoCheck() {
		console.log('%c>>>> root -> cd ran', 'color: LightSalmon');
		flashEl(this.el.nativeElement, 'LightSalmon', this._ngZone);
	}
}
