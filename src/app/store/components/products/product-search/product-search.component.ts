import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { category } from 'src/app/store/interfaces/category/category.interface';
import { Product } from 'src/app/store/interfaces/product/product.interface';
import { CategoriesService } from 'src/app/store/services/categories.service';
import { ProductsService } from 'src/app/store/services/products.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
	selector: 'app-search',
	templateUrl: './product-search.component.html',
	styles: [
    `
    .form-control:focus {
      border-color: #FFCA2B !important;
      box-shadow: 0 0 0 0.2rem rgb(255, 202, 43, 0.25) !important;
}


`
  ],

})
export class SearchComponent implements OnInit {
	constructor(
		private fb: FormBuilder,
		private productService: ProductsService,
        private categoryService: CategoriesService,
	) {}

	searchForm!: FormGroup;

    categoryList: category[] = [];


	@Output('productSearch') productSearch: EventEmitter<Product[]> = new EventEmitter<Product[]>();


	ngOnInit(): void {
		this.searchForm = this.fb.group({
			product: ['', Validators.required],
			category: ['', Validators.required],
		});
        this.categoryService.getAllCategories().subscribe( res => {
            this.categoryList = res.categories
        })
    }
	searchProduct() {
		const productName = this.searchForm.controls['product'].value;
		const categoryName = this.searchForm.controls['category'].value;

        if(productName.length >= 1 ){
            this.productService.getProductById(productName).subscribe((res) => {
                this.productSearch.emit(res);
                this.searchForm.controls['product'].reset('');
                this.searchForm.controls['category'].reset('');
                this.showToast('Success','It was filtered by product name','success')
                if(res.length === 0){
                    this.showToast('Ups!','No result for search','info',1000);
                }else{
                    this.showToast('Success','it was filtered by category name','success',1000);
                }
            },()=>{
                this.showToast('Error','Contact technical support','error');
            });
        }else{
            this.productService.getProductById('',categoryName).subscribe((res) => {
                this.productSearch.emit(res);
                this.searchForm.controls['category'].reset('');
                this.searchForm.controls['product'].reset('');
                if(res.length === 0){
                    this.showToast('Ups!','No result for search','info',1000);
                }else{
                    this.showToast('Success','it was filtered by category name','success',1000);
                }


            },()=>{
                this.showToast('Error','Contact technical support','error');


            });

        }
	}
	getAllProducts() {
        const productName = this.searchForm.controls['product'].reset();

		this.productService.getAllProducts().subscribe((res) => {
			this.productSearch.emit(res.products);
		});
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
