import { Injectable } from '@nestjs/common';
import appModel from 'src/app.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  async getUserByLogin(login: string) {
    return await appModel.findUserByName(login);
  }

  async createUser(userData: CreateUserDto) {
    return await appModel.createUser({
      username: userData.login,
      password: userData.password,
    });
  }
}
