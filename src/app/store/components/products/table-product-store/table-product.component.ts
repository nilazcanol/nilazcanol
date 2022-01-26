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
	amount:number = 0;
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
		if(product.stock < amount){
			this.showToast('You can not add more stock products', 'error' );

		}else{
			this.cartService.changeShoppingCart(product, Number(amount));
			this.showToast('It added product', 'success' );
		}
	}
	

	OnChange(valor:any){
		
		console.log(valor.value);
        
        if(valor>=100){ 
            this.amount = 100 
        } else if(valor<=0){
            this.amount = 0
        } else {
            this.amount = valor
        }
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
