import {
	Directive,
	ElementRef,
	EventEmitter,
	Input,
	NgZone,
	Output,
	Renderer2,
} from '@angular/core';

@Directive({
	selector: '[click.zoneless]',
})
export class ClickZonelessDirective {
	@Output('click.zoneless') clickZoneless = new EventEmitter<MouseEvent>();

	private teardownLogicFn!: Function;

	constructor(
		private readonly zone: NgZone,
		private readonly el: ElementRef,
		private readonly renderer: Renderer2
	) {}

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
 * Doesn't cause marking as dirty
 */
@Directive({
	selector: '[zoneless]',
})
export class ZonelessDirective {
	@Input('zoneless') zoneless: any;

	@Input('zonelessEventName') zonelessEventName: WebEvent | undefined;

	constructor(
		private readonly zone: NgZone,
		private btnEl: ElementRef,
		private renderer: Renderer2
	) {}

	ngOnInit() {
		this.zone.runOutsideAngular(() => {
			this.setupClickListener();
		});
	}

	private setupClickListener() {
		this.renderer.listen(
			this.btnEl.nativeElement,
			this.zonelessEventName || 'click',
			() => {
				this.zoneless();
			}
		);
	}
}
