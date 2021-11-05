import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { category } from '../interfaces/category/category.interface';
import { Product } from '../interfaces/product/product.interface';
import { resApiProduct } from '../interfaces/resApi/resApiProduct.interface';
import { resApiProductResponse } from '../interfaces/resApi/resApiProductResponse.interface';
@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	private _urlBase = environment.URLBASE;
	constructor(private http: HttpClient) {}

	getAllProducts(page:number = 0): Observable<resApiProduct> {
		const url: string = `${this._urlBase}/products?from=${page}`;
		return this.http.get<resApiProduct>(url);
	}

	getProductById(productID?: string, category?:string): Observable<Product[]> {
        var url:string = ''
        if(productID?.length!==0){
            url = `${this._urlBase}/products/search?product=${productID}`;
        }else{
            url = `${this._urlBase}/products/search?category=${category}`;
        }
		return this.http.get<Product[]>(url);
	}

	saveNewProduct(product: FormData): Observable<resApiProductResponse> {
		const url: string = `${this._urlBase}/products`;
		return this.http.post<resApiProductResponse>(url, product);
	}

    updateProduct(product:FormData,productID:string):Observable<resApiProductResponse>{
        const url: string = `${this._urlBase}/products/${productID}`;
        return this.http.put<resApiProductResponse>(url,product);
    }


	deleteProduct(product: Product): Observable<resApiProductResponse> {
		const url: string = `${this._urlBase}/products/${product._id}`;
		return this.http.delete<resApiProductResponse>(url);
	}

  
}
