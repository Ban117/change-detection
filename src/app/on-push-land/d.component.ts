import {
	ChangeDetectorRef,
	Component,
	ElementRef,
	Input,
	NgZone,
	OnChanges,
	OnInit,
	Renderer2,
	SimpleChanges,
	ViewChild,
	ViewEncapsulation,
	inject,
} from '@angular/core';
import { flashEl } from '../utils/utils';

const COMPONENT_COLOR = 'HotPink';

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
		<p>{{ something.name }}</p>

		{{ flash() }}
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
	// changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class DComponent implements OnInit, OnChanges {
	@Input() mutableObject: any = {
		name: 'startWithThis',
	};

	@ViewChild('btn') btnEl!: ElementRef<HTMLButtonElement>;

	binding = '';

	something = {
		name: 'init',
	};

	private el = inject(ElementRef);
	private zone = inject(NgZone);
	private renderer = inject(Renderer2);
	private cdr = inject(ChangeDetectorRef);

	ngOnInit() {
		// setTimeout(() => {
		// 	console.log('pointless');
		// }, 5000);

		this.zone.runOutsideAngular(() => (this.something.name = 'NEW'));
	}

	ngAfterViewInit() {
		this.zone.runOutsideAngular(() => this.setupClickListener());
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log(
			'%c>>>> Component D OnChanges',
			`color: ${COMPONENT_COLOR}`,
			changes
		);
	}

	ngDoCheck() {
		console.log(
			'%c>>>> Component D ngDoCheck',
			`color: ${COMPONENT_COLOR}`
		);
	}

	firePointlessEvent() {
		console.log(
			'%c>>>> buttonClicked',
			`color: ${COMPONENT_COLOR}`,
			DComponent.name
		);
	}

	flash() {
		flashEl(this.el.nativeElement, COMPONENT_COLOR, this.zone);
	}

	private setupClickListener() {
		this.renderer.listen(this.btnEl.nativeElement, 'click', () => {
			this.firePointlessEvent();
		});
	}
}
