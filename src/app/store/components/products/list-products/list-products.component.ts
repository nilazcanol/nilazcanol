import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { pagination } from 'src/app/store/interfaces/others/pagination.interface';
import { ProductsService } from 'src/app/store/services/products.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { Product } from '../../../interfaces/product/product.interface';

@Component({
	selector: 'app-list-products',
	templateUrl: './list-products.component.html',
	styleUrls: ['./list-products.component.css'],
	providers: [MessageService],
})
export class ListProductsComponent implements OnInit {
	@Input('searchCategory') searchCategory?: string;

	constructor(
		private productService: ProductsService,
		private messageService: MessageService
	) {}

	listProducts: Product[] = [];
	productSelected?: Product;
	pagination: pagination[] = [];
	pageActive: number = 1;
	isNewProduct: boolean = true;
	showLoading: boolean = true;

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
			this.showLoading = false;
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
					this.showLoading = false;
				},
				() => {
					this.listProducts = [];
					this.showLoading = false;
				}
			);
		}
	}

	selectProduct(newProduct: boolean, productSelect?: Product): void {
		if (productSelect !== undefined) {
			this.productSelected = productSelect!;
			this.isNewProduct = newProduct;
		}
		this.isNewProduct = newProduct;
	}

	addToTheList(product: Product) {
		this.listProducts.push(product);
	}

	updateToTheList(product: Product) {
		const productUpdated = this.listProducts.findIndex(
			(el) => el._id == product._id
		);
		let newAllProducts = [...this.listProducts];
		newAllProducts[productUpdated] = {
			...newAllProducts[productUpdated],
			name: product.name,
			description: product.description,
			price: product.price,
			img: product.img,
			category: product.category,
			stock: product.stock,
			_id: product._id,
		};

		this.listProducts = newAllProducts;
	}

	refreshTheList(products: Product[]) {
        if(products.length !== 0){
            this.listProducts = products;
        }
	}

	deleteTheList(product: Product) {
		this.listProducts = this.listProducts.filter(
			(item) => item._id !== product._id
		);
	}

	changePage(from: number) {
		if (from <= 0 || from > this.pagination.length) {
			this.showToast('Ups!', 'The value is invalid ' + from, 'info');
		} else {
			this.pageActive = from;
			this.productService
				.getAllProducts((from - 1) * 6)
				.subscribe((res) => {
					this.listProducts = res.products;
				});
		}
	}

	searchProduct() {
		this.productService.getProductById('', this.searchCategory).subscribe(
			(res) => {

                if(res.length !== 0){
                    this.listProducts = res;
                }

			},
			() => {
				this.showToast(
					'Error!',
					'Contact technical support',
					'warning'
				);
			}
		);
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
