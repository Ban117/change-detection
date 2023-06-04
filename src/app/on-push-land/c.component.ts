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
	selector: 'app-c',
	host: { class: 'app-c' },
	template: `
		<p>app-c</p>
		<p>binding: {{ binding }}</p>
		<button (click)="firePointlessEvent()">Fire Pointless Event</button>
		<app-d> [mutableObject]="mutableObject"</app-d>
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
	@Input() mutableObject: any = {
		name: 'startWithThis',
	};

	binding = '';

	private el = inject(ElementRef);
	private zone = inject(NgZone);
	private cdr = inject(ChangeDetectorRef);

	constructor() {
		// this.cdr.detach();
	}

	ngOnInit() {
		// setTimeout(() => {
		// 	this.binding = 'bound';
		// }, 2000);
		setTimeout(() => {
			this.cdr.detectChanges();
		}, 6000);
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log('%c>>>> Component C OnChanges', 'color: Plum', changes);
	}

	ngDoCheck() {
		console.log('%c>>>> Component c ngDoCheck', 'color: Plum');
		flashEl(this.el.nativeElement, 'Plum', this.zone);
	}

	firePointlessEvent() {
		console.log('%c>>>> buttonClicked', 'color: Plum', CComponent.name);
	}
}
