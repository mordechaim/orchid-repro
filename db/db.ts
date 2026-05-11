import { orchidORM } from 'orchid-orm/postgres-js';
import { AccountTable } from './tables/account.table';
import { PosterTable } from './tables/poster.table';

export const db = orchidORM(
  { databaseURL: '' },
  {
    account: AccountTable,
    poster: PosterTable,
  },
);
