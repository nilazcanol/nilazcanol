import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { category } from '../../../interfaces/category/category.interface';
import { CategoriesService } from '../../../services/categories.service';
import Swal, {SweetAlertIcon} from 'sweetalert2';

@Component({
	selector: 'app-list-categories',
	templateUrl: './list-categories.component.html',
	styles: [],
})
export class ListCategoriesComponent implements OnInit {
	constructor(
		private categoriesService: CategoriesService,
		private router: Router
	) {}

	listCategories: category[] = [];

	categorySelected: category = { name: 'Abarrates' };
	isNewCategory: boolean = true;
	showLoading: boolean = true;

	ngOnInit(): void {
		this.showLoading = true;
		this.categoriesService.getAllCategories().subscribe(
			(res) => {
				this.listCategories = res.categories;
				this.showLoading = false;
			},
			(err) => {
				this.showLoading = false;
				this.showToast('Oh! there was a problem', err, 'error');

			}
		);
	}

	selectCategory(newCategory: boolean, category?: category) {
		if (category !== undefined) {
			this.categorySelected = category!;
		}
    this.isNewCategory = newCategory;

	}

	addToTheList(category: category) {
		this.listCategories.push(category);
	}

	updateToTheList(category: category) {
		const productUpdated = this.listCategories.findIndex(
			(el) => el.uid == category.uid
		);
		let newAllCategory = [...this.listCategories];
		newAllCategory[productUpdated] = {
			...newAllCategory[productUpdated],
			name: category.name,
			uid: category.uid,
		};

		this.listCategories = newAllCategory;
	}
	deleteToTheList(category: category) {
		this.listCategories = this.listCategories.filter(
			(item) => item.uid !== category.uid
		);
	}

	goToProductByCategory(category: category) {
		const queryParams: Params = { categoryid: category.uid };

		this.router.navigate(['/store/products'], {
			queryParams,
		});
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
