import { BaseTable } from '../baseTable';
import { FourTable } from './four.table';

export class ThreeTable extends BaseTable {
  readonly table = 'three';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
    fourId: t.integer(),
  }));

  relations = {
    four: this.belongsTo(() => FourTable, {
      columns: ['fourId'],
      references: ['id'],
      required: true,
    }),
  };
}
