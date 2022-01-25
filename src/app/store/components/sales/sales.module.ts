import { InfoProductComponent } from './info-product/info-product.component';
import { ListSalesComponent } from './list-sales/list-sales.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { PrimengModule } from '../../../primeNg/primeng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		ListSalesComponent,
		InfoProductComponent,
  		FilterComponent,
	],
	imports: [
		CommonModule, 
		PrimengModule,
		FormsModule
	],
	exports: [
		ListSalesComponent,
		InfoProductComponent,
		FilterComponent
	],
})
export class SalesModule {}
