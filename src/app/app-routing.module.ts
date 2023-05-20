import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOnceContainer } from './check-once-land/check-once-container';
import { OnPushContainer } from './on-push-land/on-push-container';
import { LifeCycleHooksContainer } from './life-cycle-hooks-land/life-cycle-hooks-container';

const routes: Routes = [
	{
		path: 'on-push',
		component: OnPushContainer,
	},
	{
		path: 'check-once',
		component: CheckOnceContainer,
	},
	{
		path: 'life-cycle-hooks',
		component: LifeCycleHooksContainer,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
