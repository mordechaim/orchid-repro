import { BaseTable } from '../baseTable';
import { BTable } from './b.table';

export class ATable extends BaseTable {
  readonly table = 'a';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
    bId: t.integer().nullable(),
    cId: t.integer().nullable(),
  }));

  relations = {
    b: this.belongsTo(() => BTable, {
      columns: ['bId'],
      references: ['id'],
    }),
  };
}
