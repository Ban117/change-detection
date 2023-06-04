import {
	ChangeDetectionStrategy,
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

@Component({
	selector: 'app-b',
	host: { class: 'app-b' },
	template: `
		<p>app-b</p>
		<p>binding: {{ binding }}</p>
		<p>@Input mutable binding: {{ mutableObject.name }}</p>
		<button #btn>Fire Pointless Event</button>
		<!-- <button #btn (click)="firePointlessEvent()">
			Fire Pointless Event
		</button> -->
		<app-c [mutableObject]="mutableObject"></app-c>
	`,
	styles: [
		`
			.app-b {
				display: block;
				background: SkyBlue;
				padding: 20px;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class BComponent implements OnInit, OnChanges {
	@ViewChild('btn') btnEl!: ElementRef<HTMLButtonElement>;

	@Input() mutableObject: any = {
		name: 'startWithThis',
	};

	binding = '';

	private el = inject(ElementRef);
	private zone = inject(NgZone);
	private cdr = inject(ChangeDetectorRef);
	private renderer = inject(Renderer2);

	ngOnInit() {
		// setTimeout(() => {
		// 	this.binding = 'bound';
		// }, 1500);
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log('%c>>>> Component B OnChanges', 'color: SkyBlue', changes);
	}

	// Keep in mind that ngDoCheck is triggered only for top-most child component.
	// If the component has children, and Angular doesn't check this component
	// (ie. it's not marked as dirty), ngDoCheck is not triggered for them.
	ngDoCheck() {
		console.log('%c>>>> Component B ngDoCheck', 'color: SkyBlue');
		flashEl(this.el.nativeElement, 'SkyBlue', this.zone);
		// this.cdr.markForCheck();
	}

	ngAfterViewInit() {
		this.zone.runOutsideAngular(() => this.setupClickListener());
	}

	firePointlessEvent() {
		console.log('%c>>>> buttonClicked', 'color: SkyBlue', BComponent.name);
		this.mutableObject = { name: 'now this' };
		this.cdr.detectChanges();
	}

	private setupClickListener() {
		this.renderer.listen(this.btnEl.nativeElement, 'click', () => {
			this.firePointlessEvent();
		});
	}
}
