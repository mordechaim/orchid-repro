import { BaseTable } from '../baseTable';
import { AccountTable } from './account.table';

export class PosterTable extends BaseTable {
  readonly table = 'poster';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
    accountId: t.integer(),
    data: t.text(),
  }));

  relations = {
    account: this.belongsTo(() => AccountTable, {
      columns: ['accountId'],
      references: ['id'],
    }),
  };
}
