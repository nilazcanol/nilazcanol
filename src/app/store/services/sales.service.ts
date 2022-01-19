import { saleProductSelected } from './../interfaces/sales/saleProductSelected.interface';
import { Product, ResGetallSale } from './../interfaces/sales/saleResponseGet.inteface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { sale } from '../interfaces/sales/sale.interface';
import { ArraySale } from '../interfaces/sales/saleResponseGet.inteface';

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

    saveSale(total:number,products:saleProductSelected[]){
        const url: string = `${this._urlBase}/sale/save`;
        const headers = new HttpHeaders().set(
          'x-token',
          localStorage.getItem('token') || ''
        );
        return this.http.post<ResGetallSale>(url,
            {
                products,
                "saleDate":Date.now(),
                total
            }
            ,{headers});
    }


    staticticsSale(){
        const url: string = `${this._urlBase}/sale/statistics`;
        const headers = new HttpHeaders().set(
          'x-token',
          localStorage.getItem('token') || ''
        );
        return this.http.get<{countSales:number,totalReduce:number}>(url,{headers});
    }


    getSalesForMonth(date:string){
      const url: string = `${this._urlBase}/sale/date?date=${date}`
      const headers = new HttpHeaders().set(
        'x-token',
        localStorage.getItem('token') || ''
      );
      return this.http.get<{sales:ArraySale[]}>(url,{headers});
    }


}
