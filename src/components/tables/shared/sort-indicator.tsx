import { useHeaderContext } from "../../../hooks/table/useTableContext";

export function SortIndicator() {
  const header = useHeaderContext();
  if (!header.column.getCanSort()) return null;
  const dir = header.column.getIsSorted();

  return (
    <button onClick={header.column.getToggleSortingHandler()}>
      {dir === "asc" ? " ▲" : dir === "desc" ? " ▼" : " ↕"}
    </button>
  );
}
