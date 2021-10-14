import { Pipe, PipeTransform } from "@angular/core";
import { CategoriesService } from "../services/categories.service";

@Pipe({
    name:'categoryName'
})
export class CategoryPipe implements PipeTransform{
    

    constructor(private categoriesService: CategoriesService) {}

    transform(valor:string):string {

        this.categoriesService.getNameCategory(valor).subscribe( res => {
            return res.category
        })
        
        return 'aaa'
    }

}