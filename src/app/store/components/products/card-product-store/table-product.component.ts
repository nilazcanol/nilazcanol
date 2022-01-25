import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Product } from '../../../interfaces/product/product.interface';
import { saleProductSelected } from '../../../interfaces/sales/saleProductSelected.interface';
import { CartService } from '../../../services/cart.service';

@Component({
	selector: 'app-table-product',
	templateUrl: './table-product.component.html',
	styleUrls: ['./table-product.component.css'],
	providers: [MessageService],
})
export class CardProductStoreComponent implements OnInit {
	constructor(
		private fb: FormBuilder,
		private cartService:CartService	
	) {}

	@Input() products!: Product[];
	@Output() listSalesShopping:EventEmitter<saleProductSelected> = new EventEmitter()

	cardForm!: FormGroup;


	listProduct:saleProductSelected[]= [];

	ngOnInit(): void {
		this.cardForm = this.fb.group(
			{
				quantity: 1,
			},
		);
		this.getCart()
	}

	getCart() {
		this.cartService.currentShoppingCart.subscribe(
		  (listCart) => {
			this.listProduct = listCart;
		}
		)
	  }

	addCart(product: Product, amount:any) {    
		this.cartService.changeShoppingCart(product, amount)
	}

	showCart(){
		this.cartService.currentShoppingCart.subscribe( (cart) => {
			console.log(cart);
		})
	}
}
