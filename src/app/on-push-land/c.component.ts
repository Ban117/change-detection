import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	NgZone,
	OnChanges,
	OnInit,
	SimpleChanges,
	ViewEncapsulation,
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

	constructor(private el: ElementRef, private _ngZone: NgZone) {}

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
		console.log(
			'%c>>>> buttonClicked',
			'color: Plum',
			this.constructor.name
		);
	}
}
