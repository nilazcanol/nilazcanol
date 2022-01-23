import Swal, { SweetAlertIcon } from 'sweetalert2';
import { saleProductSelected } from './../../../interfaces/sales/saleProductSelected.interface';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/store/interfaces/product/product.interface';
import { ProductsService } from 'src/app/store/services/products.service';

@Component({
	selector: 'app-new',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
	constructor(private productService: ProductsService) {}

	listProduct: Product[]   = [];

	shoppingCart: saleProductSelected[] = [];


	page: number = 0;

	ngOnInit(): void {
		this.getProductsDB();
		this.salesLocalStorage();

	}

	salesLocalStorage(){
		const salesLocalStorage = localStorage.getItem('shoppingCart');
		if(salesLocalStorage){
			this.shoppingCart = JSON.parse(salesLocalStorage)
		}
	
	}

	getProductsDB(){
		this.productService.getAllProductsWithStock().subscribe((res) => {		
			this.listProduct = res.products;
		}, ( (err) => {
				this.showToast('Oh! there was a problem', err, 'error');
			}
		));
	}
	addShoppingCart(saleProductSelected: saleProductSelected) {       

        var indexProductSelected = 0;
        const thereAreProducts = this.shoppingCart.every( ( item, index)=> {
            indexProductSelected = index
            return item.product._id?.toString() !== saleProductSelected.product._id?.toString()
        } );
        
        if(thereAreProducts){
            this.shoppingCart.push({
                product: saleProductSelected.product,
                amount: saleProductSelected.amount,
            });

        }else{
            const { stock } = saleProductSelected.product;
            if( stock >= this.shoppingCart[indexProductSelected].amount ){
                this.shoppingCart[indexProductSelected].amount += saleProductSelected.amount;
            };
            
        }

		localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart) );
	}

	addMoreProducts() {
		this.productService.getAllProductsWithStock(this.page + 1).subscribe((res) => {		
			
            if (res.products.length == 0) {
				this.showToast(
					'No more products',
					'',
					'info'
				);
			}
			var indexProductSelected = 0;
			res.products.forEach((product) => {
				this.page += 1;	
				const thereIsAproduct =this.listProduct.some( (productFromTheList) => productFromTheList._id  == product._id )
				if(!thereIsAproduct){
					this.listProduct.push(product);
				}
			});
		}, (err)=>{
			this.showToast('Oh! there was a problem', err, 'error');
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
