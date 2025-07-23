import { Product } from '../model/product.model';

export interface IProductRepository {
  saveProduct(product: Product): Promise<Product>;
  getAllProduct();
}
