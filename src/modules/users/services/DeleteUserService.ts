import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../typeorm/repositories/Users.Repository';

interface IRequest {
  id: string;
}

class DeleteUserService {
  public async execute({ id }: IRequest) {
    const usersRepository = getCustomRepository(UserRepository);

    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new AppError('Users not found.');
    }

    await usersRepository.remove(user);
  }
}

export default DeleteUserService;
