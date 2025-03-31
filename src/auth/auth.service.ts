import { Injectable, Body, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(@Body() dto: AuthDto) {
    // try catch, validate form ==> hash password by argon => create new user
    try {
      if (dto.password) {
        // hash password
        const hash: string = await argon.hash(dto.password);
        const user = await this.prisma.user.create({
          data: {
            email: dto.email,
            password: hash,
          },
          select: {
            email: true,
            password: true,
          },
        });
        console.log(user);
        return user;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async signin(@Body() dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) {
      // throw UnauthorizationException
      console.log('This email does not exist in this system');
      throw new UnauthorizedException('Credential Incorrect');
    }
    if (await argon.verify(user.password, dto.password)) {
      // password match
      console.log('Welcome back to this App');
    } else {
      throw new UnauthorizedException('Credential Incorrect');
    }
    return {
      message: 'Sign in successfully',
    };
  }
}
