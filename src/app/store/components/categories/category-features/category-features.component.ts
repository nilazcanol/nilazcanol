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
import { MessageService } from 'primeng/api';
import { category } from 'src/app/store/interfaces/category.interface';
import { CategoriesService } from 'src/app/store/services/categories.service';

@Component({
	selector: 'app-category-features',
	templateUrl: './category-features.component.html',
	styles: [],
	providers: [MessageService],
})
export class CategoryFeaturesComponent implements OnInit, OnChanges {
	constructor(
		private fb: FormBuilder,
		private categoryService: CategoriesService,
		private messageService: MessageService
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
            this.myFormCategory.controls['_id'].setValue(this.categoryInput?.uid);

		}
	}

	ngOnInit(): void {
		this.myFormCategory = this.fb.group({
			name: ['', Validators.required],
			_id: ['', ]
		});
	}

	saveCategory() {
		this.categoryService
			.saveCategory(this.myFormCategory.controls['name'].value)
			.subscribe(
				(res) => {
					this.categoryWasSaved = true;
					this.messageService.add({
						severity: 'success',
						summary: ' saved correctly',
						detail: '',
					});
					this.categoryNew.emit(res.category);
				},
				(errors: HttpErrorResponse) => {
					if (errors.status == 400) {
						this.messageService.add({
							severity: 'error',
							summary: 'Error Bad Request: 400',
							detail:
								' Error: Check the data entered: In case the error persists, contact the technical support.',
						});
					}
					if (errors.status == 500) {
						this.messageService.add({
							severity: 'error',
							summary: 'Error:  HTTP server internal error',
							detail: 'Contact the technical support.',
						});
					}
				}
			);
	}


    updateCategory() {
		this.categoryService
			.updateCategory(this.myFormCategory.controls['_id'].value,this.myFormCategory.controls['name'].value)
			.subscribe(
				(res) => {
					this.categoryWasSaved = true;
					this.messageService.add({
						severity: 'success',
						summary: ' saved correctly',
						detail: '',
					});
					this.categoryUpdate.emit(res.category);
				},
				(errors: HttpErrorResponse) => {
					if (errors.status == 400) {
						this.messageService.add({
							severity: 'error',
							summary: 'Error Bad Request: 400',
							detail:
								' Error: Check the data entered: In case the error persists, contact the technical support.',
						});
					}
					if (errors.status == 500) {
						this.messageService.add({
							severity: 'error',
							summary: 'Error:  HTTP server internal error',
							detail: 'Contact the technical support.',
						});
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
