import {
  Logger, ValidationPipe
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';

import { environment } from '@srts.pw/server/environments';

import { AppModule } from './app/app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: [
      'http://localhost:4200',
      'https://srts.pw',
      'https://admin.srts.pw'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true
  });
  const logger = new Logger('Bootstrap');
  await app.listen(environment.port, () => {
    logger.log(`Server running on http://localhost:${environment.port}`);
  });
}

bootstrap();

