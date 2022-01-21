import {
	ArraySale,
	Product,
} from './../../../interfaces/sales/saleResponseGet.inteface';
import { Component, Input, OnInit } from '@angular/core';
import { SalesService } from 'src/app/store/services/sales.service';
import { SweetAlertIcon } from 'sweetalert2';
import Swal from 'sweetalert2';

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
		},(err)=> {
			this.showToast('Oh! there was a problem',err,'error');
		});
	}

	// * Mostrar los productos que compro;
	selectedProducts(sale: ArraySale) {
		this.productSelected = sale.products;
	}

	showToast(
		title: string,
		detai: string,
		icon: SweetAlertIcon,
		timeOut: number = 2000
	) {
		Swal.fire(title, detai, icon);
		setInterval(() => {
			Swal.close();
		}, timeOut);
	}
}
