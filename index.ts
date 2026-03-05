import { db } from './db/db';

// ts errors
db.one.join('two').join('three').join('four').select('three.id', 'four.id');

// this works
db.one
  .join('two')
  .join(db.three, 'three.id', 'two.threeId')
  .join(db.four, 'four.id', 'three.fourId')
  .select('three.id', 'four.id');
