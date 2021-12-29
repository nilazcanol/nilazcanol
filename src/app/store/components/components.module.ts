import { MenusModule } from './menus/menus.module';
import { UsersModule } from './users/users.module';
import { SalesModule } from './sales/sales.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	exports: [
		CategoriesModule,
		ProductsModule,
		SalesModule,
		UsersModule,
		MenusModule,
	],
})
export class ComponentsModule {}
