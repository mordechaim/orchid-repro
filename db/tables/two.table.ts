import { BaseTable } from '../baseTable';
import { OneTable } from './one.table';

export class TwoTable extends BaseTable {
  readonly name = 'two';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
    oneId: t.integer(),
  }));

  relations = {
    one: this.belongsTo(() => OneTable, {
      columns: ['oneId'],
      references: ['id'],
      required: true,
    }),
  };
}
