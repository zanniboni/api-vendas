import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { CustomerRepository } from '../typeorm/repositories/Customers.Repository';

interface IRequest {
  id: string;
}

class DeleteCustomerService {
  public async execute({ id }: IRequest) {
    const customersRepository = getCustomRepository(CustomerRepository);

    const customer = await customersRepository.findOne(id);

    if (!customer) {
      throw new AppError('Customer does not exists');
    }

    await customersRepository.remove(customer);
  }
}

export default DeleteCustomerService;
