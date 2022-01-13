import { Router } from '@angular/router';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { SalesService } from 'src/app/store/services/sales.service';
import { saleProductSelected } from './../../../interfaces/sales/saleProductSelected.interface';

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styles: [],
})
export class CartComponent implements OnInit {

    // * Intentar cerrar el modal mandando un true en el caso de que sea finalizado correctamente

	constructor(private saleService: SalesService, private router:Router) {}

	ngOnInit(): void {
		this.HaveProducts = this.saleProductSelected.length == 0 ? false : true;
	}

	HaveProducts: Boolean = false;

	@Input('saleProductSelected')
	saleProductSelected: saleProductSelected[] = [];

	change: number = 0;

	onKey(event: any) {
		const { value } = event.target;
		this.change = value;
	}

	total: number = 0;

	totalPrice() {
		this.HaveProducts = this.saleProductSelected.length == 0 ? false : true;

		const arrayTotal = this.saleProductSelected.map((item) => {
			return item.product.price * item.amount;
		});

		this.total = arrayTotal.reduce(
			(productPreviuos, productCurrent) =>
				productPreviuos + productCurrent
		);
	}

    finishPurchase(){
        this.totalPrice();
        
        Swal.fire({
          title: 'You are sure to finish the purchase ?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Finish',
          denyButtonText: `Don't finish`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {            
              this.saleService.saveSale(this.total,this.saleProductSelected).subscribe( res => {        
                this.router.navigateByUrl('store/sales/history');
              })
            Swal.fire('Saved!', '', 'success')
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
      
            
        


        
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
