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
	productInput?: Product;
	listProducts!: Product[];
    productToBeDeleted?:Product;

	ngOnInit(): void {
        this.productToBeDeleted = {
            category: 'test',
            description: 'test',
            name: 'test',
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
            console.log('new');
			this.isNewProduct = isNew;
		} else {
			this.isNewProduct = isNew;
			this.productToBeDeleted = productSelect!;
		}
	}

	addToTheList(product: Product) {
		this.listProducts.push(product);
	}
	deleteTheList(product: Product) {
     
		this.listProducts = this.listProducts.filter( item => item._id !== product._id );
    }
}
