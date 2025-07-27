import { InvoiceEntity } from 'src/modules/invoices/infrastructure/typeorm/entities/invoice.entity';
import { ProductEntity } from 'src/modules/products/infrastructure/typeorm/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class InvoiceItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  invoice_id: number;

  @Column()
  product_id: number;

  @ManyToOne(() => ProductEntity, (product) => product.product_name, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(() => InvoiceEntity, (invoice) => invoice.invoice_number, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'invoice_id' })
  invoice: InvoiceEntity;

  @Column()
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  unit_price: number;
}
