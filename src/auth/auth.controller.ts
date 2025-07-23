import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { UserRepositoryImpl } from './infrastructure/typeorm/repositories/user.repository.impl';
import { RegisterUseCase } from './application/use-cases/register.use-case';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(
    private userRepo: UserRepositoryImpl,
    private jwtService: JwtService,
  ) {}

  @Post('login')
  async login(@Body() body) {
    const user = await this.userRepo.findByUsername(body.username);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await bcrypt.compare(body.password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  @Post('register')
  async register(@Body() body) {
    const useCase = new RegisterUseCase(this.userRepo);
    return useCase.execute(body.username, body.password);
  }
}
