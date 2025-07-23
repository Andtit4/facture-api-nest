import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
