import { Component, OnInit } from '@angular/core';
import { category } from '../../interfaces/category.interface';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styles: [
  ]
})
export class ListCategoriesComponent implements OnInit {

  constructor( private categoriesService: CategoriesService) { }

  listCategories: category[] = []
  ngOnInit(): void {
      this.listCategories = this.categoriesService.getListCategories();
  }

}
