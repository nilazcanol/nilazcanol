import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product.interface';
import { resApiError } from '../interfaces/resApiError.interface';
import { resApiProduct } from '../interfaces/resApiProduct.interface';
import { resApiProductResponse } from '../interfaces/resApiProductResponse.interface';
@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	private _urlBase = environment.URLBASE;
	constructor(private http: HttpClient) {}

	getAllProducts(): Observable<resApiProduct> {
		const url: string = `${this._urlBase}/products`;
		return this.http.get<resApiProduct>(url);
	}

	getProductById(product: Product[]): Observable<Product[]> {
		const url: string = `${this._urlBase}/products/${product}`;
		return this.http.get<Product[]>(url);
	}

	saveNewProduct(product: Product): Observable<resApiProductResponse> {
		const url: string = `${this._urlBase}/products`;
		return this.http.post<resApiProductResponse>(url, product);
	}
	deleteProduct(product: Product): Observable<resApiProductResponse> {
		const url: string = `${this._urlBase}/products/${product._id}`;
		return this.http.delete<resApiProductResponse>(url);
	}

  
}
