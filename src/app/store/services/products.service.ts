import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product.interface';
import { resApiError } from '../interfaces/resApiError.interface';
import { resApiProduct } from '../interfaces/resApiProduct.interface';
import { resApiProductSave } from '../interfaces/resApiProductSave.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    private _urlBase = environment.URLBASE;
  constructor(private http:HttpClient) { }


  getAllProducts():Observable<resApiProduct> {
    const url:string = `${this._urlBase}/products` 
    return this.http.get<resApiProduct>(url);
  }

  saveNewProduct(product:Product):Observable<resApiProductSave >{


      const url:string = `${this._urlBase}/products`;
      return this.http.post<resApiProductSave>(url,product);
  }


}
