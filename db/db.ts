import { orchidORM } from 'orchid-orm';
import { FourTable } from './tables/four.table';
import { OneTable } from './tables/one.table';
import { ThreeTable } from './tables/three.table';
import { TwoTable } from './tables/two.table';

export const db = orchidORM(
  {
    databaseURL: process.env.DATABASE_URL,
  },
  {
    one: OneTable,
    two: TwoTable,
    three: ThreeTable,
    four: FourTable,
  },
);
