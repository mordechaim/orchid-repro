import { orchidORM } from 'orchid-orm/postgres-js';
import { ATable } from './tables/a.table';
import { BTable } from './tables/b.table';
import { CTable } from './tables/c.table';

export const db = orchidORM(
  { databaseURL: '' },
  {
    a: ATable,
    b: BTable,
    c: CTable,
  },
);
