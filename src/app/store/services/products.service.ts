import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { resApiProduct } from '../interfaces/resApiProduct.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    private _urlBase = environment.URLBASE;
  constructor(private http:HttpClient) { }

  getProducts = ()=>{
        return [
            {
              name: 'Arroz Tucapel',
              description: 'Arroz Gran Selección Grado 2 Tucapel, 1kg',
              price:1999,
              stock:'13',
              category:'Grocery',
              img:'https://jumbo.vteximg.com.br/arquivos/ids/396670/Leche-entera-1-L.jpg?v=637469297528530000'
            },
            {
              name: 'Azúcar Iansa',
              description: 'Azúcar Blanca Granulada Iansa, 1kg',
              price:5999,
              stock:'13',
              category:'Grocery',
              img:'https://jumbo.vteximg.com.br/arquivos/ids/396670/Leche-entera-1-L.jpg?v=637469297528530000'
            },
            {
              name: 'Azúcar Iansa',
              description: 'Azúcar Blanca Granulada Iansa, 1kg',
              price:5999,
              stock:'13',
              category:'Grocery',
              img:'https://jumbo.vteximg.com.br/arquivos/ids/396670/Leche-entera-1-L.jpg?v=637469297528530000'
            },
            {
              name: 'Azúcar Iansa',
              description: 'Azúcar Blanca Granulada Iansa, 1kg',
              price:5999,
              stock:'13',
              category:'Grocery',
              img:'https://jumbo.vteximg.com.br/arquivos/ids/396670/Leche-entera-1-L.jpg?v=637469297528530000'
            },
          ]
  }

  getAllProducts():Observable<resApiProduct> {
    const url:string = `${this._urlBase}/products` 
    return this.http.get<resApiProduct>(url);

  }



}
