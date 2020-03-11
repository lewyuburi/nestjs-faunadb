<p align="center">
  <h3 align="center">
    nestjs-faunadb
  </h3>

  <p align="center">
    A FaunaDB module for Nestjs
  </p>
</p>

## Table Of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Installation

```bash
npm install --save nestjs-faunadb
```

## Getting Started

The simplest way to use `nestjs-faunadb` is to use `FaunadbModule.forRoot`

```typescript
import { Module } from '@nestjs/common';
import { FaunadbModule, FaunadbModuleOptions } from 'nestjs-faunadb';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const fdbConfig: FaunadbModuleOptions = {
  secret: 'your-faunadb-secret-key'
}

@Module({
  imports: [
    FaunadbModule.forRoot(fdbConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
```

You can then inject the FaunaDB client into any of your injectables

```typescript
import { Injectable } from '@nestjs/common';
import { FaunadbService, query as q, Client, values } from 'nestjs-faunadb';

@Injectable()
export class AppService {

  client: Client;

  constructor(private readonly faunadbService: FaunadbService) {
    this.client = faunadbService.getClient()
  }

  async getHello(): Promise<object> {
    const testCollection = q.Collection('test')
    const data = { testField: 'testValue' }

    const query = q.Create(testCollection, { data })

    const result: values.Ref = await this.client.query(query)

    return result;
  }
}
```
That's it!

## Contributing

I would greatly appreciate any contributions to make this project better. Please
make sure to follow the below guidelines before getting your hands dirty.

1. Fork the repository
2. Create your branch (`git checkout -b my-branch`)
3. Commit any changes to your branch
4. Push your changes to your remote branch
5. Open a pull request

## License

Distributed under the ISC License. See `LICENSE` for more information.

## Acknowledgements

- [nestjs](https://nestjs.com)
- [faunadb](https://docs.fauna.com/fauna/current/drivers/javascript)