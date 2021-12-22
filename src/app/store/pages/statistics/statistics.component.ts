import { ProductsService } from './../../services/products.service';
import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styles: [
  ]
})
export class StatisticsComponent implements OnInit {

  constructor(private productService:ProductsService) { }

    ngAfterContentInit(): void {
       
    }
  data: any;
  options: any;

  listProductsPrice : number[] = []
  listProductsName  : string[] = []

  ngOnInit(): void {
      this.productService.productsUnderStock().subscribe( res => {
          const {productsName, productsPrice} = res;
          this.listProductsName   = productsName;

          this.data = {
            labels: this.listProductsName,
            datasets: [
                {
                    data: productsPrice,
                    backgroundColor: [
                        "#406882",
                        "#FF5C58",
                        "#4C3F91",
                        "#5E454B",
                        "#3A6351"
                    ],
                    hoverBackgroundColor: [
                        "#6998AB", 
                        "#FE8F8F" ,
                        "#9145B6",
                        "#461111",
                        "#7EB5A6"
                    ]
                }
            ]
        };    
      })

    
    this.options = {
        title: {
            display: true,
            text: 'Products under stock',
            fontSize: 30,
            position: 'top',
            align: 'end'
        },
        legend: {
            position: 'left',
            
        }
    };
      


  }

  


}
