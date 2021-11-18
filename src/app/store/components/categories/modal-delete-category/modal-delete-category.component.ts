import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { category } from 'src/app/store/interfaces/category/category.interface';
import { CategoriesService } from 'src/app/store/services/categories.service';
import swal from 'sweetalert2';

@Component({
	selector: 'app-modal-delete-category',
	templateUrl: './modal-delete-category.component.html',
	styles: [],
})
export class ModalDeleteCategoryComponent implements OnInit {
	constructor(
		private categoryService: CategoriesService,
	) {}

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
				if (res.status == true) {
					this.eliminatedCategory = true;
					swal.fire(
						'Success',
						'Will be deleted correctly',
						'success'
					);

					this.categoryDelete.emit(res.category);
				} else {
					swal.fire(
						`There are ${res.categorySelected?.length} products with this category`,
						'Can not be eliminated, you must delete the products first',
						'error'
					);
				}
			});
	}

	activateButtonAgain() {
		setTimeout(() => {
			this.eliminatedCategory = false;
		}, 2000);
	}
}
