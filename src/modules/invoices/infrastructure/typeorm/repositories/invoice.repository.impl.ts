import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from 'src/modules/invoices/domain/model/invoice.model';
import { IInvoiceRepository } from 'src/modules/invoices/domain/repositories/invoice.repository';
import { InvoiceEntity } from '../entities/invoice.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InvoiceRepositoryImpl implements IInvoiceRepository {
  constructor(
    @InjectRepository(InvoiceEntity)
    private repo: Repository<InvoiceEntity>,
  ) {}
  async getInvoices() {
    // throw new Error('Method not implemented.');
    return await this.repo.find();
  }

  async createInvoice(invoice: Invoice): Promise<Invoice> {
    const entity = this.repo.create(invoice);
    const saved = await this.repo.save(entity);
    return new Invoice(
      saved.id,
      saved.invoice_number,
      saved.status,
      saved.total_amount,
      saved.currency,
      saved.customer_id,
      saved.issue_date,
      saved.due_date,
    );
  }

  async selectInvoiceByInvoiceNumber(
    invoice_number: string,
  ): Promise<Invoice | null> {
    return await this.repo.findOne({ where: { invoice_number } });
  }

  async selectInvoiceByCustomerId(
    customer_id: number,
  ): Promise<Invoice | null> {
    return await this.repo.findOne({ where: { customer_id } });
  }
}
