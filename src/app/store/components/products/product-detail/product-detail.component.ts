import { Component, Input } from '@angular/core';
import { Product } from 'src/app/store/interfaces/product/product.interface';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styles: [],
})
export class ProductDetailComponent  {
	@Input() productSelected!: Product ;

	constructor() {}

}
