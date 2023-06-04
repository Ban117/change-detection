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
	selector: 'app-a',
	host: { class: 'app-a' },
	template: `
		<p>app-a</p>
		<p>binding: {{ binding }}</p>
		<button (click)="firePointlessEvent()">Fire Pointless Event</button>
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

	private el = inject(ElementRef);
	private zone = inject(NgZone);
	private cdr = inject(ChangeDetectorRef);

	binding = '';

	ngOnInit() {
		// setTimeout(() => {
		// 	this.mutableObject = { name: 'New Name' };
		// 	this.cdr.markForCheck();
		// }, 5000);
	}

	// Respond when Angular sets or resets data-bound `@Input` properties.
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
		flashEl(this.el.nativeElement, 'LavenderBlush', this.zone);
	}

	firePointlessEvent() {
		console.log(
			'%c>>>> buttonClicked',
			'color: LavenderBlush',
			AComponent.name
		);
	}

	otherButtonClicked() {
		this.mutableObject.name = 'Now this';
	}
}
