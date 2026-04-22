import { BaseTable } from '../baseTable';

export class BTable extends BaseTable {
  readonly table = 'b';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
  }));
}
