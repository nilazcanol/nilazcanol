import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationEnd } from '@angular/router';
import { Product } from '../../interfaces/product/product.interface';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styles: [],
})
export class ProductComponent implements OnInit {
	

    constructor(private route: ActivatedRoute) {
     
	}

	isList!: boolean;
	isNew!: boolean;
	productSelected: Product = {
		category: '',
		name: '',
		description: '',
		price: 0,
		stock: 0,
		img: '',
	};

    searchCategory?: string;
    
	ngOnInit(): void {


        const category: string[] = this.route.snapshot.queryParamMap.getAll('categoryid')

        if(category.length>0){
            if(category[0].length>0){
                this.searchCategory = category[0];
            }
        }
		this.isList = true;
		this.isNew = true;
	}

	showProduct(product: Product): void {
		this.productSelected = product;
	}

}
