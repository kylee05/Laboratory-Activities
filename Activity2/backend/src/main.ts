import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // allow frontend to call
  await app.listen(process.env.PORT || 3000);
  console.log(`Backend running on ${process.env.PORT || 3000}`);
}
bootstrap();
