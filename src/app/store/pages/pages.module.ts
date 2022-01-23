import { PrimengModule } from './../../primeNg/primeng.module';
import { CategoryComponent } from './category/category.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { HomeUsersComponent } from './user/home-users/home-users.component';
import { NewComponent } from './sale/new/new.component';
import { HistoryComponent } from './sale/history/history.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeSaleComponent } from './sale/home-sale.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
	declarations: [
		ProductComponent,
		StatisticsComponent,
		HomeSaleComponent,
		CategoryComponent,
		HistoryComponent,
		NewComponent,
		HomeUsersComponent,
		ListUserComponent,
  PagesComponent,
  SettingsComponent,
	],
	imports: [
		CommonModule, 
		ComponentsModule, 
		RouterModule, 
		PrimengModule
	],
	exports: [
		ProductComponent,
		StatisticsComponent,
		HomeSaleComponent,
		CategoryComponent,
		HistoryComponent,
		NewComponent,
		HomeUsersComponent,
		ListUserComponent,
	],
})
export class PagesModule {}
