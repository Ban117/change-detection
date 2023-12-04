import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AComponent } from './on-push-land/a.component';
import { BComponent } from './on-push-land/b.component';
import { CComponent } from './on-push-land/c.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DComponent } from './on-push-land/d.component';
import { OnPushContainer } from './on-push-land/on-push-container';
import {
	ClickZonelessDirective,
	ZonelessDirective,
} from './on-push-land/directives';
import {
	ALifeCycleHooks,
	BLifeCycleHooks,
	CLifeCycleHooks,
} from './life-cycle-hooks-land/components';
import { LifeCycleHooksContainer } from './life-cycle-hooks-land/life-cycle-hooks-container';

@NgModule({
	imports: [BrowserModule, AppRoutingModule, RouterModule, HttpClientModule],
	declarations: [
		OnPushContainer,
		AppComponent,
		AComponent,
		BComponent,
		CComponent,
		DComponent,
		LifeCycleHooksContainer,
		ALifeCycleHooks,
		BLifeCycleHooks,
		CLifeCycleHooks,
		ClickZonelessDirective,
		ZonelessDirective,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
