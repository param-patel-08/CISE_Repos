import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { dot } from 'node:test/reporters';
import * as dotenv from 'dotenv'; // Import dotenv module

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config();
  const PORT = process.env.PORT || 5000;
  await app.listen(PORT);
}
bootstrap();
