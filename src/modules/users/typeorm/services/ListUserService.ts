import { getCustomRepository } from 'typeorm';
import User from '../entities/User';
import { UserRepository } from '../repositories/Users.Repository';

class ListUserService {
  public async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UserRepository);

    const users = usersRepository.find();

    return users;
  }
}

export default ListUserService;
