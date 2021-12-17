import { saleProductSelected } from './../../../interfaces/sales/saleProductSelected.interface';
import { Product } from './../../../interfaces/product/product.interface';

import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styles: [],
})
export class CartComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {
		this.HaveProducts = this.saleProductSelected.length == 0 ? false : true;
	}

	HaveProducts: Boolean = false;

	@Input('saleProductSelected')
	saleProductSelected: saleProductSelected[] = [];

	change: number = 0;

	onKey(event: any) {
		const { value } = event.target;
		this.change = value;
	}

	total: number = 0;

	totalPrice() {
		this.HaveProducts = this.saleProductSelected.length == 0 ? false : true;

		const arrayTotal = this.saleProductSelected.map((item) => {
			return item.product.price * item.amount;
		});

		this.total = arrayTotal.reduce(
			(productPreviuos, productCurrent) =>
				productPreviuos + productCurrent
		);
	}

    finishPurchase(){
        // TODO: Se debe mandar el id del producto y la cantidad en un array dentro de un json
    }
}
