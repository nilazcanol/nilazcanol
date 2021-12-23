import { SalesService } from 'src/app/store/services/sales.service';
import { ProductsService } from './../../services/products.service';
import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styles: [
  ]
})
export class StatisticsComponent implements OnInit {

  constructor(private productService:ProductsService, private saleService:SalesService) { }

    ngAfterContentInit(): void {
       
    }
  data: any;
  options: any;

  listProductsName  : string[] = [];
  countSales: number= 0
  total: number= 0
  
  ngOnInit(): void {
      this.productService.productsUnderStock().subscribe( res => {
          const {productsName, productsPrice} = res;
          this.listProductsName   = productsName;
          this.data = {
            labels: this.listProductsName,
            datasets: [{
                data: productsPrice,
                backgroundColor: ["#406882","#FF5C58","#4C3F91","#5E454B","#3A6351"],
                hoverBackgroundColor: ["#6998AB","#FE8F8F","#9145B6","#461111","#7EB5A6"]
            }]
        };    
      })

      this.saleService.staticticsSale().subscribe( res => {
          this.total        = res.totalReduce;
          this.countSales   = res.countSales;
      })

    
    this.options = {
        title: {
            display: true,
            text: 'Products under stock',
            fontSize: 25,
            position: 'top',
        }
        
    };
      


  }

  


}
