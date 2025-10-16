import { db } from './db/db';

db.one.find(1).select('id', {
  // hasOne relation: broken
  two: (q) => q.two.select('id'),
});

db.two.find(1).select('id', {
  // belongs to relation: works
  one: (q) => q.one.select('id'),
});
