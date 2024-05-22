import TableOrder from "../../components/TableOrder";
import { getAllTables } from "../../lib/data";

export default async function Admin() {
  const allTables = await getAllTables();

  return (
    <main className=" flex justify-center flex-col items-center">
      {allTables.map((table) => {
        return (
          <TableOrder
            key={table.tableId}
            tableNum={table.tableNumber}
            orderStatus={table.orderStatus}
          />
        );
      })}
    </main>
  );
}
