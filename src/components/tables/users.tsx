import { userResponse, type User } from "../../api/users";
import {
  createAppColumnHelper,
  resolveUpdater,
  useAppTable,
  useTableQueryState,
} from "../../hooks/table/useTableContext";

type Person = User;

const columnHelper = createAppColumnHelper<Person>();

// Columns are typed: accessor keys must exist on Person,
// and cell/header components come from your registered registry [50]
const columns = columnHelper.columns([
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.accessor("role", {
    header: "Role",
  }),
  columnHelper.accessor("createdAt", {
    header: "Created",
    cell: (info) => new Date(info.getValue()).toLocaleDateString(),
  }),
]);

export function UsersPage() {
  // One grouped state object — sorting/filter changes reset the page atomically
  const [tableState, setTableState] = useTableQueryState();

  //   const { data, isFetching } = useQuery({
  //     queryKey: ["users", tableState],
  //     queryFn: () => fetchUsers(tableState),
  //     placeholderData: (prev) => prev, // keep old rows while the new page loads
  //   });

  const table = useAppTable(
    {
      key: "users-page",
      columns,
      data: userResponse?.rows ?? [],
      rowCount: userResponse?.rowCount, // required for manualPagination
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
