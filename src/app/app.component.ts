import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<h1>Change Detection</h1>
		<app-a></app-a>
	`,
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	title = 'change-detection';

	ngOnInit() {

	}
}
