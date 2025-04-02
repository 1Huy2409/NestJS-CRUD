import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      console.log("deo co token")
      throw new UnauthorizedException();
    }
    else
    {
      console.log("Co token");
      console.log(token);
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.API_SECRET_KEY,
      });
      console.log(payload);
      request['user'] = payload;
      console.log(request['user']);
    } catch(error) {
      console.log(error);
      throw new UnauthorizedException("Invalid Token");
    }
    return true;
  }

  private extractTokenFromHeader(req: Request): string | undefined {
    const [type, token] = req.headers.authorization?.split(' ') ?? [];
    return type == 'Bearer' ? token : undefined;
  }
}
