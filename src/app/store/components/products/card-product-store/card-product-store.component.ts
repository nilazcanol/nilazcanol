import { MessageService } from 'primeng/api';
import { saleProductSelected } from './../../../interfaces/sales/saleProductSelected.interface';
import { Product } from './../../../interfaces/product/product.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-card-product-store',
	templateUrl: './card-product-store.component.html',
	providers: [MessageService],
	styles: [`

    .btn-primary:hover {
        color: #fff;
        background-color: #FFAE0D;
        border-color: #FFAE0D;
    }
    



    `],
})
export class CardProductStoreComponent implements OnInit {
	constructor(
		private fb: FormBuilder,
		private messageService: MessageService
	) {}

	@Input() product!: Product;
	@Output() sendProductSelected: EventEmitter<saleProductSelected> = new EventEmitter();

	cardForm!: FormGroup;

	ngOnInit(): void {
		this.cardForm = this.fb.group(
			{
				quantity: 1,
			},
		);
	}

	addCart(product: Product) {

            this.messageService.add({
                severity: 'success',
                summary: product.name + ' Amount: '+ this.cardForm.controls['quantity'].value,
                detail: ' Price: ' + product.price,
            });
        
		this.sendProductSelected.emit({product, amount: this.cardForm.controls['quantity'].value });
	}
}
