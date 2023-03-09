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
import { flashEl } from './utils';

@Component({
	selector: 'app-d',
	host: { class: 'app-d' },
	template: `
		<p>app-d</p>
		<p>binding: {{ binding }}</p>
		<button (click)="buttonClicked()">Button</button>
	`,
	styles: [
		`
			.app-d {
				display: block;
				background: HotPink;
				padding: 20px;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class DComponent implements OnInit, OnChanges {
	binding = '';

	constructor(private el: ElementRef, private _ngZone: NgZone) {}

	ngOnInit() {
		// setTimeout(() => {
		// 	this.binding = 'bound';
		// }, 2500);
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log('%c>>>> Component D OnChanges', 'color: HotPink', changes);
	}

	ngDoCheck() {
		console.log('%c>>>> Component D ngDoCheck', 'color: HotPink');
		flashEl(this.el.nativeElement, 'HotPink', this._ngZone);
	}

	buttonClicked() {
		console.log(
			'%c>>>> buttonClicked',
			'color: HotPink',
			this.constructor.name
		);
	}
}
