import {
	ChangeDetectionStrategy,
	Component,
	DoCheck,
	ElementRef,
	NgZone,
	OnChanges,
	OnInit,
	SimpleChanges,
	ViewEncapsulation,
} from '@angular/core';
import { flashEl } from '../utils/utils';

@Component({
	selector: 'app-on-push-container',
	host: { class: 'app-on-push-container' },
	template: `
		<h1>On Push Root {{binding}}</h1>
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
	// changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class OnPushContainer {

	get binding(): string {
		console.log('%c>>>> OnPushContainer -> cd ran/getting binding', 'color: SteelBlue');
		return this._binding;
	}

	private _binding = "some binding";
	constructor(private el: ElementRef, private _ngZone: NgZone) {}

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
		console.log('%c>>>> OnPushContainer -> cd ran', 'color: SteelBlue');
		flashEl(this.el.nativeElement, 'SteelBlue', this._ngZone);
	}
}
