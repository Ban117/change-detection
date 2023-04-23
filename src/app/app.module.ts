import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AComponent } from './on-push-land/a.component';
import { BComponent } from './on-push-land/b.component';
import { CComponent } from './on-push-land/c.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DComponent } from './on-push-land/d.component';
import { RouterModule } from '@angular/router';
import { OnPushContainer } from './on-push-land/on-push-container';
import {
	ClickZonelessDirective,
	ZonelessDirective,
} from './on-push-land/directives';

@NgModule({
	imports: [BrowserModule, AppRoutingModule, RouterModule],
	declarations: [
		OnPushContainer,
		AppComponent,
		AComponent,
		BComponent,
		CComponent,
		DComponent,
		ClickZonelessDirective,
		ZonelessDirective,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
