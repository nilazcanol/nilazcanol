import { HttpErrorResponse } from '@angular/common/http';
import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { category } from '../../../interfaces/category.interface';
import { Product } from '../../../interfaces/product.interface';
import { CategoriesService } from '../../../services/categories.service';
import { ProductsService } from '../../../services/products.service';

@Component({
	selector: 'app-product-features',
	templateUrl: './product-features.component.html',
	styles: [],
	providers: [MessageService],
})
export class NewProductComponent implements OnInit {
	@Input('productInput') productInput?: Product;
	@Input('isNewProduct') isNewProduct: boolean = true;

	@Output('productNew') productNew: EventEmitter<Product> = new EventEmitter();

	listCategories: category[] = [{ name: 'default' }];
	productWasSaved: boolean = false;



	constructor(
		private fb: FormBuilder,
		private productService: ProductsService,
		private categoryService: CategoriesService,
		private messageService: MessageService
	) {}


	myFormProduct!: FormGroup;

    // TODO: Implement update product

	ngOnInit(): void {
        this.myFormProduct = this.fb.group({
            name: [this.productInput!.name , Validators.required],
            img: [this.productInput!.img],
            description: [this.productInput!.description, Validators.required],
            price: [this.productInput!.price, Validators.required],
            stock: [this.productInput!.stock, Validators.required],
            category: [this.productInput!.category, Validators.required],
        }); 
		

		this.categoryService.getAllCategories().subscribe((res) => {
			this.listCategories = res.categories;
		});
	}

	fieldIsValid(campo: string) {
		return (
			this.myFormProduct.controls[campo].errors &&
			this.myFormProduct.controls[campo].touched
		);
	}

	clearForm(): void {
		this.myFormProduct.reset();
	}

	saveProduct(): void {
		this.productService.saveNewProduct(this.myFormProduct.value).subscribe(
			(res) => {
				this.messageService.add({
					severity: 'success',
					summary: ' saved correctly',
					detail: '',
				});
				this.productWasSaved = true;

				this.productNew.emit(res.product);
			},
			(errors: HttpErrorResponse) => {
				if (errors.status == 400) {
					this.messageService.add({
						severity: 'error',
						summary: 'Error Bad Request: 400',
						detail:
							' Error: Check the data entered: In case the error persists, contact the technical support.',
					});
				}
				if (errors.status == 500) {
					this.messageService.add({
						severity: 'error',
						summary: 'Error:  HTTP server internal error',
						detail: 'Contact the technical support.',
					});
				}
			}
		);
	}

	updateProduct(): void {
	}

	Restoreform() {
		setTimeout(() => {
			this.myFormProduct.reset();
			this.productWasSaved = false;
		}, 2000);
	}
}
