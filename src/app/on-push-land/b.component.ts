import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	Input,
	NgZone,
	OnChanges,
	OnInit,
	SimpleChanges,
	ViewEncapsulation,
	inject,
} from '@angular/core';
import { flashEl } from '../utils/utils';

@Component({
	selector: 'app-b',
	host: { class: 'app-b' },
	template: `
		<p>app-b</p>
		<p>binding: {{ binding }}</p>
		<p>@Input mutable binding: {{ mutableObject.name }}</p>
		<button (click)="firePointlessEvent()">Fire Pointless Event</button>
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

	private el = inject(ElementRef);
	private _ngZone = inject(NgZone);
	private cdr = inject(ChangeDetectorRef);

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
		flashEl(this.el.nativeElement, 'SkyBlue', this._ngZone);
		// this.cdr.markForCheck();
	}

	firePointlessEvent() {
		console.log('%c>>>> buttonClicked', 'color: SkyBlue', BComponent.name);
	}
}
