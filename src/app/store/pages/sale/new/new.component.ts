import { SweetAlertIcon } from 'sweetalert2';
import Swal from 'sweetalert2';

import { saleProductSelected } from './../../../interfaces/sales/saleProductSelected.interface';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from 'src/app/store/interfaces/product/product.interface';
import { ProductsService } from 'src/app/store/services/products.service';

@Component({
	selector: 'app-new',
	templateUrl: './new.component.html',
	styles: [
		`
			.btn-dark:hover,
			.btn-dark:active,
			.btn-dark:visited {
				background-color: #ffc008;
				border: #ffc008;
				color: #212529;
				-webkit-transition: background-color 0.5s ease-out;
				-moz-transition: background-color 0.5s ease-out;
				-o-transition: background-color 0.5s ease-out;
				transition: background-color 0.5s ease-out;
			}
		`,
	],
})
export class NewComponent implements OnInit {
	constructor(private productService: ProductsService) {}

	listProduct: Product[] = [];

	shoppingCart: saleProductSelected[] = [];

    @ViewChild('buttonClose',{static: false}) buttonClose!:ElementRef; 

	page: number = 0;

	ngOnInit(): void {
		this.productService.getAllProducts().subscribe((res) => {
			this.listProduct = res.products;
		});
	}
	addShoppingCart(saleProductSelected: saleProductSelected) {
		this.shoppingCart.push({
			product: saleProductSelected.product,
			amount: saleProductSelected.amount,
		});
	}

	addMoreProducts() {
		this.productService.getAllProducts(this.page + 1).subscribe((res) => {
			
            if (res.products.length == 0) {
				this.showToast(
					'No more products',
					'',
					'info'
				);
			}
			res.products.forEach((product) => {
				this.page += 1;
				this.listProduct.push(product);
			});
		});
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
