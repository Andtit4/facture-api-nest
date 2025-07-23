import { User } from '../models/user.model';

export interface IUserRepository {
  findByUsername(username: string): Promise<User | null>;
  save(user: User): Promise<User>;
}
