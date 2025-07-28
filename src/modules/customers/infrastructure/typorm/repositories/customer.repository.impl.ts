import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from '../entities/customer.entity';
import { Repository } from 'typeorm';
import { Customer } from 'src/modules/customers/domain/model/customer.model';
import { ICustomerRepository } from 'src/modules/customers/domain/repositories/customer.repository';

@Injectable()
export class CustomerRepositoryImpl implements ICustomerRepository {
  constructor(
    @InjectRepository(CustomerEntity)
    private repo: Repository<CustomerEntity>,
  ) {}
  getCustomers(): Promise<Customer[]> {
    return this.repo.find();
  }

  async findByName(name: string): Promise<Customer | null> {
    return await this.repo.findOne({ where: { name } });
    // throw new Error('Method not implemented.');
  }
  async save(customer: Customer): Promise<Customer> {
    // throw new Error('Method not implemented.');
    const entity = this.repo.create(customer);
    const saved = await this.repo.save(entity);

    return new Customer(saved.id, saved.name, saved.firstname, saved.phone);
  }

  async getNumberOfCustomers(): Promise<number> {
    // throw new Error('Method not implemented.');
    return await this.repo.count();
  }
}
