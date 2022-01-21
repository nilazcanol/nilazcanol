import { HttpErrorResponse } from '@angular/common/http';
import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { category } from '../../../interfaces/category/category.interface';
import { Product } from '../../../interfaces/product/product.interface';
import { CategoriesService } from '../../../services/categories.service';
import { ProductsService } from '../../../services/products.service';

@Component({
	selector: 'app-product-add-and-update',
	templateUrl: './product-add-and-update.html',
	styles: [
		`
			.form-control:focus,
			.form-select:focus {
				border-color: #ffca2b !important;
				box-shadow: 0 0 0 0.2rem rgb(255, 202, 43, 0.25) !important;
			}
		`,
	],
})
export class NewProductComponent implements OnInit, OnChanges {
	@Input('productInput') productInput?: Product;
	@Input('isNewProduct') isNewProduct!: boolean;

	@Output('productNew') productNew: EventEmitter<
		Product
	> = new EventEmitter();
	@Output('productUpdate') productUpdate: EventEmitter<
		Product
	> = new EventEmitter();

	listCategories: category[] = [{ name: 'default' }];
	productWasSaved: boolean = false;

	showLoading: boolean = false;

	public files: any = [];

	constructor(
		private fb: FormBuilder,
		private productService: ProductsService,
		private categoryService: CategoriesService,
		private sanitizer: DomSanitizer
	) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.isNewProduct == true) {
			this.Restoreform();
		}
		if (this.myFormProduct !== undefined) {
			this.myFormProduct.controls['_id'].setValue(this.productInput?._id);
			this.myFormProduct.controls['name'].setValue(
				this.productInput?.name
			);
			this.myFormProduct.controls['description'].setValue(
				this.productInput?.description
			);
			this.myFormProduct.controls['img'].setValue(this.productInput?.img);
			this.myFormProduct.controls['category'].setValue(
				this.productInput?.category
			);
			this.myFormProduct.controls['price'].setValue(
				this.productInput?.price
			);
			this.myFormProduct.controls['stock'].setValue(
				this.productInput?.stock
			);
		}
	}

	myFormProduct!: FormGroup;

	ngOnInit(): void {
		this.myFormProduct = this.fb.group({
			_id: [this.productInput!._id],
			name: [this.productInput!.name, Validators.required],
			img: [this.productInput!.img, Validators.required],
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

	// captureDocument(event: any) {
	// 	const fileCaptured = event.target.files[0];
	// 	this.extractBase64(fileCaptured).then((imagen: any) => {
	// 		this.files.push(imagen.base);
	// 	});
	// }

	saveProduct(): void {
		try {
			this.showLoading = true;
			const formularioDeDatos = new FormData();
			// formularioDeDatos.append('files', this.files[0]);
			formularioDeDatos.append(
				'category',
				this.myFormProduct.controls['category'].value
			);
			formularioDeDatos.append(
				'description',
				this.myFormProduct.controls['description'].value
			);
			formularioDeDatos.append(
				'img',
				this.myFormProduct.controls['img'].value
			);
			formularioDeDatos.append(
				'name',
				this.myFormProduct.controls['name'].value
			);
			formularioDeDatos.append(
				'price',
				this.myFormProduct.controls['price'].value
			);
			formularioDeDatos.append(
				'stock',
				this.myFormProduct.controls['stock'].value
			);
			formularioDeDatos.append(
				'_id',
				this.myFormProduct.controls['_id'].value
			);
			this.productService.saveNewProduct(formularioDeDatos).subscribe(
				(res) => {
					this.showToast('Success', 'Saved correctly', 'success');

					this.productWasSaved = true;
					this.productNew.emit(res.product);
					this.showLoading = false;
					this.Restoreform();
				},
				(err) => {
					this.showLoading = false;

					this.showToast('Oh! there was a problem',err,'error');
					this.Restoreform();
					setInterval(() => {
						Swal.close();
					}, 2000);
				}
			);
		} catch (error) {}
	}

	// TODO: No se actualiza la lista de forma instantánea

	updateProduct(): void {
		const formularioDeDatos = new FormData();
		formularioDeDatos.append('files', this.files[0]);
		formularioDeDatos.append(
			'category',
			this.myFormProduct.controls['category'].value
		);
		formularioDeDatos.append(
			'description',
			this.myFormProduct.controls['description'].value
		);
		formularioDeDatos.append(
			'img',
			this.myFormProduct.controls['img'].value
		);
		formularioDeDatos.append(
			'name',
			this.myFormProduct.controls['name'].value
		);
		formularioDeDatos.append(
			'price',
			this.myFormProduct.controls['price'].value
		);
		formularioDeDatos.append(
			'stock',
			this.myFormProduct.controls['stock'].value
		);
		formularioDeDatos.append(
			'_id',
			this.myFormProduct.controls['_id'].value
		);
		this.productService
			.updateProduct(
				formularioDeDatos,
				this.myFormProduct.controls['_id'].value
			)
			.subscribe(
				(res) => {
					this.showToast('Success', 'Saved correctly', 'success');
					this.productWasSaved = true;
					this.productUpdate.emit(res.product);
					this.Restoreform();
				},
				(err) => { this.showToast('Oh! there was a problem',err,'error'); }
			);
	}

	Restoreform() {
		if (typeof this.myFormProduct !== 'undefined') {
			this.myFormProduct.reset();
		}
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
