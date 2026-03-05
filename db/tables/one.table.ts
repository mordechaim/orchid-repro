import { BaseTable } from '../baseTable';
import { TwoTable } from './two.table';

export class OneTable extends BaseTable {
  readonly table = 'one';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
    twoId: t.integer(),
  }));

  relations = {
    two: this.belongsTo(() => TwoTable, {
      columns: ['twoId'],
      references: ['id'],
      required: true,
    }),
  };
}
