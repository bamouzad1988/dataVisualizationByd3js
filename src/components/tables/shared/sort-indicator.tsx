import { useHeaderContext } from "../../../hooks/table/useTableContext";

export function SortIndicator() {
  const header = useHeaderContext(); 
  const dir = header.column.getIsSorted();
  return (
    <button onClick={header.column.getToggleSortingHandler()}>
      {dir === "asc" ? " ▲" : dir === "desc" ? " ▼" : " ↕"}
    </button>
  );
}
