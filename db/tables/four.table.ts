import { BaseTable } from '../baseTable';

export class FourTable extends BaseTable {
  readonly table = 'four';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
  }));
}
