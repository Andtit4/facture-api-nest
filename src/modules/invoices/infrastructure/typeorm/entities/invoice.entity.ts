import { CustomerEntity } from 'src/modules/customers/infrastructure/typorm/entities/customer.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class InvoiceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  invoice_number: string;

  @Column()
  status: string;

  @Column()
  total_amount: number;

  @Column()
  currency: string;

  @Column()
  customer_id: number;

  @ManyToOne(() => CustomerEntity, (customer) => customer.customers, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  issue_date: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  due_date: Date;
}
