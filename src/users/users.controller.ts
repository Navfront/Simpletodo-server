import { Body, Controller, Post } from '@nestjs/common';
import { GetUserByLogin } from './dto/get-user-by-login.dto';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/')
  getUserByLogin(@Body() dto: GetUserByLogin) {
    return this.userService.getUserByLogin(dto.login);
  }

  @Post('/create')
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }
}
