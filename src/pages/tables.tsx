import BasicTable from "../components/tables/basic";
import { UsersPage } from "../components/tables/users";

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
