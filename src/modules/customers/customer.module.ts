import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { JwtService } from '@nestjs/jwt';
import { CustomerRepositoryImpl } from './infrastructure/typorm/repositories/customer.repository.impl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './infrastructure/typorm/entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
  controllers: [CustomerController],
  providers: [JwtService, CustomerRepositoryImpl],
  exports: [],
})
export class CustomerModule {}
