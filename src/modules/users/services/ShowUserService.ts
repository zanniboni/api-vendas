import AppError from '@shared/http/errors/AppError';
import User from '../typeorm/entities/User';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../typeorm/repositories/Users.Repository';

interface IRequest {
  id: string;
}

class ShowUserService {
  public async execute({ id }: IRequest): Promise<User | undefined> {
    const usersRepository = getCustomRepository(UserRepository);

    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }
}

export default ShowUserService;
