import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import { CustomerRepository } from '../typeorm/repositories/Customers.Repository';

interface IRequest {
  id: string;
}
class ShowCustomerService {
  public async execute({ id }: IRequest): Promise<Customer | undefined> {
    const customersRepository = getCustomRepository(CustomerRepository);

    const customer = await customersRepository.findOne(id);

    if (!customer) {
      throw new AppError('Customer not found');
    }

    return customer;
  }
}

export default ShowCustomerService;
