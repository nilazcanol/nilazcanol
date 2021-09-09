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
      name: ['', Validators.required],
      img: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      stock: ['', Validators.required],
      category: ['', Validators.required],
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.myFormProduct.controls['name'].setValue(
        changes.productInput.currentValue.name
      )
    
    this.myFormProduct.controls['category'].setValue(
      changes.productInput.currentValue.category,
    )
    this.myFormProduct.controls['description'].setValue(
      changes.productInput.currentValue.description,
    )
    this.myFormProduct.controls['price'].setValue(
      changes.productInput.currentValue.price,
    )
    this.myFormProduct.controls['stock'].setValue(
      changes.productInput.currentValue.stock,
    )
    this.myFormProduct.controls['img'].setValue(
      changes.productInput.currentValue.img,
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
