import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/shared/guards/jwt-guard';
import { InvoiceItemImpl } from './infrastructure/typeorm/repositories/invoice_item.repositorie';

@Controller('invoice-items')
@UseGuards(JwtAuthGuard)
export class InvoiceItemController {
  constructor(private invoiceItemRepo: InvoiceItemImpl) {}
  @Post('')
  async createInvoiceItem(@Body() body) {
    return await this.invoiceItemRepo.createInvoiceItem(body);
  }

  @Get(':id')
  async getInvoiceItem(@Param('id') id: number) {
    return await this.invoiceItemRepo.findById(id);
  }

  @Get('')
  async getAllInvoiceItems() {
    return await this.invoiceItemRepo.getAllInvoiceItems();
  }
}
