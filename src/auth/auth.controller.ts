import { Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('singup')
  signup() {
    this.authService.signup();
  }
  @Post('signin')
  signin() {
    return this.authService.login();
  }
  @Get('checkout')
  getAll() {
    return this.authService.getAll();
  }
}
