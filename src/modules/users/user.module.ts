import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/infrastructure/typeorm/entities/user.entity';
import { UserRepositoryImpl } from 'src/auth/infrastructure/typeorm/repositories/user.repository.impl';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserRepositoryImpl],
  exports: [UserRepositoryImpl],
})
export class UserModule {}
