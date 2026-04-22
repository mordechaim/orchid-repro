import { db } from './db/db';

// bId is type: 'number'
// in my project I also get ts errors that bId is missing in the create input
const a1 = await db.a.create({});

// bId is correctly typed: 'number | null'
const a2 = await db.a.find(0);
