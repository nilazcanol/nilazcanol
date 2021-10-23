import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { pagination } from 'src/app/store/interfaces/pagination.interface';
import { ProductsService } from 'src/app/store/services/products.service';
import { Product } from '../../../interfaces/product.interface';

@Component({
	selector: 'app-list-products',
	templateUrl: './list-products.component.html',
	styles: [
		`
			.page-item.active .page-link {
				z-index: 3;
				color: #FFCA2C;
				border-color: #FFCA2C;
				background-color: #212529;
			}
            
			.page-link {
                background-color: #fff;
                color: #212529;
			}
		`,
	],
	providers: [MessageService],
})
export class ListProductsComponent implements OnInit {
	@Input('searchCategory') searchCategory?: string;
	constructor(
		private productService: ProductsService,
		private messageService: MessageService
	) {}

	isNewProduct: boolean = true;
	listProducts: Product[] = [];
	productSelected?: Product;
	pagination: pagination[] = [];
	pageActive: number = 1;

	ngOnInit(): void {
		this.productSelected = {
			category: '',
			description: '',
			name: '',
			price: 0,
			stock: 0,
		};

		if (this.searchCategory !== undefined) {
			this.searchProduct();
		} else {
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

	changePage(from: number) {
		this.pageActive = from;
		this.productService.getAllProducts((from - 1) * 6).subscribe((res) => {
			this.listProducts = res.products;
		});
	}

	searchProduct() {
		this.productService.getProductById('', this.searchCategory).subscribe(
			(res) => {
				this.messageService.add({
					severity: 'success',
					summary: 'It was filtered by category name',
					detail: '',
				});
				this.listProducts = res;
			},
			() => {
				this.messageService.add({
					severity: 'warn',
					summary: 'Error, contact technical support',
					detail: '',
				});
			}
		);
	}
}
