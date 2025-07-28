import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { InvoiceRepositoryImpl } from './infrastructure/typeorm/repositories/invoice.repository.impl';
import { JwtAuthGuard } from '../../shared/guards/jwt-guard';
import { InvoiceUseCase } from './application/use-case/invoice.use-case';

@Controller('invoices')
@UseGuards(JwtAuthGuard)
export class InvoiceController {
  constructor(private invoiceRepo: InvoiceRepositoryImpl) {}
  @Post('')
  async create(@Body() body) {
    const useCase = new InvoiceUseCase(this.invoiceRepo);
    return useCase.createInvoice(body);
  }

  @Get('')
  async getAll() {
    return await this.invoiceRepo.getInvoices();
  }

  @Get('total-amount')
  async getTotalAmount() {
    return await this.invoiceRepo.getTotalAmount();
  }

  @Get('number-invoices')
  async getNumberInvoices() {
    return await this.invoiceRepo.getNumberInvoice();
  }

  @Get('number-status/:status')
  async getNumberStatusOfInvoice(status: string) {
    return await this.invoiceRepo.getNumberStatusOfInvoice(status);
  }
}
