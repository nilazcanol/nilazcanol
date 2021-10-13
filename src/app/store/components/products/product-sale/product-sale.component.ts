import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styles: [  ]
})
export class ProductSaleComponent implements OnInit {

  @Input('name') name:string = 'name';
  @Input('description') description:string  = 'description';
  @Input('category') category:string = 'category';
  @Input('priceProduct') price:  number = 0;
  @Input('stock') stock:number  = 0;

  constructor(private fb: FormBuilder) { }



  miFormularioReactivo: FormGroup = this.fb.group({
    amount: [this.stock, [Validators.required ] ],
   
  })

  ngOnInit(): void {
  }

  
}
