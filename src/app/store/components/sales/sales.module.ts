import { ModalProductsSaleComponent } from './modalProductsSale/modalProductsSale.component';
import { InfoProductComponent } from './info-product/info-product.component';
import { CartComponent } from './cart/cart.component';
import { ListSalesComponent } from './list-sales/list-sales.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		ListSalesComponent,
		CartComponent,
		InfoProductComponent,
		ModalProductsSaleComponent,
	],
	imports: [CommonModule],
	exports: [
		ListSalesComponent,
		CartComponent,
		InfoProductComponent,
		ModalProductsSaleComponent,
	],
})
export class SalesModule {}
