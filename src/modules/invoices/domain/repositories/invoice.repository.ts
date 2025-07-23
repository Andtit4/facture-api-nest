import { Invoice } from '../model/invoice.model';

export interface IInvoiceRepository {
  createInvoice(invoice: Invoice): Promise<Invoice>;
  selectInvoiceByInvoiceNumber(invoice_number: string): Promise<Invoice | null>;
  selectInvoiceByCustomerId(customer_id: number): Promise<Invoice | null>;
  getInvoices() /* : Promise<Invoice> */;
}
