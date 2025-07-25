import {
  Body,
  Controller,
  Get,
  Post,
  UnauthorizedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserRepositoryImpl } from './infrastructure/typeorm/repositories/user.repository.impl';
import { RegisterUseCase } from './application/use-cases/register.use-case';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtAuthGuard } from 'src/shared/guards/jwt-guard';

@Controller('auth')
export class AuthController {
  constructor(
    private userRepo: UserRepositoryImpl,
    private jwtService: JwtService,
  ) {}

  @Post('login')
  async login(@Body() body) {
    const user = await this.userRepo.findByEmail(body.email);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await bcrypt.compare(body.password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    const payload = {
      email: user.email,
      sub: user.id,
      username: user.username,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  @Post('register')
  async register(@Body() body) {
    const useCase = new RegisterUseCase(this.userRepo);
    return useCase.execute(body.email, body.username, body.password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Request() req) {
    return req.user; // Assuming the user is attached to the request by the JwtAuthGuard
  }
}
