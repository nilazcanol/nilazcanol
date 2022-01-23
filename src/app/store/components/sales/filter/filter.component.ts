import { Component, EventEmitter, Output } from '@angular/core';
import { SalesService } from 'src/app/store/services/sales.service';
import { ArraySale } from '../../../interfaces/sales/saleResponseGet.inteface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: [
  ]
})
export class FilterComponent  {

  constructor(private salesServices: SalesService) { }

  month: Date = new Date();
  currentDate: Date = new Date();

  activeFilter:boolean = false;

  @Output() filteredSales:EventEmitter<ArraySale[]> = new EventEmitter();


  
  filterSales(date:string){
    date == this.currentDate.toLocaleDateString() ? this.changeFilter() : this.activeFilter = true;
      this.salesServices.getSalesForMonth(date).subscribe( (res) => {
        this.filteredSales.emit(res.sales);
      })

    
  };


  changeFilter(){
    this.activeFilter = false;
    this.month = this.currentDate
  }

}
