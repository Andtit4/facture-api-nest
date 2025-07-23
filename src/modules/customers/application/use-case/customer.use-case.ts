import { Customer } from '../../domain/model/customer.model';
import { ICustomerRepository } from '../../domain/repositories/customer.repository';

export class CustomerUseCase {
  constructor(private readonly customerRep: ICustomerRepository) {}

  async createCustomer(customer: Customer) {
    return this.customerRep.save(customer);
  }
}
