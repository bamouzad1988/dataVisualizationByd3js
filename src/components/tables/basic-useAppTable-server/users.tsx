import { useEffect, useState } from "react";
import {
  resolveUpdater,
  useAppTable,
  useTableQueryState,
} from "../../../hooks/table/useTableContext";
import columns, { type IFakeUsers } from "./columns";
import { fetchUsers } from "../../../api/fake-users";

export function UsersPage() {
  // One grouped state object — sorting/filter changes reset the page atomically
  const [tableState, setTableState] = useTableQueryState();
  const [data, setData] = useState<IFakeUsers[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);
    setError(null);

    fetchUsers(tableState, controller.signal)
      .then((result) => {
        if (controller.signal.aborted) return;
        if (Array.isArray(result)) {
          setData(result);
        }
        setIsLoading(false);
      })
      .catch((err: unknown) => {
        if (err instanceof Error && err.name === "AbortError") return; // cancelled, ignore
        setError(err instanceof Error ? err.message : "Something went wrong");
        setIsLoading(false);
      });

    // Cancel the in-flight request when state changes or the component unmounts
    return () => controller.abort();
  }, [tableState]); // re-runs on pagination, sorting, or filter change

  const table = useAppTable(
    {
      key: "users-page",
      columns: columns(),
      data: data ?? [],
      rowCount: 10,
      state: {
        pagination: tableState.pagination,
        sorting: tableState.sorting,
        columnFilters: tableState.columnFilters,
      },
      onPaginationChange: (updater) =>
        setTableState((s) => ({
          ...s,
          pagination: resolveUpdater(updater, s.pagination),
        })),
      onSortingChange: (updater) =>
        setTableState((s) => ({
          ...s,
          sorting: resolveUpdater(updater, s.sorting),
          pagination: { ...s.pagination, pageIndex: 0 }, // reset page in same update
        })),
      onColumnFiltersChange: (updater) =>
        setTableState((s) => ({
          ...s,
          columnFilters: resolveUpdater(updater, s.columnFilters),
          pagination: { ...s.pagination, pageIndex: 0 },
        })),
    },
    // Selector: only these state slices trigger re-renders of this component [50][51]
    (state) => ({
      pagination: state.pagination,
      sorting: state.sorting,
      columnFilters: state.columnFilters,
    }),
  );

  return (
    <div>
      <h1>Users</h1>
      {isLoading && <span>Loading…</span>}
      {error && <span role="alert">{error}</span>}
      {/* AppTable wrapper provides context + subscribes to selected slices */}
      <table.AppTable
        selector={(state) => ({
          pagination: state.pagination,
          sorting: state.sorting,
          columnFilters: state.columnFilters,
        })}
      >
        {() => (
          <>
            <table>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <table.AppHeader header={header} key={header.id}>
                        {(h) => (
                          <th>
                            {h.isPlaceholder ? null : (
                              <>
                                <h.FlexRender />
                                <h.SortIndicator />
                                <h.ColumnFilter />
                              </>
                            )}
                          </th>
                        )}
                      </table.AppHeader>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getAllCells().map((cell) => (
                      <table.AppCell cell={cell} key={cell.id}>
                        {(c) => (
                          <td>
                            <c.FlexRender />
                          </td>
                        )}
                      </table.AppCell>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <table.PaginationControls />
            <table.RowCount />
          </>
        )}
      </table.AppTable>
    </div>
  );
}
