import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArraySale } from '../interfaces/sales/saleResponseGet.inteface';
import { saleProductSelected } from './../interfaces/sales/saleProductSelected.interface';
import { ResGetallSale } from './../interfaces/sales/saleResponseGet.inteface';

@Injectable({
	providedIn: 'root',
})
export class SalesService {
	constructor(private http: HttpClient) {}

	private _urlBase = environment.URLBASE;

	getListSales = () => {
		const url: string = `${this._urlBase}/sale`;
		return this.http.get<ResGetallSale>(url);
	};

	saveSale(total: number, products: saleProductSelected[]) {
		const url: string = `${this._urlBase}/sale/save`;
		return this.http.post<ResGetallSale>(url, {
			products,
			saleDate: Date.now(),
			total,
		});
	}

	staticticsSale() {
		const url: string = `${this._urlBase}/sale/statisticsForMonth`;
		return this.http.get<{ countSales: number; totalReduce: number }>(url);
	}

	getListSalesOnDay() {
		const url: string = `${this._urlBase}/sale/statisticsOnDay`;
		return this.http.get<{ countSales: number; totalReduce: number }>(url);
	}

	getSalesForMonth(date: string) {
		const url: string = `${this._urlBase}/sale/date?date=${date}`;
		return this.http.get<{ sales: ArraySale[] }>(url);
	}
}
