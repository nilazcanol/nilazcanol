import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product/product.interface';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	private messageSource = new BehaviorSubject<
		Array<{ product: Product; amount: number }>
	>([]);

	currentShoppingCart = this.messageSource.asObservable();

	constructor() {}

	clearShoppingCart(){
		this.messageSource.next([]);
		localStorage.setItem('shoppingCart', '' )

	}

	changeShoppingCart(product: Product, amount: number) {
		const cart = this.messageSource.getValue();
    
    const resultProductIsOnTheList = this.productIsOnTheList(cart, 0, product);
    const { indexProductSelected, thereAreProducts} = resultProductIsOnTheList;

		if (thereAreProducts) {
			cart.push({
				product: product,
				amount: amount,
			});
		} else {
			const { stock } = product;
			if (stock >= cart[indexProductSelected].amount) {
				cart[indexProductSelected].amount += amount;
			}
		}
		localStorage.setItem('shoppingCart', JSON.stringify(cart) )
		this.messageSource.next(cart);
	}
  

	productIsOnTheList = (cart:	Array<{ product: Product; amount: number }>, indexProductSelected:number, product: Product ) => {
		const thereAreProducts = cart.every((item, index) => {
			indexProductSelected = index;
			return item.product._id?.toString() !== product._id?.toString();
		});
    return {thereAreProducts, indexProductSelected};
	};
}
