export interface ISchemaOptions {
  /**
   * The Project name.
   */
  projectName: string;
  /**
   * Run creation of Initial Files and installing packages (Default: true)
   */
  runInitialSetup: boolean;
  /**
   * Skip formatting on Created Files (Default: true)
   */
  skipFormat: boolean;
}
