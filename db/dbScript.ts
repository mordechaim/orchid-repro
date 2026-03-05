import { rakeDb } from 'orchid-orm/migrations';
import { BaseTable } from './baseTable';

export const change = rakeDb(
  { databaseURL: process.env.DATABASE_URL },
  {
    baseTable: BaseTable,
    snakeCase: true,
    migrationsTable: 'migrations',
    migrationsPath: './migrations',
    recurrentPath: './scripts',
    migrationId: 'timestamp',
    dbPath: './db',
    import: (path) => import(path),
  }
);
