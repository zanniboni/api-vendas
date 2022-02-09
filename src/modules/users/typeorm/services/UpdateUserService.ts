import AppError from '@shared/http/errors/AppError';
import User from '../entities/User';
import { UserRepository } from '../repositories/Users.Repository';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}
class UpdateUserService {
  public async execute({ id, name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UserRepository);

    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new AppError('User not found');
    }

    if (user && email !== user.email) {
      throw new AppError('Email already registered');
    }

    user.name = name;
    user.email = email;
    user.password = password;
    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
