import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-mini-shopping-cart',
  templateUrl: './mini-shopping-cart.component.html',
  styles: [
  ]
})
export class MiniShoppingCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listShoppingCart: Product[] = [
    {
        name:'Arroz 1kg',
        description:'Arroz economico de 1 kilogramo marca acuenta',
        price:2,
        category:'',
        stock:1
    },
    {
        name:'Leche Soprole 1L',
        description:'Leche semidescremada de 1 litro sabor chocolate',
        price:2,
        category:'',
        stock:1
    },
  ]
 
}
