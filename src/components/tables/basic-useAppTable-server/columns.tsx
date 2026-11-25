import { createAppColumnHelper } from "../../../hooks/table/useTableContext";


export interface IFakeUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function columns() {
  const columnHelper = createAppColumnHelper<IFakeUsers>();
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
    columnHelper.accessor("phone", {
      header: "Role",
      enableSorting: false,
      enableColumnFilter: false,
    }),
    columnHelper.accessor("website", {
      header: "Created",
      enableSorting: true,
      enableColumnFilter: false,
      cell: (info) => new Date(info.getValue()).toLocaleDateString(),
    }),
  ]);
}
