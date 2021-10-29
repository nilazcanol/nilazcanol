import { Component, OnInit } from '@angular/core';
import { sale } from 'src/app/store/interfaces/sales/sale.interface';
import { saleResponseGet } from 'src/app/store/interfaces/sales/saleResponseGet.inteface';
import { SalesService } from 'src/app/store/services/sales.service';

@Component({
	selector: 'app-list-sales',
	templateUrl: './list-sales.component.html',
	styles: [],
})
export class ListSalesComponent implements OnInit {
	constructor(private salesService: SalesService) {}

	listSales: sale[] = [];
    
    date: Date = new Date();
    
	ngOnInit(): void {
        const formattedDate = this.getDate(this.date);
		this.salesService.getListSales(formattedDate).subscribe((res) => {
            this.listSales = res.Sales
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

    refreshListSales(res:saleResponseGet){
        this.listSales = res.Sales;
    }
}
