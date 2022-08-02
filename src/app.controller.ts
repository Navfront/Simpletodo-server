import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('App')
@Controller('/')
export class AppController {
  constructor(private appService: AppService) {}

  @ApiOperation({ summary: 'Просто ендпоинт' })
  @Get('/')
  greetings() {
    return this.appService.greeting();
  }
}
