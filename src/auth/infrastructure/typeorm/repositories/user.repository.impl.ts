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
  async findByUsername(username: string): Promise<User | null> {
    return this.repo.findOne({ where: { username } });
    /* if (!entity) return null;
    return new User(entity.id, entity.username, entity.password); */
  }
  async save(user: User): Promise<User> {
    const entity = this.repo.create(user);
    const saved = await this.repo.save(entity);
    return new User(saved.id, saved.username, saved.password);
  }
}
