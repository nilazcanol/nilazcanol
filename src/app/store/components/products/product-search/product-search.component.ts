import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { category } from 'src/app/store/interfaces/category.interface';
import { Product } from 'src/app/store/interfaces/product.interface';
import { CategoriesService } from 'src/app/store/services/categories.service';
import { ProductsService } from 'src/app/store/services/products.service';

@Component({
	selector: 'app-search',
	templateUrl: './product-search.component.html',
	styles: [],
})
export class SearchComponent implements OnInit {
	constructor(
		private fb: FormBuilder,
		private productService: ProductsService,
        private categoryService: CategoriesService
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
            });
        }else{
            this.productService.getProductById('',categoryName).subscribe((res) => {
                this.productSearch.emit(res);
                this.searchForm.controls['category'].reset('');
                this.searchForm.controls['product'].reset('');
            });

        }
	}
	getAllProducts() {
        const productName = this.searchForm.controls['product'].reset();

		this.productService.getAllProducts().subscribe((res) => {
			this.productSearch.emit(res.products);
		});
	}
}
