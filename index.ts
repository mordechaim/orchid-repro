import { db } from './db/db';

const p = await db.poster.create({
  accountId: 1,
});
