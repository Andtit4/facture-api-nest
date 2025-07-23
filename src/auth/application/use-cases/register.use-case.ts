import * as bcrypt from 'bcrypt';
import { User } from 'src/auth/domain/models/user.model';
import { IUserRepository } from 'src/auth/domain/repositories/user.repository';

export class RegisterUseCase {
  constructor(private readonly useRepo: IUserRepository) {}

  async execute(username: string, password: string): Promise<User> {
    const hashed = await bcrypt.hash(password, 10);
    const user = new User(0, username, hashed);
    return this.useRepo.save(user);
  }
}
