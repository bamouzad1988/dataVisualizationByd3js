import { createColumnHelper, tableFeatures } from "@tanstack/react-table";
import type { Person } from "./basic";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const features = tableFeatures({});
export default function columns() {
  const columnHelper = createColumnHelper<typeof features, Person>();
  return columnHelper.columns([
    columnHelper.accessor("firstName", {
      header: "First Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: "lastName",
      header: () => <span>Last Name</span>,
      cell: (info) => <i>{info.getValue()}</i>,
    }),
    columnHelper.accessor((row) => Number(row.age), {
      id: "age",
      header: () => "Age",
      cell: (info) => {
        return info.renderValue();
      },
    }),
    columnHelper.accessor("visits", {
      header: () => <span>Visits</span>,
    }),
    columnHelper.accessor("status", {
      header: "Status",
    }),
    columnHelper.accessor("progress", {
      header: "Profile Progress",
    }),
  ]);
}
