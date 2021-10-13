import { HttpErrorResponse } from '@angular/common/http'
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {MessageService} from 'primeng/api';
import { category } from '../../../interfaces/category.interface';
import { Product } from '../../../interfaces/product.interface'
import { resApiProductSave } from '../../../interfaces/resApiProductSave.interface';
import { CategoriesService } from '../../../services/categories.service';
import { ProductsService } from '../../../services/products.service'

@Component({
  selector: 'app-product-features',
  templateUrl: './product-features.component.html',
  styles: [],
  providers:[MessageService]
})
export class NewProductComponent implements OnInit, OnChanges {
  
    @Input('productInput') productInput?: Product;
    @Input('isNewProduct') isNewProduct: boolean = true;

  listCategories:category[] = [
      {name:'default'}
  ]

  constructor(
      private fb: FormBuilder, 
      private productService:ProductsService,
      private categoryService:CategoriesService, 
      private messageService: MessageService) {}
  myFormProduct!: FormGroup

  ngOnInit(): void {
    this.myFormProduct = this.fb.group({
      name: ['', Validators.required],
      img: [''],
      description: ['', Validators.required],
      price: [0, Validators.required],
      stock: ['', Validators.required],
      category: ['', Validators.required],
    })
    this.categoryService.getAllCategories().subscribe( res => {
        console.log(res);
        this.listCategories = res.categories
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.myFormProduct.controls['name'].setValue(
      changes.productInput.currentValue.name,
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
    this.productService.saveNewProduct(this.myFormProduct.value).subscribe( (res ) => {

        console.log(res);
        this.messageService.add({severity:'success', summary: ' saved correctly', detail: '' });

    },(errors:HttpErrorResponse )=>{

        if(errors.status == 400 ){
            this.messageService.add({severity:'error', summary: 'Error Bad Request: 400', detail: " Error: Check the data entered: In case the error persists, contact the technical support." });
        }
        if(errors.status == 500 ){
            this.messageService.add({severity:'error', summary: 'Error:  HTTP server internal error', detail: "Contact the technical support." });
        }
    })   
  }

  updateProduct():void {
      console.log('Actualizar product');
  }
}
