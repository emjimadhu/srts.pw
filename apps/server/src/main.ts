import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { environment } from '@srts.pw/server/environments';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstraap');
  await app.listen(environment.port, () => {
    logger.log(`Server running on http://localhost:${environment.port}`);
  });
}

bootstrap();

