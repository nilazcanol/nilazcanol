import { HttpErrorResponse } from '@angular/common/http';
import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { category } from '../../../interfaces/category.interface';
import { Product } from '../../../interfaces/product.interface';
import { CategoriesService } from '../../../services/categories.service';
import { ProductsService } from '../../../services/products.service';

@Component({
	selector: 'app-product-add-and-update',
	templateUrl: './product-add-and-update.html',
	styles: [],
	providers: [MessageService],
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

    public files:any = []

	constructor(
		private fb: FormBuilder,
		private productService: ProductsService,
		private categoryService: CategoriesService,
		private messageService: MessageService,
        private sanitizer:DomSanitizer
	) {}

	ngOnChanges(changes: SimpleChanges): void {
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
    
    captureDocument(event:any){
        const fileCaptured = event.target.files[0];       
        this.extractBase64(fileCaptured).then((imagen: any) => {
            this.files.push(imagen.base);
          })
    }

 
	saveProduct(): void {

        try {
            this.showLoading = true;
            const formularioDeDatos = new FormData();
            formularioDeDatos.append('files', this.files[0]);    
            formularioDeDatos.append('category',this.myFormProduct.controls['category'].value) 
            formularioDeDatos.append('description',this.myFormProduct.controls['description'].value) 
            formularioDeDatos.append('img',this.myFormProduct.controls['img'].value) 
            formularioDeDatos.append('name',this.myFormProduct.controls['name'].value) 
            formularioDeDatos.append('price',this.myFormProduct.controls['price'].value)
            formularioDeDatos.append('stock',this.myFormProduct.controls['stock'].value) 
            formularioDeDatos.append('_id',this.myFormProduct.controls['_id'].value) 
            this.productService.saveNewProduct(formularioDeDatos).subscribe(
                (res) => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Saved correctly',
                        detail: '',
                    });
                    this.productWasSaved = true;
    
                    this.productNew.emit(res.product);
                    this.showLoading = false;
                },
                (errors: HttpErrorResponse) => {
                    this.showLoading = false;

                    console.log(errors.error);
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
    
                    this.messageService.add({
                        severity: 'error',
                        summary: errors.error.msg,
                        detail:'',
                    });
                }
                );
        } catch (error) {
            
        }

		
        }

	updateProduct(): void {
        const formularioDeDatos = new FormData();
        formularioDeDatos.append('files', this.files[0]);    
        formularioDeDatos.append('category',this.myFormProduct.controls['category'].value) 
        formularioDeDatos.append('description',this.myFormProduct.controls['description'].value) 
        formularioDeDatos.append('img',this.myFormProduct.controls['img'].value) 
        formularioDeDatos.append('name',this.myFormProduct.controls['name'].value) 
        formularioDeDatos.append('price',this.myFormProduct.controls['price'].value)
        formularioDeDatos.append('stock',this.myFormProduct.controls['stock'].value) 
        formularioDeDatos.append('_id',this.myFormProduct.controls['_id'].value) 
		this.productService.updateProduct(formularioDeDatos,this.myFormProduct.controls['_id'].value).subscribe(
			(res) => {
				this.messageService.add({
					severity: 'success',
					summary: 'Saved correctly',
					detail: '',
				});
				this.productWasSaved = true;

				this.productUpdate.emit(res.product);
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

	Restoreform() {
		setTimeout(() => {
			this.myFormProduct.reset();
			this.productWasSaved = false;
		}, 100);
	}

   
    extractBase64 = async ($event: any) => new Promise((resolve, reject) => {
        try {
          const unsafeImg = window.URL.createObjectURL($event);
          const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
          const reader = new FileReader();
          reader.readAsDataURL($event);
          reader.onload = () => {
            resolve({
              base: reader.result
            });
          };
          reader.onerror = error => {
            resolve({
              base: null
            });
          };
    
        } catch (e) {
            reject({
                error:e
            })
        }
      })
}
