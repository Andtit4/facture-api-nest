import { Module } from '@nestjs/common';
import { JwtModule /* JwtService */ } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infrastructure/typeorm/entities/user.entity';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './infrastructure/typeorm/jwt/jwt.strategy';
import { UserModule } from 'src/modules/users/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'defaultSecret',
      signOptions: { expiresIn: '1h' },
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [JwtStrategy],
  exports: [],
})
export class AuthModule {}
