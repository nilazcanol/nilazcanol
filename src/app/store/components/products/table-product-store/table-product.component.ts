import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Product } from '../../../interfaces/product/product.interface';
import { saleProductSelected } from '../../../interfaces/sales/saleProductSelected.interface';
import { CartService } from '../../../services/cart.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
	selector: 'app-table-product',
	templateUrl: './table-product.component.html',
	styleUrls: ['./table-product.component.css'],
	providers: [MessageService],
})
export class CardProductStoreComponent implements OnInit {
	constructor(private fb: FormBuilder, private cartService: CartService) {}

	@Input() products!: Product[];
	@Output() listSalesShopping: EventEmitter<saleProductSelected> =
		new EventEmitter();

	cardForm!: FormGroup;

	listProduct: saleProductSelected[] = [];

	ngOnInit(): void {
		this.cardForm = this.fb.group({
			quantity: 1,
		});
		this.getCart();
	}

	getCart() {
		this.cartService.currentShoppingCart.subscribe((listCart) => {
			this.listProduct = listCart;
		});
	}

	addCart(product: Product, amount: any) {
		this.cartService.changeShoppingCart(product, Number(amount));
		this.showToast('It added product', 'success' );
	}
	format(amount:any){
		console.log('vee');
		console.log(amount);
	}

	showToast(title: string, icon: SweetAlertIcon) {
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.addEventListener('mouseenter', Swal.stopTimer);
				toast.addEventListener('mouseleave', Swal.resumeTimer);
			},
		});

		Toast.fire({
			icon: icon,
			title: title,
		});
	}
}
