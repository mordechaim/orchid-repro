import { orchidORM } from 'orchid-orm/postgres-js';
import { OneTable } from './tables/one.table';

export const db = orchidORM(
  {
    databaseURL: process.env.DATABASE_URL,
  },
  {
    one: OneTable,
  }
);
