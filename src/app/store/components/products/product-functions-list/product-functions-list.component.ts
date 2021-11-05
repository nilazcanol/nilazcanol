import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-functions-list',
  templateUrl: './product-functions-list.component.html',
  styles: [
  ]
})
export class ProductFunctionsListComponent implements OnInit {

  constructor() { }

  listFuntion!: string[];

  ngOnInit(): void {
    this.listFuntion = [
        'Create product',
        'See detail',
        'Edit product',
        'Remove product',
        'Search for the name'
    ]
}

}
