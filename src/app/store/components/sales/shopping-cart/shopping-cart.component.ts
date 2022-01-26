import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/store/interfaces/product/product.interface';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';
import { SalesService } from '../../../services/sales.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
	selector: 'app-shopping-cart',
	templateUrl: './shopping-cart.component.html',
	styles: [],
})
export class ShoppingCartComponent implements OnInit {
	constructor(
		private cartService: CartService,
		private router: Router,
		private saleService: SalesService
	) {}
	change: number = 0;
	HaveProducts: Boolean = false;

	listProduct: Array<{ product: Product; amount: number }> = [];
	ngOnInit(): void {

		this.cartService.currentShoppingCart.subscribe((cart) => {
			this.listProduct = cart;
		});

		this.totalPrice();
	}

	total: number = 0;

	totalPrice() {
		this.HaveProducts = this.listProduct.length == 0 ? false : true;

		const arrayTotal = this.listProduct.map((item) => {
			return item.product.price * item.amount;
		});
		if (arrayTotal.length == 0) {
			return;
		}
		this.total = arrayTotal.reduce(
			(productPreviuos, productCurrent) =>
				productPreviuos + productCurrent
		);
	}

	finishPurchase() {
		this.totalPrice();
		this.saleService.saveSale(this.total, this.listProduct).subscribe(
			(res) => {
				Swal.fire('Saved!', '', 'success');
				this.router.navigateByUrl('store/sales/history');
				this.cartService.clearShoppingCart();
			},
			(err) => {
				this.showToast('Oh! there was a problem', err, 'error');
			}
		);
	}

	onKey(event: any) {
		const { value } = event.target;
		this.change = value;
	}

	showToast(
		title: string,
		detai: string,
		icon: SweetAlertIcon,
		timeOut: number = 2000
	) {
		Swal.fire(title, detai, icon);
		setInterval(() => {
			Swal.close();
		}, timeOut);
	}


}
