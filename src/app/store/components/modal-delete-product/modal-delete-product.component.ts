import { Component, Input, OnInit } from '@angular/core'
import { ProductSmall } from '../../interfaces/product-small.interface'
import { Product } from '../../interfaces/product.interface'

@Component({
  selector: 'app-modal-delete-product',
  templateUrl: './modal-delete-product.component.html',
  styles: [],
})
export class ModalDeleteProductComponent implements OnInit {
  constructor() {}

  @Input('productDelete') productSelected!: ProductSmall;

  ngOnInit(): void {}
}
