import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login(): string {
    return 'I am login';
  }
  signup(): string {
    return 'I am singup';
  }
  //get
  getAll(): string {
    return 'I am getAll service';
  }
}
