import { Customer } from '../model/customer.model';

export interface ICustomerRepository {
  findByName(name: string): Promise<Customer | null>;
  save(customer: Customer): Promise<Customer>;
  getCustomers(): Promise<Customer[]>;
}
