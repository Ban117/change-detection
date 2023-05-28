import {
	ChangeDetectorRef,
	Directive,
	ElementRef,
	EventEmitter,
	Input,
	NgZone,
	Output,
	Renderer2,
	inject,
} from '@angular/core';

/**
 * Marks as dirty as it outputs a handled event
 */
@Directive({
	selector: '[click.zoneless]',
})
export class ClickZonelessDirective {
	@Output('click.zoneless') clickZoneless = new EventEmitter<MouseEvent>();

	private teardownLogicFn!: Function;

	private el = inject(ElementRef);
	private zone = inject(NgZone);
	private renderer = inject(Renderer2);

	ngOnInit() {
		this.zone.runOutsideAngular(() => {
			this.setupClickListener();
		});
	}

	ngOnDestroy() {
		this.teardownLogicFn();
	}

	private setupClickListener() {
		this.teardownLogicFn = this.renderer.listen(
			this.el.nativeElement,
			'click',
			(event: MouseEvent) => {
				this.clickZoneless.emit(event);
			}
		);
	}
}

type WebEvent = keyof HTMLElementEventMap;

/**
 * Doesn't cause marking as dirty because it's not outputting a handled event
 */
@Directive({
	selector: '[zoneless]',
})
export class ZonelessDirective {
	@Input('zoneless') zoneless!: Function;

	@Input('zonelessEventName') zonelessEventName: WebEvent = 'click';

	private btnEl = inject(ElementRef);
	private zone = inject(NgZone);
	private renderer = inject(Renderer2);

	ngOnInit() {
		this.zone.runOutsideAngular(() => {
			this.setupClickListener();
		});
	}

	private setupClickListener() {
		this.renderer.listen(
			this.btnEl.nativeElement,
			this.zonelessEventName,
			() => {
				this.zoneless();
			}
		);
	}
}
