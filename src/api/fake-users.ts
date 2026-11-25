import type {
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from "@tanstack/react-table";
import type { IFakeUsers } from "../components/tables/basic-useAppTable-server/columns";

export async function fetchUsers(
  params: {
    pagination: PaginationState;
    sorting: SortingState;
    columnFilters: ColumnFiltersState;
  },
  signal?: AbortSignal,
): Promise<IFakeUsers[]> {
  // jsonplaceholder can't paginate/sort/filter server-side, so this shows
  // the real API shape you'd send to your own backend:
  const search = new URLSearchParams({
    page: String(params.pagination.pageIndex),
    pageSize: String(params.pagination.pageSize),
    sort: params.sorting.map((s) => `${s.desc ? "-" : ""}${s.id}`).join(","),
    filters: JSON.stringify(params.columnFilters),
  });

  const response = await fetch(`/api/users?${search}`, { signal });

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.status}`);
  }

  return await response.json();
}
