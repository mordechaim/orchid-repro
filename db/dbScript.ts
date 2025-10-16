import { rakeDb } from 'orchid-orm/migrations/postgres-js';
import { BaseTable } from './baseTable';

export const change = rakeDb(
  { databaseURL: process.env.DIRECT_URL },
  {
    baseTable: BaseTable,
    snakeCase: true,
    migrationsTable: 'migrations',
    migrationsPath: './migrations',
    migrationId: 'timestamp',
    dbPath: './db',
    import: (path) => import(path),
  }
);
