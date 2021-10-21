import { Component, OnInit } from '@angular/core';
import { category } from '../../../interfaces/category.interface';
import { CategoriesService } from '../../../services/categories.service';

@Component({
	selector: 'app-list-categories',
	templateUrl: './list-categories.component.html',
	styles: [],
})
export class ListCategoriesComponent implements OnInit {
	constructor(private categoriesService: CategoriesService) {}

	listCategories: category[] = [];

	categorySelected: category = {name:'Abarrates'};

	ngOnInit(): void {
		this.categoriesService.getAllCategories().subscribe((res) => {
			this.listCategories = res.categories;
		});
	}

	selectCategory(category:category) {
        this.categorySelected= category;
    }

    addToTheList(category:category){
        this.listCategories.push(category);
    }
    deleteToTheList(category:category){
        	this.listCategories = this.listCategories.filter(
			(item) => item.uid !== category.uid
		);        
    }

    goToProductByCategory(category:category){
        /**
         * TODO: Should be sent by router ("navegate")
         * TODO: The category to request the data with that filter
         
         */
    }
}
