import {
	ChangeDetectionStrategy,
	Component,
	ViewEncapsulation,
} from '@angular/core';

@Component({
	selector: 'app-root',
	host: { class: 'app-root' },
	template: ` <a class="link" routerLink="">Home</a>
		<a class="link" routerLink="on-push">To on-push land</a>
		<a class="link" routerLink="check-once">To check once land</a>
		<router-outlet></router-outlet>`,
	styles: [
		`
			.app-root {
				display: block;
				margin: 40px;
				padding: 20px;
				background-color: LightSalmon;
			}

			.link {
				padding: 20px;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class AppComponent {}
