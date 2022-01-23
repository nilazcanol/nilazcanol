import { ArraySale, Product } from './../../../interfaces/sales/saleResponseGet.inteface';
import { Component, Input, OnInit } from '@angular/core';
import { SalesService } from 'src/app/store/services/sales.service';

@Component({
	selector: 'app-list-sales',
	templateUrl: './list-sales.component.html',
	styles: [],
})
export class ListSalesComponent implements OnInit {
	constructor(private salesService: SalesService) {}

	@Input()listSales: ArraySale[] = [];
    
    date: Date = new Date();


    showLoading:Boolean = true;
    
	ngOnInit(): void {
		const date = new Date().toLocaleDateString();
		this.salesService.getSalesForMonth(date).subscribe((res) => {
            this.listSales = res.sales;
            this.showLoading = false;
        });
	}

	getDate = (date: Date): string => {
		var day: string | number = date.getDate();
		var month: string | number = date.getMonth() + 1;

		var year = date.getFullYear();
		if (day < 10) {
			day = '0' + day;
		}
		if (month < 10) {
			month = '0' + month;
		}
		var dateRes = year + '-' + month + '-' + day;
		return dateRes;
	};


}
