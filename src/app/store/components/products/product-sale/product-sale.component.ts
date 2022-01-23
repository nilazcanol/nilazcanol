import { Component, Input } from '@angular/core';
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
export class ProductSaleComponent  {

  @Input() name:string = 'name';
  @Input() description:string  = 'description';
  @Input() category:string = 'category';
  @Input() price:  number = 0;
  @Input() stock:number  = 0;

  constructor(private fb: FormBuilder) { }



  miFormularioReactivo: FormGroup = this.fb.group({
    amount: [
      this.stock, 
        [
          Validators.required
        ] 
    ],

  })

 


}
