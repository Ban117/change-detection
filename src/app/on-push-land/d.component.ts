import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	NgZone,
	OnChanges,
	OnInit,
	Renderer2,
	SimpleChanges,
	ViewChild,
	ViewEncapsulation,
} from '@angular/core';
import { flashEl } from '../utils/utils';

@Component({
	selector: 'app-d',
	host: { class: 'app-d' },
	template: `
		<p>app-d</p>
		<p>binding: {{ binding }}</p>
		<button (click.zoneless)="firePointlessEvent()">
			Fire Pointless Event (uses click zoneless directive)
		</button>
		<button #btn>
			Fire Pointless Event (uses component running outside zone)
		</button>
		<button [zoneless]="firePointlessEvent" zonelessEventName="dblclick">
			Fire Pointless Event (uses zonless directive)
		</button>
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
	@ViewChild('btn') btnEl!: ElementRef<HTMLButtonElement>;

	binding = '';

	constructor(
		private el: ElementRef,
		private _ngZone: NgZone,
		private renderer: Renderer2
	) {}

	ngOnInit() {
		// setTimeout(() => {
		// 	console.log('pointless');
		// }, 5000);
	}

	ngAfterViewInit() {
		this._ngZone.runOutsideAngular(() => this.setupClickListener());
	}
	ngOnChanges(changes: SimpleChanges) {
		console.log('%c>>>> Component D OnChanges', 'color: HotPink', changes);
	}

	ngDoCheck() {
		console.log('%c>>>> Component D ngDoCheck', 'color: HotPink');
		flashEl(this.el.nativeElement, 'HotPink', this._ngZone);
	}

	firePointlessEvent() {
		console.log('%c>>>> buttonClicked', 'color: HotPink', DComponent.name);
	}

	private setupClickListener() {
		this.renderer.listen(this.btnEl.nativeElement, 'click', () => {
			this.firePointlessEvent();
		});
	}
}
