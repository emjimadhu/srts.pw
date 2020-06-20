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
  // Production Envs
  break;
case RunConfiguration.DEVELOPMENT:
  // Development Envs
  break;
}

serverEnvironment.production = isProduction;

const environmentFileData = `/* eslint-disable @typescript-eslint/quotes, @typescript-eslint/indent, unicorn/prevent-abbreviations, quotes */

export const environment = ${JSON.stringify(serverEnvironment, null, 2)};
`;

// Create Environment file used by Angular || Nx CLI for current build configuration
createFile(`${environmentPath}/environment.${configEnvironment}.ts`, environmentFileData);
