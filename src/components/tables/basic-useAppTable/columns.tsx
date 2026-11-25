import { createAppColumnHelper } from "../../../hooks/table/useTableContext";
import type { User } from "../../../api/users";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function columns() {
  const columnHelper = createAppColumnHelper<User>();
  return columnHelper.columns([
    columnHelper.display({
      id: "rowNumber",
      header: "",
      enableSorting: false,
      enableColumnFilter: false,
      cell: ({ row, table }) => {
        const { pageIndex, pageSize } = table.store.state.pagination;
        return pageIndex * pageSize + row.index + 1;
      },
    }),
    columnHelper.accessor("name", {
      header: "Name",
      enableSorting: false,
      enableColumnFilter: false,
    }),
    columnHelper.accessor("email", {
      header: "Email",
      enableSorting: false,
      enableColumnFilter: true,
    }),
    columnHelper.accessor("role", {
      header: "Role",
      enableSorting: false,
      enableColumnFilter: false,
    }),
    columnHelper.accessor("createdAt", {
      header: "Created",
      enableSorting: true,
      enableColumnFilter: false,
      cell: (info) => new Date(info.getValue()).toLocaleDateString(),
    }),
  ]);
}
