import { SalesService } from 'src/app/store/services/sales.service';
import { ProductsService } from './../../services/products.service';
import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-statistics',
	templateUrl: './statistics.component.html',
	styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
	constructor(
		private productService: ProductsService,
		private saleService: SalesService
	) {}

	ngAfterContentInit(): void {}
	dataProductUnderStock: any;
	optionsUnderStock: any;
  
	dataSales: any;
	optionsSales: any;

	listProductsName: string[] = [];
	countSales: number = 0;
	total: number = 0;

	ngOnInit(): void {
		this.productsUnderStock();
		this.staticticsSale();
		this.optionsUnderStock = {
			title: {
				display: true,
				text: 'Products under stock',
				fontSize: 25,
				position: 'top',
			},
		};
		this.optionsSales = {
			title: {
				display: true,
				text: 'Sales for months',
				fontSize: 25,
				position: 'top',
			},
		};
	}

	productsUnderStock() {
		this.productService.productsUnderStock().subscribe((res) => {
			const { productsName, productsPrice } = res;
			this.listProductsName = productsName;
			this.dataProductUnderStock = {
				labels: this.listProductsName,
				datasets: [
					{
						data: productsPrice,
						backgroundColor: [
							'#406882',
							'#FF5C58',
							'#4C3F91',
							'#5E454B',
							'#3A6351',
						],
						hoverBackgroundColor: [
							'#6998AB',
							'#FE8F8F',
							'#9145B6',
							'#461111',
							'#7EB5A6',
						],
					},
				],
			};
		});

    this.dataSales = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
            label: 'Sales number',
            backgroundColor: '#6941A0',
            data: [2, 59, 80, 81, 56, 55, 40]
        }      
    ]
    };
	}

	staticticsSale() {
		this.saleService.staticticsSale().subscribe((res) => {
			this.total = res.totalReduce;
			this.countSales = res.countSales;
		});
	}
}
