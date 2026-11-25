import { useHeaderContext } from "../../../hooks/table/useTableContext";

export default function ColumnFilter() {
  const header = useHeaderContext(); 

  const value = (header.column.getFilterValue() as string | undefined) ?? "";
  return (
    <input
      value={value}
      placeholder="Filter…"
      onChange={(e) => header.column.setFilterValue(e.target.value)}
    />
  );
}
