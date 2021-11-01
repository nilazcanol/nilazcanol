import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/store/services/products.service';
import { Product } from '../../../interfaces/product.interface';

@Component({
	selector: 'app-modal-delete-product',
	templateUrl: './modal-delete-product.component.html',
	styles: [],
})
export class ModalDeleteProductComponent implements OnInit {
	constructor(private productService: ProductsService) {}

	@Input('productSelected') productSelected!: Product;
	@Output('productDelete') productDelete: EventEmitter<
		Product
	> = new EventEmitter();

	@Input('productRemoved') productRemoved: boolean = false;
    showLoading: boolean = false;

	ngOnInit(): void {}

	deleteProduct() {
        this.showLoading = true;
		this.productService
			.deleteProduct(this.productSelected)
			.subscribe((res) => {
				this.productDelete.emit(res.product);
				this.productRemoved = true;
                this.showLoading =false;

			},(err)=>{
                console.log(err.msg);
                this.showLoading =false;

            });
	}

	activateButtonAgain() {
		setTimeout(() => {
			this.productRemoved = false;
		}, 2000);
	}
}
