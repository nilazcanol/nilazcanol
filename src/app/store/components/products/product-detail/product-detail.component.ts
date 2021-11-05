import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/store/interfaces/product/product.interface';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styles: [],
})
export class ProductDetailComponent implements OnInit {
	@Input('productSelected') productSelected!: Product;

	constructor() {}

	ngOnInit(): void {}
}
