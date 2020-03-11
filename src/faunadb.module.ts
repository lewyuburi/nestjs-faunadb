import { DynamicModule, Module } from '@nestjs/common';

import { FaunadbCoreModule } from './faunadb-core.module';
import { FaunadbModuleAsyncOptions, FaunadbModuleOptions } from './faunadb.interface';


@Module({})
export class FaunadbModule {
  static forRoot(options?: FaunadbModuleOptions): DynamicModule {
    return {
      module: FaunadbModule,
      imports: [FaunadbCoreModule.forRoot(options)],
    }
  }

  static forRootAsync(options: FaunadbModuleAsyncOptions): DynamicModule {
    return {
      module: FaunadbModule,
      imports: [FaunadbCoreModule.forRootAsync(options)],
    }
  }
}