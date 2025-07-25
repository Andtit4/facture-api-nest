import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/domain/models/user.model';
import { IUserRepository } from 'src/auth/domain/repositories/user.repository';
import { UserEntity } from '../entities/user.entity';
import { /* DataSource, */ Repository } from 'typeorm';

@Injectable()
export class UserRepositoryImpl implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private repo: Repository<UserEntity>,
    // private datasource: DataSource,
  ) {}
  findByEmail(email: string): Promise<User | null> {
    // throw new Error('Method not implemented.');
    return this.repo.findOne({ where: { email } });
  }
  async findByUsername(username: string): Promise<User | null> {
    return this.repo.findOne({ where: { username } });
  }
  async save(user: User): Promise<User> {
    const entity = this.repo.create(user);
    const saved = await this.repo.save(entity);
    return new User(saved.id, saved.email, saved.username, saved.password);
  }
}
