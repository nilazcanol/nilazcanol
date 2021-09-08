import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Product } from '../../interfaces/product.interface'

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styles: [],
})
export class NewProductComponent implements OnInit, OnChanges {
  @Input('productInput') productInput!: Product

  constructor(private fb: FormBuilder) {}

  myFormProduct!: FormGroup

  ngOnInit(): void {
    this.myFormProduct = this.fb.group({
      nameProduct: ['', Validators.required],
      imgProduct: ['', Validators.required],
      descriptionProduct: ['', Validators.required],
      priceProduct: [0, Validators.required],
      stockProduct: ['', Validators.required],
      categoryProduct: ['', Validators.required],
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.myFormProduct.controls['nameProduct'].setValue(
        changes.productInput.currentValue.nameProduct
      )
    
    this.myFormProduct.controls['categoryProduct'].setValue(
      changes.productInput.currentValue.categoryProduct,
    )
    this.myFormProduct.controls['descriptionProduct'].setValue(
      changes.productInput.currentValue.descriptionProduct,
    )
    this.myFormProduct.controls['priceProduct'].setValue(
      changes.productInput.currentValue.priceProduct,
    )
    this.myFormProduct.controls['stockProduct'].setValue(
      changes.productInput.currentValue.stockProduct,
    )
    this.myFormProduct.controls['imgProduct'].setValue(
      changes.productInput.currentValue.imgProduct,
    )

  }

  fieldIsValid(campo: string) {
    return (
      this.myFormProduct.controls[campo].errors &&
      this.myFormProduct.controls[campo].touched
    )
  }

  clearForm(): void {
    this.myFormProduct.reset()
  }

  saveProduct(): void {
    this.clearForm()
  }
}
