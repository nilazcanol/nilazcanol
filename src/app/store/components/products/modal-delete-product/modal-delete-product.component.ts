import { Component, Input, OnInit } from '@angular/core'
import { Product } from '../../../interfaces/product.interface'

@Component({
  selector: 'app-modal-delete-product',
  templateUrl: './modal-delete-product.component.html',
  styles: [],
})
export class ModalDeleteProductComponent implements OnInit {
  constructor() {}

  @Input('productDelete') productSelected!: Product;

  ngOnInit(): void {}
}
