import { ClientConfig } from 'faunadb'
import { ModuleMetadata } from '@nestjs/common/interfaces';

export interface FaunadbModuleOptions extends ClientConfig {}

export interface FaunadbModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  name?: string;
  useFactory?: (
    ...args: any[]
  ) => Promise<FaunadbModuleOptions> | FaunadbModuleOptions;
  inject?: any[];
}