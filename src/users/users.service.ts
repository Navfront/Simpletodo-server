import { Injectable } from '@nestjs/common';
import appModel from 'src/app.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  getUserByLogin(login: string) {
    return appModel.findUserByName(login);
  }

  createUser(userData: CreateUserDto) {
    return appModel.createUser({
      username: userData.login,
      password: userData.password,
    });
  }
}
