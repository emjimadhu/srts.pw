import { join } from 'path';

import { argv } from 'yargs';
import { config } from 'dotenv';

import { environment as clientEnvironment } from '../../libs/client/environments/src/lib/environment';
import { RunConfiguration } from './shared/constants';
import { createFile } from './shared/utilities';

config({
  path: 'infrastructure/environments/.env'
});

// Client Environments Path
const environmentPath: string = join(__dirname, '../../libs/client/environments/src/lib');

const configEnvironment = argv.environment;
const isProduction: boolean = configEnvironment === 'production';

switch (configEnvironment) {
case RunConfiguration.PRODUCTION:
  clientEnvironment.graphQlURL = `${process.env.PRODUCTION_SERVER_URL}/graphql`;
  break;
case RunConfiguration.DEVELOPMENT:
  clientEnvironment.graphQlURL = `${process.env.DEVELOPMENT_SERVER_URL}:${process.env.DEVELOPMENT_SERVER_PORT}/graphql`;
  break;
}

clientEnvironment.production = isProduction;

const environmentFileData = `/* eslint-disable @typescript-eslint/quotes, @typescript-eslint/indent, unicorn/prevent-abbreviations, quotes */

export const environment = ${JSON.stringify(clientEnvironment, null, 2)};
`;

// Create Environment file used by Angular || Nx CLI for current build configuration
createFile(`${environmentPath}/environment.${configEnvironment}.ts`, environmentFileData);
