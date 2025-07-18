import { compareTables } from 'src/sql-tools/comparers/table.comparer';
import { DatabaseTable, Reason } from 'src/sql-tools/types';
import { describe, expect, it } from 'vitest';

const testTable: DatabaseTable = {
  name: 'test',
  columns: [],
  constraints: [],
  indexes: [],
  triggers: [],
  synchronize: true,
};

describe('compareParameters', () => {
  describe('onExtra', () => {
    it('should work', () => {
      expect(compareTables.onExtra(testTable)).toEqual([
        {
          type: 'TableDrop',
          tableName: 'test',
          reason: Reason.MissingInSource,
        },
      ]);
    });
  });

  describe('onMissing', () => {
    it('should work', () => {
      expect(compareTables.onMissing(testTable)).toEqual([
        {
          type: 'TableCreate',
          table: testTable,
          reason: Reason.MissingInTarget,
        },
      ]);
    });
  });

  describe('onCompare', () => {
    it('should work', () => {
      expect(compareTables.onCompare(testTable, testTable)).toEqual([]);
    });
  });
});
