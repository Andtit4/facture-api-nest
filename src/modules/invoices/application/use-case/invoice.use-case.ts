import { Invoice } from '../../domain/model/invoice.model';
import { IInvoiceRepository } from '../../domain/repositories/invoice.repository';

export class InvoiceUseCase {
  constructor(private readonly useRepo: IInvoiceRepository) {}

  createInvoice(invoice: Invoice): Promise<Invoice> {
    return this.useRepo.createInvoice(invoice);
  }
}
