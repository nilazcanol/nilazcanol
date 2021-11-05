import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { category } from 'src/app/store/interfaces/category/category.interface';
import { CategoriesService } from 'src/app/store/services/categories.service';

@Component({
	selector: 'app-modal-delete-category',
	templateUrl: './modal-delete-category.component.html',
	styles: [],
    providers: [MessageService]
})
export class ModalDeleteCategoryComponent implements OnInit {
	constructor(private categoryService: CategoriesService, private messageService: MessageService ) {}

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
                    this.messageService.add({
                        severity: 'success',
                        summary: `Category eliied correctly`,
                        detail: '',
                    });
					this.categoryDelete.emit(res.category);
				}else{
                    this.messageService.add({
                        severity: 'error',
                        summary: `There are ${res.categorySelected?.length} products with this category`,
                        detail: 'Can not be eliminated, you must delete the products first',
                    });
                }
			});
	}

	activateButtonAgain() {
		setTimeout(() => {
			this.eliminatedCategory = false;
		}, 2000);
	}
}
