import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.setGlobalPrefix('api')
  const configService = app.get(ConfigService)
  const PORT = configService.get('PORT')

  await app.listen(PORT);
  console.log("Server started on port " + PORT)
}
bootstrap();
