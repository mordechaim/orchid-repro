import { BaseTable } from '../baseTable';

export class AccountTable extends BaseTable {
  readonly table = 'account';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
  }));
}
