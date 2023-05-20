import {
	ChangeDetectionStrategy,
	Component,
	ViewEncapsulation,
} from '@angular/core';

@Component({
	selector: 'app-life-cycle-hooks-container',
	host: { class: 'app-life-cycle-hooks-container' },
	template: ` <h1>Life Cycle Hooks Root</h1>
		<a-life-cycle-hooks-cmp></a-life-cycle-hooks-cmp>`,
	styles: [
		`
			.app-on-push-container {
				display: block;
				background: Tomato;
				padding: 20px;
			}
		`,
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifeCycleHooksContainer {}
