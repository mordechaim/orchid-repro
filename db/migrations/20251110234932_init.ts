import { change } from '../dbScript';

change(async (db) => {
  await db.createTable('one', (t) => ({
    id: t.identity().primaryKey(),
    deleted: t.timestamp().nullable().index({
      where: '"deleted" is null',
    }),
  }));
});
