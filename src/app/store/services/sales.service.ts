import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { saleResponseGet } from '../interfaces/sales/saleResponseGet.inteface';

@Injectable({
	providedIn: 'root',
})
export class SalesService {
	constructor(private http: HttpClient) {}

	private _urlBase = environment.URLBASE;

	getListSales = (date:string) => {

        const url: string = `${this._urlBase}/sale?date=${date}`;
        return this.http.get<saleResponseGet>(url);

	};


}
