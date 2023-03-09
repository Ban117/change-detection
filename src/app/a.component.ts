import {
	ChangeDetectionStrategy,
	Component,
	DoCheck,
	ElementRef,
	OnChanges,
	OnInit,
	SimpleChanges,
	ViewEncapsulation,
} from '@angular/core';
import { flashEl } from './utils';

@Component({
	selector: 'app-a',
	host: { class: 'app-a' },
	template: `
		<p>app-a</p>
		<p>binding: {{ binding }}</p>
		<button (click)="buttonClicked()">Button</button>
		<button (click)="otherButtonClicked()">Button_2</button>
		<app-b [mutableObject]="mutableObject"></app-b>
	`,
	styles: [
		`
			.app-a {
				display: block;
				background: LavenderBlush;
				padding: 20px;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class AComponent implements OnInit, OnChanges {
	mutableObject: any = {
		name: 'startWithThis',
	};

	binding = '';
	constructor(private el: ElementRef) {}

	ngOnInit() {
		// setTimeout(() => {
		// 	this.binding = 'bound';
		// }, 1000);
	}

	// Respond when Angular sets or resets data-bound input properties.
	// If your component has no inputs or you use it without providing any inputs,
	// the framework will not call ngOnChanges()
	ngOnChanges(changes: SimpleChanges) {
		console.log(
			'%c>>>> Component A OnChanges',
			'color: LavenderBlush',
			changes
		);
	}

	ngDoCheck() {
		console.log('%c>>>> Component A ngDoCheck', 'color: LavenderBlush');
	}

	buttonClicked() {
		console.log(
			'%c>>>> buttonClicked',
			'color: LavenderBlush',
			this.constructor.name
		);
	}

	otherButtonClicked() {
		this.mutableObject.name = 'Now this';
	}
}
