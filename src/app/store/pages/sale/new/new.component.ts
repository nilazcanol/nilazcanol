import Swal, { SweetAlertIcon } from 'sweetalert2';
import { saleProductSelected } from './../../../interfaces/sales/saleProductSelected.interface';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/store/interfaces/product/product.interface';
import { ProductsService } from 'src/app/store/services/products.service';

@Component({
	selector: 'app-new',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
	constructor(private productService: ProductsService) {}

	listProduct: Product[]   = [];



	page: number = 0;

	ngOnInit(): void {
		this.getProductsDB();

	}


	getProductsDB(){
		this.productService.getAllProductsWithStock().subscribe((res) => {		
			this.listProduct = res.products;
		}, ( (err) => {
				this.showToast('Oh! there was a problem', err, 'error');
			}
		));
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
