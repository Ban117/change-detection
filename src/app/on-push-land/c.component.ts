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

const COMPONENT_COLOR = 'Plum';

@Component({
	selector: 'app-c',
	host: { class: 'app-c' },
	template: `
		<p>app-c</p>
		<p>binding: {{ binding }}</p>
		<button (click)="firePointlessEvent()">Fire Pointless Event</button>
		<app-d> [mutableObject]="mutableObject"</app-d>

		{{ flash() }}
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
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log(
			'%c>>>> Component C OnChanges',
			`color: ${COMPONENT_COLOR}`,
			changes
		);
	}

	ngDoCheck() {
		console.log(
			'%c>>>> Component c ngDoCheck',
			`color: ${COMPONENT_COLOR}`
		);
	}

	firePointlessEvent() {
		console.log(
			'%c>>>> buttonClicked',
			`color: ${COMPONENT_COLOR}`,
			CComponent.name
		);
	}

	flash() {
		flashEl(this.el.nativeElement, COMPONENT_COLOR, this.zone);
	}
}
