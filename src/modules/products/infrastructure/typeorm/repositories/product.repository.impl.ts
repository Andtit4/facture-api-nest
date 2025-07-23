import { Injectable } from '@nestjs/common';
import { Product } from 'src/modules/products/domain/model/product.model';
import { IProductRepository } from 'src/modules/products/domain/repositories/product.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductRepositoryImpl implements IProductRepository {
  constructor(
    @InjectRepository(ProductEntity) private repo: Repository<ProductEntity>,
  ) {}
  async saveProduct(product: Product): Promise<Product> {
    // throw new Error('Method not implemented.');
    const entity = this.repo.create(product);
    const saved = await this.repo.save(entity);
    return new Product(
      saved.product_id,
      saved.product_name,
      saved.product_amount,
      saved.date_add,
    );
  }
  async getAllProduct() {
    // throw new Error('Method not implemented.');
    return await this.repo.find();
  }
}
