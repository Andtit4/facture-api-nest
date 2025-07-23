import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './infrastructure/typeorm/entities/product.entity';
import { ProductRepositoryImpl } from './infrastructure/typeorm/repositories/product.repository.impl';
import { ProductController } from './product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [ProductRepositoryImpl],
})
export class ProductModule {}
