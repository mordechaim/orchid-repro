import { createBaseTable } from 'orchid-orm';

export const BaseTable = createBaseTable({
  snakeCase: true,

  columnTypes: (t) => ({
    ...t,
    timestamp: (precision?: number) => t.timestamp(precision).asDate(),
  }),
});

export const { sql } = BaseTable;
