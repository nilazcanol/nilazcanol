import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { category } from 'src/app/store/interfaces/category.interface';
import { CategoriesService } from 'src/app/store/services/categories.service';

@Component({
	selector: 'app-modal-delete-category',
	templateUrl: './modal-delete-category.component.html',
	styles: [],
})
export class ModalDeleteCategoryComponent implements OnInit {
	constructor(private categoryService: CategoriesService) {}

	@Input('categorySelected') categorySelected!: category;
	@Output('categoryDelete') categoryDelete: EventEmitter<
		category
	> = new EventEmitter();

	eliminatedCategory: boolean = false;
	ngOnInit(): void {}

	deleteCategory(categorySelected: category) {
		this.categoryService
			.deleteCategory(categorySelected)
			.subscribe((res) => {
				console.log(res);
				if (res.status == true) {
					this.eliminatedCategory = true;
					this.categoryDelete.emit(res.category);
				}
			});
	}

	activateButtonAgain() {
		setTimeout(() => {
			this.eliminatedCategory = false;
		}, 2000);
	}
}
