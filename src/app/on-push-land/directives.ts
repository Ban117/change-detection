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
