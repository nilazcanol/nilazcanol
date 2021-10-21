import { category } from "./category.interface";
import { Product } from "./product.interface";

export interface resApiCategoryDeleteResponse {
	category: category;
	status: boolean;
    categorySelected?:Product[]
}
