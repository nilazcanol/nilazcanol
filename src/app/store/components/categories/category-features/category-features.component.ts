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
import { default as Swal, default as swal, SweetAlertIcon } from 'sweetalert2';

@Component({
	selector: 'app-category-features',
	templateUrl: './category-features.component.html',
	styles: [
		`
			.form-control:focus {
				border-color: #ffca2b !important;
				box-shadow: 0 0 0 0.2rem rgb(255, 202, 43, 0.25) !important;
			}
		`,
	],
})
export class CategoryFeaturesComponent implements OnInit, OnChanges {
	constructor(
		private fb: FormBuilder,
		private categoryService: CategoriesService
	) {}

	@Input() categoryInput?: category;
	@Input() isNewCategory!: boolean;

	categoryWasSaved: boolean = false;

	@Output() categoryNew: EventEmitter<category> = new EventEmitter();

	@Output() categoryUpdate: EventEmitter<category> = new EventEmitter();

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
			name: [
				'', 
				Validators.required
			],
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
				(err) => {
					this.Restoreform();
					this.showToast('Oh! there was a problem', err, 'error');
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
				(err) => {
					this.Restoreform();
					this.showToast('Oh! there was a problem', err, 'error');
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
