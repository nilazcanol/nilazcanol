import { ResGetallSale } from './../interfaces/sales/saleResponseGet.inteface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class SalesService {
	constructor(private http: HttpClient) {}

	private _urlBase = environment.URLBASE;

	getListSales = () => {

        const url: string = `${this._urlBase}/sale`;
        const headers = new HttpHeaders().set(
          'x-token',
          localStorage.getItem('token') || ''
        );
        return this.http.get<ResGetallSale>(url,{headers});

	};


}
