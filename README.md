<p align="center">
  POWERED BY
</p>
<p align="center">
  <a href="http://nestjs.com/" target="_blank"><img src="https://nestjs.com/img/logo_text.svg" width="200" alt="Nest Logo" /></a>
</p>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Config Files

```javascript
// src/config/database.ts

import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const db: SequelizeModuleOptions = {
  dialect: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'user',
  password: 'password',
  database: 'MuOnline',
  define: {
    freezeTableName: true,
    timestamps: false,
  },
  logging: false,
  dialectOptions: {
    options: {
      enableArithAbort: true,
      trustServerCertificate: true,
    },
  },
  autoLoadModels: true,
};
```
