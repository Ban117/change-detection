import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'a-life-cycle-hooks-cmp',
	template: `<b-life-cycle-hooks-cmp [b]="1"></b-life-cycle-hooks-cmp>
		{{ updateTemplate() }}`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ALifeCycleHooks {
	ngDoCheck() {
		console.warn('%c>>>> A: ngDoCheck', 'color: BurlyWood');
	}
	ngAfterContentChecked() {
		console.warn('%c>>>> A: ngAfterContentChecked', 'color: BurlyWood');
	}
	ngAfterViewChecked() {
		console.warn('%c>>>> A: ngAfterViewChecked', 'color: BurlyWood');
	}
	updateTemplate() {
		console.warn('%c>>>> A: updateTemplate', 'color: BurlyWood');
	}

	onSomething() {
		console.warn('>>>> x');
	}
}

@Component({
	selector: 'b-life-cycle-hooks-cmp',
	template: `<c-life-cycle-hooks-cmp [b]="1"></c-life-cycle-hooks-cmp>
		{{ updateTemplate() }}`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BLifeCycleHooks {
	@Input()
	set b(v: any) {
		console.warn('%c>>>> B: updateBinding', 'color: MediumSeaGreen');
	}

	ngOnChanges() {
		console.warn('%c>>>> B: ngOnChanges', 'color: MediumSeaGreen');
	}

	ngDoCheck() {
		console.warn('%c>>>> B: ngDoCheck', 'color: MediumSeaGreen');
	}

	ngAfterContentChecked() {
		console.warn(
			'%c>>>> B: ngAfterContentChecked',
			'color: MediumSeaGreen'
		);
	}

	ngAfterViewChecked() {
		console.warn('%c>>>> B: ngAfterViewChecked', 'color: MediumSeaGreen');
	}

	updateTemplate() {
		console.warn('%c>>>> B: updateTemplate', 'color: MediumSeaGreen');
	}
}

@Component({
	selector: 'c-life-cycle-hooks-cmp',
	template: `C {{ updateTemplate() }}`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CLifeCycleHooks {
	@Input()
	set b(v: any) {
		console.warn('%c>>>> C: updateBinding', 'color: DarkSalmon');
	}

	ngOnChanges() {
		console.warn('%c>>>> C: ngOnChanges', 'color: DarkSalmon');
	}

	ngDoCheck() {
		console.warn('%c>>>> C: ngDoCheck', 'color: DarkSalmon');
	}
	ngAfterContentChecked() {
		console.warn('%c>>>> C: ngAfterContentChecked', 'color: DarkSalmon');
	}
	ngAfterViewChecked() {
		console.warn('%c>>>> C: ngAfterViewChecked', 'color: DarkSalmon');
	}
	updateTemplate() {
		console.warn('%c>>>> C: updateTemplate', 'color: DarkSalmon');
	}
}
