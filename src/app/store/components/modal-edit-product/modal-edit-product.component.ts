import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-modal-edit-product',
  templateUrl: './modal-edit-product.component.html',
  styles: [
  ]
})
export class ModalEditProductComponent implements OnInit {

  constructor() { }

  @Input('productSelected') productSelected! : Product; 

  ngOnInit(): void {

  }

}
