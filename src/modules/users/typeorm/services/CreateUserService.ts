import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/Users.Repository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest) {
    const usersRepository = getCustomRepository(UserRepository);
    const userExists = await usersRepository.findByEmail(email);

    if (userExists) {
      throw new AppError('There is already one user with this email');
    }

    const user = usersRepository.create({
      name,
      email,
      password,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
