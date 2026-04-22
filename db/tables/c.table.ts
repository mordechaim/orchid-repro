import { BaseTable } from '../baseTable';

export class CTable extends BaseTable {
  readonly table = 'c';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
  }));
}
