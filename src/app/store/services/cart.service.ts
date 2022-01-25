import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private messageSource = new BehaviorSubject<Array<{product:Product, amount: number}>> ([]);

  currentShoppingCart  = this.messageSource.asObservable();


  constructor() { }

  changeShoppingCart (product:Product, amount:number) {
    this.messageSource.value.push({ product, amount});
    const data = this.messageSource.getValue()
    this.messageSource.next(data)
    
  }
}
