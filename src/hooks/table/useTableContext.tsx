import * as React from "react";
import {
  columnFilteringFeature,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  createTableHook,
  filterFns,
  rowPaginationFeature,
  rowSortingFeature,
  sortFns,
  tableFeatures,
  type ColumnFiltersState,
  type PaginationState,
  type SortingState,
} from "@tanstack/react-table";
import {
  PaginationControls,
  RowCount,
} from "../../components/tables/shared/pagination-controls";
import { SortIndicator } from "../../components/tables/shared/sort-indicator";
import ColumnFilterInput from "../../components/tables/shared/column-filter-input";
import ColumnFilter from "../../components/tables/shared/column-filter-input";

// Register only the features you use — TypeScript infers available
// state slices and APIs from this exact feature set [51]
const features = tableFeatures({
  rowPaginationFeature,
  rowSortingFeature,
  columnFilteringFeature,
  paginatedRowModel: createPaginatedRowModel(),
  sortedRowModel: createSortedRowModel(),
  filteredRowModel: createFilteredRowModel(),
  sortFns,
  filterFns,
});

export const {
  useAppTable,
  createAppColumnHelper,
  useTableContext,
  useCellContext,
  useHeaderContext,
} = createTableHook({
  features,
  // Shared defaults for every table in the app
  manualPagination: true,
  manualSorting: true,
  manualFiltering: true,
  autoResetPageIndex: false,
  enableSortingRemoval: false,
  tableComponents: { PaginationControls, RowCount },
  headerComponents: { SortIndicator, ColumnFilterInput, ColumnFilter },
});

// ── Reusable typed state hook for server-side tables ──────────────
// Grouped state: sorting/filter changes reset the page in ONE update,
// so your query fires exactly once [35][51]

export type TableQueryState = {
  pagination: PaginationState;
  sorting: SortingState;
  columnFilters: ColumnFiltersState;
};

export function useTableQueryState(): [
  TableQueryState,
  React.Dispatch<React.SetStateAction<TableQueryState>>,
] {
  const [state, setState] = React.useState<TableQueryState>({
    pagination: { pageIndex: 0, pageSize: 10 },
    sorting: [],
    columnFilters: [],
  });
  return [state, setState];
}

// Resolve TanStack updaters (value OR function) against a state slice
export function resolveUpdater<T>(updater: T | ((old: T) => T), old: T): T {
  return typeof updater === "function"
    ? (updater as (old: T) => T)(old)
    : updater;
}
