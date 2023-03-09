import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	DoCheck,
	ElementRef,
	Host,
	Input,
	NgZone,
	OnChanges,
	OnInit,
	SimpleChanges,
	ViewContainerRef,
	ViewEncapsulation,
	ViewRef,
} from '@angular/core';
import { flashEl } from './utils';

@Component({
	selector: 'app-b',
	host: { class: 'app-b' },
	template: `
		<p>app-b</p>
		<p>binding: {{ binding }}</p>
		<p>@Input mutable binding: {{ mutableObject.name }}</p>
		<button (click)="buttonClicked()">Button</button>
		<app-c></app-c>
	`,
	styles: [
		`
			.app-b {
				display: block;
				background: SkyBlue;
				padding: 20px;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class BComponent implements OnInit, OnChanges {
	@Input() mutableObject: any;

	binding = '';

	constructor(
		private cdr: ChangeDetectorRef,
		private el: ElementRef,
		private _ngZone: NgZone
	) {}

	ngOnInit() {
		// setTimeout(() => {
		// 	this.binding = 'bound';
		// }, 1500);
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log('%c>>>> Component B OnChanges', 'color: SkyBlue', changes);
	}

	// Keep in mind that ngDoCheck is triggered only for top-most child component.
	// If the component has children, and Angular doesn't check this component
	// (ie. it's not marked as dirty), ngDoCheck is not triggered for them.
	ngDoCheck() {
		console.log('%c>>>> Component B ngDoCheck', 'color: SkyBlue');
		this._ngZone.runOutsideAngular(() =>
			flashEl(this.el.nativeElement, 'SkyBlue')
		);

		// this.cdr.markForCheck();
	}

	buttonClicked() {
		console.log(
			'%c>>>> buttonClicked',
			'color: SkyBlue',
			this.constructor.name
		);
	}
}
