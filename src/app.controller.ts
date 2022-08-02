import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@ApiTags('App')
@Controller('/')
export class AppController {
  constructor(private appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Просто ендпоинт' })
  @Get('/')
  greetings() {
    return this.appService.greeting();
  }
}
