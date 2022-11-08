import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

const NAME_KEBAB = "app-b";

@Component({
	selector: NAME_KEBAB,
	host: { class: NAME_KEBAB },
	template: `
		<p>
			I am Component B
		</p>
	`,
	styles: [
		`
		.app-b {
			display: block;
			background: orange;
		}
	`
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class BComponent implements OnInit, OnChanges, DoCheck {

	constructor() { }

	ngOnInit() {
	}

	// Respond when Angular sets or resets data-bound input properties.
	// If your component has no inputs or you use it without providing any inputs,
	// the framework will not call ngOnChanges()
	ngOnChanges(changes: SimpleChanges) {
		console.warn(">>>> Component B OnChanges", changes);
	}

	// Called:
	// 1. immediately after ngOnChanges()
	// 2. on every change detection run
	// 3. and immediately after ngOnInit() on the first run.
	ngDoCheck() {
		console.warn(">>>> Component B DoCheck");
	}

}
