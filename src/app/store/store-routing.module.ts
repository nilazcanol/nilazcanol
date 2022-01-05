import { SettingsComponent } from './pages/settings/settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuard } from './../login/guards/is-admin.guard';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { ProductComponent } from './pages/product/product.component';
import { salesRoutingModule } from './pages/sale/sales.routes';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { usersRoutingModule } from './pages/user/user.routes';

const routes: Routes = [
	{
		path: '',
		component:PagesComponent,
		children: [
			{ path: 'home', component: HomeComponent },
			{ path: 'products', component: ProductComponent },
			{ path: 'categories', component: CategoryComponent },
			{ path: 'settings', component: SettingsComponent },
			{
				path: 'statistics',
				component: StatisticsComponent,
				canLoad: [IsAdminGuard],
				canActivate: [IsAdminGuard],
			},			
			{ path: '**', redirectTo: 'home' },
		],
	},
];

@NgModule({
	imports: [
        RouterModule.forChild(routes),
        salesRoutingModule,
        usersRoutingModule
    ],
	exports: [RouterModule],
})
export class StoreRoutingModule {}
