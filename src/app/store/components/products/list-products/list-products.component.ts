import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/store/services/products.service';
import { Product } from '../../../interfaces/product.interface';

@Component({
	selector: 'app-list-products',
	templateUrl: './list-products.component.html',
	styles: [],
})
export class ListProductsComponent implements OnInit {
	constructor(private productService: ProductsService) {}
    

	isNewProduct: boolean = true;
	listProducts!: Product[];
    productSelected?:Product;
    
	ngOnInit(): void {
        this.productSelected = {
            category: '',
            description: '',
            name: '',
            price: 0,
            stock: 0,
        };
		this.productService.getAllProducts().subscribe(
			(res) => {
				this.listProducts = res.products;
			},
			() => {
				this.listProducts = [
					{
						category: 'test',
						description: 'test',
						name: 'test',
						price: 0,
						stock: 0,
					},
				];
			}
		);
	}

	selectProduct(isNew: boolean = true, productSelect?: Product): void {
		if (isNew) {
			this.isNewProduct = isNew;
		} else {
			this.isNewProduct = isNew;
			this.productSelected = productSelect!;
		}
	}

	addToTheList(product: Product) {
		this.listProducts.push(product);
	}
	deleteTheList(product: Product) {
     
		this.listProducts = this.listProducts.filter( item => item._id !== product._id );
    }
}
