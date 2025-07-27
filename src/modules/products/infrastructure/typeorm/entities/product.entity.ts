import { InvoiceItemEntity } from 'src/modules/invoice_items/infrastructure/typeorm/entity/invoice_item.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column()
  product_name: string;

  @Column()
  product_amount: number;

  @OneToMany(() => InvoiceItemEntity, (invoiceItem) => invoiceItem.product_id)
  invoiceItems: InvoiceItemEntity[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_add: Date;
}
