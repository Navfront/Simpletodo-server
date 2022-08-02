import { Injectable } from '@nestjs/common';

export type ReqUser = {
  username: string;
  userId: string;
  iat: number;
  exp: number;
};

@Injectable()
export class AppService {
  async greeting(user: ReqUser) {
    return { message: `Hello ${user.username || 'Anonimous'}!` };
  }
}
