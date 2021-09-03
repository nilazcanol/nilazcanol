import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styles: [
  ]
})
export class NewProductComponent implements OnInit {


 @Input('productInput') productInput :Product = {
     category: '',
     descriptionProduct: '',
     nameProduct:'',
     priceProduct:0,
     stockProduct:'',
     img:''
 };

  myFormProduct: FormGroup = this.fb.group({
    name        :[this.productInput.nameProduct ,Validators.required],
    img         :[this.productInput.img,Validators.required],
    description :[this.productInput.descriptionProduct,Validators.required],
    price       :[this.productInput.priceProduct,Validators.required],
    stock       :[this.productInput.stockProduct,Validators.required],
    category    :[this.productInput.category,Validators.required]
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
