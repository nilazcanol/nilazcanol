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
import swal from 'sweetalert2';

@Component({
	selector: 'app-category-features',
	templateUrl: './category-features.component.html',
	styles: [],
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
					swal.fire('Success', 'Saved correctly', 'success');

					this.categoryNew.emit(res.category);
				},
				(errors: HttpErrorResponse) => {
					if (errors.status == 400) {
						swal.fire(
							'Error',
							'Check the data entered: In case the error persists, contact the technical support.',
							'error'
						);
					}
					if (errors.status == 500) {
						swal.fire(
							'Error:  HTTP server internal error',
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
					this.categoryWasSaved = true;
					swal.fire('Success', 'Saved correctly', 'success');

					this.categoryUpdate.emit(res.category);
				},
				(errors: HttpErrorResponse) => {
					if (errors.status == 400) {
						swal.fire(
							'Bad Request: 400 ',
							'Check the data entered: In case the error persists, contact the technical support.',
							'success'
						);
					}
					if (errors.status == 500) {
						swal.fire(
							'Error:  HTTP server internal error',
							'Contact the technical support.',
							'success'
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
}
