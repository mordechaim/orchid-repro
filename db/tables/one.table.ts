import { BaseTable } from '../baseTable';

export class OneTable extends BaseTable {
  readonly table = 'one';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
    // uncomment this
    // enum: t.enum('enum_name', ['a', 'b']),
    deleted: t
      .timestamp()
      .nullable()
      .index({ where: '"deleted" is null' })
      .asDate(),
  }));
}
