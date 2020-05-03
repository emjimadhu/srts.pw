import {
  chain,
  Rule,
  SchematicContext,
  Tree
} from '@angular-devkit/schematics';

import { ISchemaOptions } from './schema';
import {
  deleteRootEslintrcFile,
  renameProjectEslintrcfile,
  updateProjectEslintrcJson,
  updateWorkspace
} from './utilities/helpers';

export default function(schema: ISchemaOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => chain(
    [
      deleteRootEslintrcFile(),
      updateWorkspace(tree, schema),
      renameProjectEslintrcfile(tree, schema),
      updateProjectEslintrcJson(schema)
    ]
  )(tree, _context);
}
