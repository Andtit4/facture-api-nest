import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { InvoiceEntity } from '../invoices/infrastructure/typeorm/entities/invoice.entity';
import { InvoiceItemController } from './invoice_item.controller';
import { InvoiceItemImpl } from './infrastructure/typeorm/repositories/invoice_item.repositorie';
// import { invoiceItemModel } from './domain/model/invoice_item.model';
import { InvoiceItemEntity } from './infrastructure/typeorm/entity/invoice_item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceItemEntity])],
  controllers: [InvoiceItemController],
  providers: [InvoiceItemImpl],
})
export class InvoiceItemModule {}
