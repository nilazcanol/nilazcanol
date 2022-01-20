import { Component, OnInit, Input } from '@angular/core';
import { ArraySale } from '../../../interfaces/sales/saleResponseGet.inteface';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styles: [
  ]
})
export class HistoryComponent implements OnInit {

  @Input() listSales: ArraySale[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  filterSales( sales: ArraySale[] ){
    this.listSales = sales
  }

}
