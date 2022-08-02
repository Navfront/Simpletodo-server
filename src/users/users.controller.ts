import { Body, Controller, Post } from '@nestjs/common';
import { GetUserByLogin } from './dto/get-user-by-login.dto';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Получение юзера по ид' })
  @Post('/')
  getUserByLogin(@Body() dto: GetUserByLogin) {
    return this.userService.getUserByLogin(dto.login);
  }

  @ApiOperation({ summary: 'Создание нового юзера' })
  @Post('/create')
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }
}
