import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from 'src/app/store/services/sales.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { Product } from '../../../interfaces/product/product.interface';
import { saleProductSelected } from './../../../interfaces/sales/saleProductSelected.interface';


@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styles: [],
})
export class CartComponent implements OnInit {


	constructor(private saleService: SalesService, private router:Router) {}

	ngOnInit(): void {
		this.HaveProducts = this.saleProductSelected.length == 0 ? false : true;
		this.totalPrice();
	}

	HaveProducts: Boolean = false;

	@Input()
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
		if(arrayTotal.length == 0) { return }
		this.total = arrayTotal.reduce(
			(productPreviuos, productCurrent) =>
				productPreviuos + productCurrent
		);
	}

    finishPurchase(){
        this.totalPrice();
        this.saleService.saveSale(this.total, this.saleProductSelected).subscribe( (res) => {        
			Swal.fire('Saved!', '', 'success')
			
			this.router.navigateByUrl('store/sales/history');
			localStorage.setItem('shoppingCart', '')
		}, (err) => {
			this.showToast('Oh! there was a problem', err, 'error');
		});
    }

	deleteProduct(product:Product){
		const saleFilter = [...this.saleProductSelected.filter( (sale) => sale.product._id !== product._id)];
		this.saleProductSelected = saleFilter;
		localStorage.setItem('shoppingCart', JSON.stringify(saleFilter) );

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
