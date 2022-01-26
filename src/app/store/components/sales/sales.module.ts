import { ListSalesComponent } from './list-sales/list-sales.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { PrimengModule } from '../../../primeNg/primeng.module';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		ListSalesComponent,
  		FilterComponent,
    ShoppingCartComponent,
	],
	imports: [
		CommonModule, 
		PrimengModule,
		FormsModule,
		RouterModule
	],
	exports: [
		ListSalesComponent,
		FilterComponent
	],
})
export class SalesModule {}
