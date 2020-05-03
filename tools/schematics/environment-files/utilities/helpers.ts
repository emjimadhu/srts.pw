/* eslint-disable no-useless-escape */

import {
  apply,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import {
  addDepsToPackageJson,
  getProjectConfig,
  names,
  updateJsonInTree
} from '@nrwl/workspace';
import { updateWorkspaceInTree } from '@nrwl/workspace/src/utils/ast-utils';

import {
  chalkVersion,
  yargsTypesVersion,
  yargsVersion
} from './versions';
import { ISchemaOptions } from '../schema';
import {
  appFilePath,
  initialSetupFilesPath,
  outputDirectoryLocation,
  outputSharedDirectoryLocation
} from './file-paths';

export const addDependencies = (): Rule => addDepsToPackageJson(
  {},
  {
    '@types/yargs': yargsTypesVersion,
    'chalk': chalkVersion,
    'yargs': yargsVersion
  }
);

export const updateGitIgnore = (): Rule => (tree: Tree, _context: SchematicContext) => {
  let newGitignoreContent: string = '';
  const gitIgnoreContent: Buffer | null = tree.read('.gitignore');
  if (gitIgnoreContent) newGitignoreContent = gitIgnoreContent.toString();
  newGitignoreContent = newGitignoreContent + '\n' + '# Environment Files\n.env\napps/*/src/environments/environment.*.ts\n';
  tree.overwrite('.gitignore', newGitignoreContent);
  return tree;
};

export const addInitFiles = (schema: ISchemaOptions): Rule => chain(
  [
    mergeWith(
      apply(url(initialSetupFilesPath), [
        template({
          dot: '.',
          tmpl: '',
          ...(schema as ISchemaOptions)
        }),
        move(outputSharedDirectoryLocation)
      ])
    ),
    addDependencies(),
    updateGitIgnore()
  ]
);

export const addAppFiles = (schema: ISchemaOptions): Rule => mergeWith(
  apply(url(appFilePath), [
    template({
      tmpl: '',
      ...names(schema.projectName),
      ...(schema as ISchemaOptions)
    }),
    move(outputDirectoryLocation)
  ])
);

export const updateWorkspace = (tree: Tree, schema: ISchemaOptions): Rule => updateWorkspaceInTree((json: any) => {
  const projectConfig = getProjectConfig(tree, schema.projectName);
  if (projectConfig) {
    json.projects[schema.projectName].architect.build.configurations['development'] = {
      fileReplacements: [
        {
          replace: `apps/${schema.projectName}/src/environments/environment.ts`,
          with: `apps/${schema.projectName}/src/environments/environment.development.ts`
        }
      ]
    };
    if (json.projects[schema.projectName].architect.serve.configurations) {
      json.projects[schema.projectName].architect.serve.configurations['development'] = {
        buildTarget: `${schema.projectName}:build:development`
      };
    } else {
      json.projects[schema.projectName].architect.serve['configurations'] = {
        development: {
          buildTarget: `${schema.projectName}:build:development`
        }
      };
    }
  }
  return json;
});

export const addScripts = (schema: ISchemaOptions): Rule => updateJsonInTree('package.json', (json: any) => {
  json.scripts = json.scripts || {};

  json.scripts[`start:${schema.projectName}`] = `yarn substep:set-${schema.projectName}-environment --environment=development && nx serve ${schema.projectName} --configuration=development`;
  json.scripts[`build:${schema.projectName}`] = `yarn substep:set-${schema.projectName}-environment --environment=production && nx build ${schema.projectName} --configuration=production`;
  json.scripts[`substep:set-${schema.projectName}-environment`] = `ts-node --compiler-options='{\"module\":\"commonJs\"}' ${outputDirectoryLocation}/set-${schema.projectName}-environment.ts`;

  return json;
});

export const deleteOldEnvironmentFiles = (schema: ISchemaOptions): Rule => (tree: Tree, _context: SchematicContext) => {
  const projectRoot = getProjectConfig(tree, schema.projectName).root;
  const productionEnvironmentFile = `${projectRoot}/src/environments/environment.production.ts`;
  if (tree.exists(productionEnvironmentFile)) {
    tree.delete(productionEnvironmentFile);
  }
  return tree;
};

export const updateToolsTsConfig = (schema: ISchemaOptions): Rule => updateJsonInTree('tools/tsconfig.tools.json', (json: any) => {
  if (json.references) {
    json.references.push({
      path: `../apps/${schema.projectName}`
    });
  } else {
    json.references = [
      {
        path: `../apps/${schema.projectName}`
      }
    ];
  }

  return json;
});

export const updateProjectTsConfig = (schema: ISchemaOptions): Rule => updateJsonInTree(`apps/${schema.projectName}/tsconfig.json`, (json: any) => {
  json.compilerOptions['composite'] = true;

  return json;
});
