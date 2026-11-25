import BasicTable from "../components/tables/basic-useTable/basic";
import { UsersPage } from "../components/tables/basic-useAppTable/users";

export const TanstackTables = () => {
  return (
    <div>
      Basic Table:
      <BasicTable />
      useAppTable:
      <UsersPage />
    </div>
  );
};
