import {
  chain,
  Rule,
  SchematicContext,
  Tree,
  noop
} from '@angular-devkit/schematics';

import { ISchemaOptions } from './schema';
import {
  addAppFiles,
  addInitFiles, addScripts,
  deleteOldEnvironmentFiles,
  updateWorkspace
} from './utilities/helpers';

export default function(schema: ISchemaOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => chain(
    [
      (schema.runInitialSetup) ? addInitFiles(schema) : noop(),
      updateWorkspace(tree, schema),
      addScripts(schema),
      addAppFiles(schema),
      deleteOldEnvironmentFiles(schema)
    ]
  )(tree, _context);
}
