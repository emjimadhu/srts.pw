import { join } from 'path';

import { argv } from 'yargs';
import { config } from 'dotenv';

import { environment as serverEnvironment } from '../../libs/server/environments/src/lib/environment';
import { RunConfiguration } from './shared/constants';
import { createFile } from './shared/utilities';

config({
  path: 'infrastructure/environments/.env'
});

// Server Environments Path
const environmentPath: string = join(__dirname, '../../libs/server/environments/src/lib');

const configEnvironment = argv.environment;
const isProduction: boolean = configEnvironment === 'production';

switch (configEnvironment) {
case RunConfiguration.PRODUCTION:
  serverEnvironment.port = parseInt(process.env.PRODUCTION_SERVER_PORT);
  serverEnvironment.mongoUri = process.env.PRODUCTION_MONGO_URI;
  serverEnvironment.clientUrl = process.env.PRODUCTION_CLIENT_URL;

  serverEnvironment.mailer.host = process.env.PRODUCTION_SERVER_MAILER_HOST;
  serverEnvironment.mailer.port = parseInt(process.env.PRODUCTION_SERVER_MAILER_PORT);
  serverEnvironment.mailer.username = process.env.PRODUCTION_SERVER_MAILER_EMAIL_ID;
  serverEnvironment.mailer.password = process.env.PRODUCTION_SERVER_MAILER_EMAIL_PASSWORD;
  serverEnvironment.mailer.from = process.env.PRODUCTION_SERVER_MAILER_EMAIL_FROM;
  serverEnvironment.mailer.service = process.env.PRODUCTION_SERVER_MAILER_EMAIL_SERVICE;
  break;
case RunConfiguration.DEVELOPMENT:
  serverEnvironment.port = parseInt(process.env.DEVELOPMENT_SERVER_PORT);
  serverEnvironment.mongoUri = process.env.DEVELOPMENT_MONGO_URI;
  serverEnvironment.clientUrl = process.env.DEVELOPMENT_CLIENT_URL;

  serverEnvironment.mailer.host = process.env.DEVELOPMENT_SERVER_MAILER_HOST;
  serverEnvironment.mailer.port = parseInt(process.env.DEVELOPMENT_SERVER_MAILER_PORT);
  serverEnvironment.mailer.username = process.env.DEVELOPMENT_SERVER_MAILER_EMAIL_ID;
  serverEnvironment.mailer.password = process.env.DEVELOPMENT_SERVER_MAILER_EMAIL_PASSWORD;
  serverEnvironment.mailer.from = process.env.DEVELOPMENT_SERVER_MAILER_EMAIL_FROM;
  serverEnvironment.mailer.service = process.env.DEVELOPMENT_SERVER_MAILER_EMAIL_SERVICE;
  break;
}

serverEnvironment.production = isProduction;

const environmentFileData = `/* eslint-disable @typescript-eslint/quotes, @typescript-eslint/indent, unicorn/prevent-abbreviations, quotes */

export const environment = ${JSON.stringify(serverEnvironment, null, 2)};
`;

// Create Environment file used by Angular || Nx CLI for current build configuration
createFile(`${environmentPath}/environment.${configEnvironment}.ts`, environmentFileData);
