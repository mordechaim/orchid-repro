import 'server-only';

import { orchidORM } from 'orchid-orm/postgres-js';
import { OneTable } from './tables/one.table';
import { TwoTable } from './tables/two.table';

export const db = orchidORM(
  {
    databaseURL: process.env.DATABASE_URL,
    extensions: ['citext', 'postgis', 'btree_gist'],
    generatorIgnore: {
      tables: ['spatial_ref_sys'],
    },
  },
  {
    one: OneTable,
    two: TwoTable,
  }
);
