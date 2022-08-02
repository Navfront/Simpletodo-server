import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 5500;

  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT, () => {
      console.log(`Server starts on ${PORT} port!`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
