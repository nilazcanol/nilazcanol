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
import { category } from 'src/app/store/interfaces/category/category.interface';
import { CategoriesService } from 'src/app/store/services/categories.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import swal from 'sweetalert2';

@Component({
	selector: 'app-category-features',
	templateUrl: './category-features.component.html',
	styles: [
    `
    .form-control:focus {
      border-color: #FFCA2B !important;
      box-shadow: 0 0 0 0.2rem rgb(255, 202, 43, 0.25) !important;
}


`
  ],
})
export class CategoryFeaturesComponent implements OnInit, OnChanges {
	constructor(
		private fb: FormBuilder,
		private categoryService: CategoriesService
	) {}

	@Input('categoryInput') categoryInput?: category;
	@Input('isNewCategory') isNewCategory!: boolean;

	categoryWasSaved: boolean = false;

	@Output('categoryNew') categoryNew: EventEmitter<
		category
	> = new EventEmitter();

	@Output('categoryUpdate') categoryUpdate: EventEmitter<
		category
	> = new EventEmitter();

	myFormCategory!: FormGroup;

	ngOnChanges(changes: SimpleChanges): void {
		if (this.myFormCategory !== undefined) {
			this.myFormCategory.controls['name'].setValue(
				this.categoryInput?.name
			);
			this.myFormCategory.controls['_id'].setValue(
				this.categoryInput?.uid
			);
		}
	}

	ngOnInit(): void {
		this.myFormCategory = this.fb.group({
			name: ['', Validators.required],
			_id: [''],
		});
	}

	saveCategory() {
		this.categoryService
			.saveCategory(this.myFormCategory.controls['name'].value)
			.subscribe(
				(res) => {
					this.categoryWasSaved = true;
					this.showToast('Success', 'Saved correctly', 'success');
                    this.Restoreform();
					this.categoryNew.emit(res.category);
				},
				(errors: HttpErrorResponse) => {
                    this.Restoreform();
					if (errors.status == 400) {
						this.showToast(
							'Error',
							'Check the data entered: In case the error persists, contact the technical support.',
							'error'
						);
					}
					if (errors.status == 500) {
						this.showToast(
							'Error',
							'HTTP server internal error',
							'error'
						);
					}
				}
			);
	}

	updateCategory() {
		this.categoryService
			.updateCategory(
				this.myFormCategory.controls['_id'].value,
				this.myFormCategory.controls['name'].value
			)
			.subscribe(
				(res) => {
                    this.Restoreform();
					this.categoryWasSaved = true;
					this.showToast('Saved correctly', '', 'success');
					swal.fire('Success', 'Saved correctly', 'success');

					this.categoryUpdate.emit(res.category);
				},
				(errors: HttpErrorResponse) => {
                    this.Restoreform();
					if (errors.status == 400) {
						this.showToast(
							'Error 400 bad request',
							'Check the data entered: In case the error persists, contact the technical support',
							'error'
						);
					}
					if (errors.status == 500) {
						this.showToast(
							'Error 500 Internal Server',
							'Contact the technical support.',
							'error'
						);
					}
				}
			);
	}

	fieldIsValid(campo: string) {
		return (
			this.myFormCategory.controls[campo].errors &&
			this.myFormCategory.controls[campo].touched
		);
	}

	Restoreform() {
		setTimeout(() => {
			this.categoryWasSaved = false;
			this.myFormCategory.reset();
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
