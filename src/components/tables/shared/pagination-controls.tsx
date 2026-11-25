import { useTableContext } from "../../../hooks/table/useTableContext";

export function PaginationControls() {
  const table = useTableContext();
  const { pageIndex, pageSize } = table.state.pagination;
  const total = table.getRowCount() ?? 0;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
      <button
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        «
      </button>
      <button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Prev
      </button>
      <span>
        Page {pageIndex + 1} of {pageCount} ({total} rows)
      </span>
      <button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </button>
      <button
        onClick={() => table.setPageIndex(pageCount - 1)}
        disabled={!table.getCanNextPage()}
      >
        »
      </button>
      <select
        value={pageSize}
        onChange={(e) => table.setPageSize(Number(e.target.value))}
      >
        {[10, 20, 50].map((s) => (
          <option key={s} value={s}>
            {s} / page
          </option>
        ))}
      </select>
    </div>
  );
}

export function RowCount() {
  const table = useTableContext();
  return <span>{table.getRowCount() ?? 0} total rows</span>;
}
