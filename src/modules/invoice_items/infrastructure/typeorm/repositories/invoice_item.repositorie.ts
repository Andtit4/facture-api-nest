import { InjectRepository } from '@nestjs/typeorm';
import { invoiceItemModel } from 'src/modules/invoice_items/domain/model/invoice_item.model';
import { IInvoiceItemRepository } from 'src/modules/invoice_items/domain/repositories/invoice_item_repository';
import { Repository } from 'typeorm';
import { InvoiceItemEntity } from '../entity/invoice_item.entity';

export class InvoiceItemImpl implements IInvoiceItemRepository {
  constructor(
    @InjectRepository(InvoiceItemEntity)
    private repo: Repository<InvoiceItemEntity>,
  ) {}
  async getAllInvoiceItems(): Promise<invoiceItemModel[]> {
    // throw new Error('Method not implemented.');
    const items = await this.repo.find();
    return items.map(
      (item) =>
        new invoiceItemModel(
          item.id,
          item.invoice_id,
          item.product_id,
          item.quantity,
          item.unit_price,
        ),
    );
  }
  async findById(id: number): Promise<invoiceItemModel | null> {
    // throw new Error('Method not implemented.');
    const item = await this.repo.findOne({ where: { id } });
    if (!item) return null;
    return new invoiceItemModel(
      item.id,
      item.invoice_id,
      item.product_id,
      item.quantity,
      item.unit_price,
    );
  }
  async createInvoiceItem(item: invoiceItemModel): Promise<invoiceItemModel> {
    // throw new Error('Method not implemented.');
    const entity = this.repo.create(item);
    const saved = await this.repo.save(entity);
    return new invoiceItemModel(
      saved.id,
      saved.invoice_id,
      saved.product_id,
      saved.quantity,
      saved.unit_price,
    );
  }
}
