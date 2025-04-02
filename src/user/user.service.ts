import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async getUser() {
    const users = await this.prismaService.user.findMany();
    console.log(users);
    return users;
  }
}
