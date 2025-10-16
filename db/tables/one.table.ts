import { BaseTable } from '../baseTable';
import { TwoTable } from './two.table';

export class OneTable extends BaseTable {
  readonly name = 'one';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
  }));

  relations = {
    two: this.hasOne(() => TwoTable, {
      columns: ['id'],
      references: ['oneId'],
    }),
  };
}
