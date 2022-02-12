import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/Users.Repository';
import { compare } from 'bcrypt';
import User from '../entities/User';

interface IRequest {
  email: string;
  password: string;
}

class CreateSessionsService {
  public async execute({ email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UserRepository);
    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorret email/password combination', 401);
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError('Incorret email/password combination', 401);
    }

    return user;
  }
}

export default CreateSessionsService;
