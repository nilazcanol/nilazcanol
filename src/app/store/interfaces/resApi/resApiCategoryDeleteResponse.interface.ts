import { category } from "../category/category.interface";
import { Product } from "../product/product.interface";

export interface resApiCategoryDeleteResponse {
	category: category;
	status: boolean;
    categorySelected?:Product[]
}
