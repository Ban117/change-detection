import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

const NAME_KEBAB = "app-a";

@Component({
	selector: NAME_KEBAB,
	host: { class: NAME_KEBAB },
	template: `
		<p>
			I am Component A
		</p>
		<app-b></app-b>
	`,
	styles: [
		`
		.app-a {
			display: block;
			background: yellow;
		}
		`
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class AComponent implements OnInit, OnChanges, DoCheck {

	constructor() {
	}

	ngOnInit() {
		setTimeout(() => {
			console.warn(">>>> timeout");
		}, 2000);
	}

	// Respond when Angular sets or resets data-bound input properties.
	// If your component has no inputs or you use it without providing any inputs,
	// the framework will not call ngOnChanges()
	ngOnChanges(changes: SimpleChanges) {
		console.warn(">>>> Component A OnChanges", changes);
	}

	// Called:
	// 1. immediately after ngOnChanges()
	// 2. on every change detection run
	// 3. and immediately after ngOnInit() on the first run.
	ngDoCheck() {
		console.warn(">>>> Component A DoCheck");
	}

}
