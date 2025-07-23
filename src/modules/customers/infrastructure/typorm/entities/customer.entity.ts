import { InvoiceEntity } from 'src/modules/invoices/infrastructure/typeorm/entities/invoice.entity';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  firstname: string;

  @Column()
  phone: number;

  @OneToMany(() => InvoiceEntity, (customer) => customer.customer_id)
  customers: CustomerEntity[];
}
