import {
  Rule,
  SchematicContext,
  Tree
} from '@angular-devkit/schematics';
import { updateWorkspaceInTree } from '@nrwl/workspace/src/utils/ast-utils';
import {
  getProjectConfig, updateJsonInTree
} from '@nrwl/workspace';

import { ISchemaOptions } from '../schema';

export const deleteRootEslintrcFile = (): Rule => (tree: Tree, _context: SchematicContext) => {
  const eslintrcFile: Buffer | null = tree.read('.eslintrc');
  if (eslintrcFile) {
    tree.delete('.eslintrc');
  }
  return tree;
};

export const updateWorkspace = (tree: Tree, schema: ISchemaOptions): Rule => updateWorkspaceInTree((json: any) => {
  const projectConfig = getProjectConfig(tree, schema.projectName);
  if (projectConfig) {
    json.projects[schema.projectName].architect.lint.options.config = `apps/${schema.projectName}/.eslintrc.json`;
    json.projects[schema.projectName].architect.lint.options['fix'] = true;
    json.projects[schema.projectName].architect.lint.options['format'] = 'formattify';
  }
  return json;
});

export const renameProjectEslintrcfile = (tree: Tree, schema: ISchemaOptions): Rule => (projectTree: Tree, _context: SchematicContext) => {
  const projectConfigRoot = getProjectConfig(projectTree, schema.projectName).root;
  projectTree.rename(`${projectConfigRoot}/.eslintrc`, `${projectConfigRoot}/.eslintrc.json`);
  return projectTree;
};

export const updateProjectEslintrcJson = (schema: ISchemaOptions): Rule => updateJsonInTree(`apps/${schema.projectName}/.eslintrc.json`, (json: any) => {
  const previousRootEslintrcLocation = json.extends;
  json.extends = `${previousRootEslintrcLocation}.json`;
  return json;
});
