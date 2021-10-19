import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/store/interfaces/product.interface';
import { ProductsService } from 'src/app/store/services/products.service';

@Component({
	selector: 'app-search',
	templateUrl: './product-search.component.html',
	styles: [],
})
export class SearchComponent implements OnInit {
	constructor(
		private fb: FormBuilder,
		private productService: ProductsService
	) {}

	searchForm!: FormGroup;


	@Output('productSearch') productSearch: EventEmitter<Product[]> = new EventEmitter<Product[]>();


	ngOnInit(): void {
		this.searchForm = this.fb.group({
			product: ['', Validators.required],
		});
	}
	searchProduct() {
		const productName = this.searchForm.controls['product'].value;
		this.productService.getProductById(productName).subscribe((res) => {
			this.productSearch.emit(res);
		});
	}
	getAllProducts() {
        const productName = this.searchForm.controls['product'].reset();

		this.productService.getAllProducts().subscribe((res) => {
			this.productSearch.emit(res.products);
		});
	}
}
