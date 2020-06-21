import {
  Logger, ValidationPipe
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { environment } from '@srts.pw/server/environments';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const logger = new Logger('Bootstraap');
  await app.listen(environment.port, () => {
    logger.log(`Server running on http://localhost:${environment.port}`);
  });
}

bootstrap();

