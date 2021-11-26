import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styles: [
    `
    .form-control:focus {
      border-color: #FFCA2B !important;
      box-shadow: 0 0 0 0.2rem rgb(255, 202, 43, 0.25) !important;
}
`
   ]
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
