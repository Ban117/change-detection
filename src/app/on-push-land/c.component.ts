import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	NgZone,
	OnChanges,
	OnInit,
	SimpleChanges,
	ViewEncapsulation,
	inject,
} from '@angular/core';
import { flashEl } from '../utils/utils';

@Component({
	selector: 'app-c',
	host: { class: 'app-c' },
	template: `
		<p>app-c</p>
		<p>binding: {{ binding }}</p>
		<button (click)="firePointlessEvent()">Fire Pointless Event</button>
		<app-d></app-d>
	`,
	styles: [
		`
			.app-c {
				display: block;
				background: Plum;
				padding: 20px;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class CComponent implements OnInit, OnChanges {
	binding = '';

	private el = inject(ElementRef);
	private _ngZone = inject(NgZone);
	private cdr = inject(ChangeDetectorRef);

	ngOnInit() {
		// setTimeout(() => {
		// 	this.binding = 'bound';
		// }, 2000);
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log('%c>>>> Component C OnChanges', 'color: Plum', changes);
	}

	ngDoCheck() {
		console.log('%c>>>> Component c ngDoCheck', 'color: Plum');
		flashEl(this.el.nativeElement, 'Plum', this._ngZone);
	}

	firePointlessEvent() {
		console.log('%c>>>> buttonClicked', 'color: Plum', CComponent.name);
	}
}
