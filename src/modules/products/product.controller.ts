import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/shared/guards/jwt-guard';
import { ProductRepositoryImpl } from './infrastructure/typeorm/repositories/product.repository.impl';
import { ProductUseCase } from './application/use-case/product.use-case';

@Controller('products')
@UseGuards(JwtAuthGuard)
export class ProductController {
  constructor(private productRepo: ProductRepositoryImpl) {}

  @Post('')
  async create(@Body() body) {
    const useCase = new ProductUseCase(this.productRepo);
    return useCase.createProduct(body);
  }

  @Get('')
  getAll() {
    return this.productRepo.getAllProduct();
  }
}
