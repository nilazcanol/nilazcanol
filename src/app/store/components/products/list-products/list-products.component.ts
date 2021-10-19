import { Component, OnInit } from '@angular/core';
import { pagination } from 'src/app/store/interfaces/pagination.interface';
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
	productSelected?: Product;
	pagination: pagination[] = [];
    pageActive:number=1;

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
				const numberOfPages = Number(res.total) / 6;
				for (let index = 0; index < numberOfPages; index++) {
					this.pagination.push({
						numberPage: index + 1,
						url: 'aa',
					});
				}
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

	refreshTheList(products: Product[]) {
		this.listProducts = products;
	}

	deleteTheList(product: Product) {
		this.listProducts = this.listProducts.filter(
			(item) => item._id !== product._id
		);
	}

    changePage(from:number){
        this.pageActive = from;        
        this.productService.getAllProducts((from-1)*6).subscribe( res => {
            this.listProducts= res.products
        })
    }
}
