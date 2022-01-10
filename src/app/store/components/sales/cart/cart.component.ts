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
        
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-secondary mx-2',
              cancelButton: 'btn btn-danger mx-2'
            },
            buttonsStyling: false,
            timer:30000
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Finish purchase',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
            timer:30000
          }).then((result) => {
            if (result.isConfirmed) {
                    this.saleService.saveSale(this.total,this.saleProductSelected).subscribe( res => {
                        swalWithBootstrapButtons.fire(
                            'Success!',
                            'The operation is correctly registered.',
                            'success'
                        );

                            this.router.navigateByUrl('store/sales/history');
                        
                    })
              
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your operation could not end',
                'error'
              );

            }
          })

        // TODO: Se debe cerrar modal, crear una interfaz para la respuesta y segun ella se debe
        // TODO: ver el status y mostrar la alerta correspondiente.
        // TODO: Se debe limitar a que no se agrege 2 veces los productos y en su lugar se sume a la que ya exista
        // TODO: El boton de guardar se debe mostrar solo cuando se ingrese el vuelto.
        // TODO: EL modal se debe cerrar y rederigir al historial. 
        // TODO: Se debe mostrar un mensaje de confirmacion al finalizar la compra 

        
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
