import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styles: [
  ]
})
export class NewProductComponent implements OnInit {

  myFormProduct: FormGroup = this.fb.group({
    name:['Arroz',Validators.required],
    img:['',Validators.required],
    description:['Arroz de 1kg',Validators.required],
    price:['',Validators.required],
    stock:['',Validators.required],
    category:['',Validators.required]
  })
  
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
  }


  fieldIsValid(campo: string) {
    return (
      this.myFormProduct.controls[campo].errors &&
      this.myFormProduct.controls[campo].touched
    )
  }


  clearForm():void{
      this.myFormProduct.reset();
  }

  saveProduct():void{
    this.clearForm();
  }
}
