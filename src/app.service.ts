import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private userName = 'Anonimous';

  async greeting() {
    return { message: `Hello ${this.userName}!` };
  }
}
