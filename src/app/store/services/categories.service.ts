import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}

  getListCategories = () => {
    return [{ nameCategory: 'Grocery' }, { nameCategory: 'Dairy products' }]
  }

  
}
