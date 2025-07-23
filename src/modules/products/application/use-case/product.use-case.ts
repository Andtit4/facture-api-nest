import { Product } from '../../domain/model/product.model';
import { IProductRepository } from '../../domain/repositories/product.repository';

export class ProductUseCase {
  constructor(private readonly useRepo: IProductRepository) {}

  createProduct(product: Product): Promise<Product> {
    return this.useRepo.saveProduct(product);
  }
}
