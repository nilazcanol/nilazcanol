import {
	ArraySale,
	Product,
} from './../../../interfaces/sales/saleResponseGet.inteface';
import { Component, Input, OnInit } from '@angular/core';
import { SalesService } from 'src/app/store/services/sales.service';

@Component({
	selector: 'app-list-sales',
	templateUrl: './list-sales.component.html',
	styles: [],
})
export class ListSalesComponent implements OnInit {
	constructor(private salesService: SalesService) {}

	@Input() listSales: ArraySale[] = [];

	date: Date = new Date();

	productSelected: Product[] = [];

	showLoading: Boolean = true;

	ngOnInit(): void {
		const date  = new Date()
		this.salesService.getSalesForMonth(date.toLocaleDateString()).subscribe((res) => {
			this.listSales = res.sales
			this.showLoading = false;
		});
	}

	// * Mostrar los productos que compro;
	selectedProducts(sale: ArraySale) {
		this.productSelected = sale.products;
	}
}
