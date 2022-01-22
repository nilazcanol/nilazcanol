import { Component, Input } from '@angular/core';
import { ArraySale } from '../../../interfaces/sales/saleResponseGet.inteface';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styles: [
  ]
})
export class HistoryComponent  {

  @Input() listSales: ArraySale[] = [];

  constructor() { }


  filterSales( sales: ArraySale[] ){
    this.listSales = sales
  }

}
