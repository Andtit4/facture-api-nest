import { invoiceItemModel } from '../model/invoice_item.model';

export interface IInvoiceItemRepository {
  findById(id: number): Promise<invoiceItemModel | null>;
  createInvoiceItem(item: invoiceItemModel): Promise<invoiceItemModel>;
  getAllInvoiceItems(): Promise<invoiceItemModel[]>;
}
