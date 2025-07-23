import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceEntity } from './infrastructure/typeorm/entities/invoice.entity';
import { InvoiceController } from './invoice.controller';
import { InvoiceRepositoryImpl } from './infrastructure/typeorm/repositories/invoice.repository.impl';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceEntity])],
  controllers: [InvoiceController],
  providers: [InvoiceRepositoryImpl],
})
export class InvoiceModule {}
