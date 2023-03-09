import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AComponent } from './a.component';
import { BComponent } from './b.component';
import { CComponent } from './c.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DComponent } from './d.component';

@NgModule({
	declarations: [
		AppComponent,
		AComponent,
		BComponent,
		CComponent,
		DComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
