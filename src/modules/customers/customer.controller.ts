import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/shared/guards/jwt-guard';
import { CustomerUseCase } from './application/use-case/customer.use-case';
import { CustomerRepositoryImpl } from './infrastructure/typorm/repositories/customer.repository.impl';

@Controller('customers')
export class CustomerController {
  constructor(private customerRepo: CustomerRepositoryImpl) {}
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() body) {
    const useCase = new CustomerUseCase(this.customerRepo);
    return useCase.createCustomer(body);
  }
  @UseGuards(JwtAuthGuard)
  @Get('')
  async getAll() {
    return this.customerRepo.getCustomers();
  }
}
