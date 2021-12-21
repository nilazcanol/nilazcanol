import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { category } from 'src/app/store/interfaces/category/category.interface';
import { CategoriesService } from 'src/app/store/services/categories.service';
import Swal from 'sweetalert2';
import swal, { SweetAlertIcon } from 'sweetalert2';

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

                    this.showToast('Success','Will be deleted correctly','success')
					this.categoryDelete.emit(res.category);
				} else {
                    this.showToast ('Can not be eliminated',`There are ${res.categorySelected?.length} products with this category`,'error',2000)
				}
			});
	}

	activateButtonAgain() {
		setTimeout(() => {
			this.eliminatedCategory = false;
		}, 500);
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
