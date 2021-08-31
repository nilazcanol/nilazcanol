import { Component, OnInit } from '@angular/core';
import { category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styles: [
  ]
})
export class ListCategoriesComponent implements OnInit {

  constructor() { }

  listCategories: category[] = []
  ngOnInit(): void {
      this.listCategories = [
          { nameCategory:'Grocery'},
          { nameCategory:'Dairy products'}
        ]
  }

}
