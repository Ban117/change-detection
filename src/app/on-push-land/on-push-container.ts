import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	NgZone,
	ViewEncapsulation,
	inject,
} from '@angular/core';
import { flashEl } from '../utils/utils';

@Component({
	selector: 'app-on-push-container',
	host: { class: 'app-on-push-container' },
	template: `
		<h1>On Push Root</h1>
		<app-a></app-a>
	`,
	styles: [
		`
			.app-on-push-container {
				display: block;
				background: SteelBlue;
				padding: 20px;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class OnPushContainer {
	private el = inject(ElementRef);
	private _ngZone = inject(NgZone);

	// It's executed before Angular will run change detection for
	// the component but during the check of the parent component.

	// Called:
	// 1. immediately after ngOnChanges()
	// 2. on every change detection run
	// 3. and immediately after ngOnInit() on the first run.
	// Keep in mind that ngDoCheck is triggered only for top-most child component.
	// If the component has children, and Angular doesn't check this component
	// (ie. it's not marked as dirty), ngDoCheck is not triggered for them.
	ngDoCheck() {
		flashEl(this.el.nativeElement, 'SteelBlue', this._ngZone);
	}
}
