import { Global, Module, DynamicModule } from '@nestjs/common';

import {
  FaunadbModuleAsyncOptions,
  FaunadbModuleOptions,
} from './faunadb.interface';
import { FAUNADB_MODULE_OPTIONS } from './faunadb.constant';
import { FaunadbService } from './faunadb.service';

@Global()
@Module({
  providers: [FaunadbService],
  exports: [FaunadbService],
})
export class FaunadbCoreModule {
  static forRoot(options: FaunadbModuleOptions): DynamicModule {
    const faunadbModuleOptions = {
      provide: FAUNADB_MODULE_OPTIONS,
      useValue: options,
    };

    return {
      module: FaunadbCoreModule,
      providers: [faunadbModuleOptions],
      exports: [FaunadbService],
    };
  }

  static forRootAsync(options: FaunadbModuleAsyncOptions): DynamicModule {
    const faunadbModuleOptions = {
      provide: FAUNADB_MODULE_OPTIONS,
      useFactory: options.useFactory,
      inject: options.inject || [],
    };

    return {
      module: FaunadbCoreModule,
      imports: options.imports,
      providers: [faunadbModuleOptions],
      exports: [FaunadbService],
    };
  }
}
