import TableOrder from "../../components/TableOrder";
import { getAllOrders, getAllTables } from "../../lib/data";

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

      {/* <section className="bg-slate-100 w-4/5 my-7 p-6 rounded-md">
        <div className="flex justify-between  ">
          <h1>Table 1</h1>
          <div>
            <span>status</span>
            <span>pending</span>
          </div>
        </div> */}
      {/* 
        <div className="bg-white px-5 py-4 rounded-md my-5">
          <table className="w-full ">
            <thead>
              <tr className="text-left">
                <th>Product</th>
                <th className="text-right">Quantity</th>
                <th className="text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[1.2rem]">
                <td>Cheesebuger</td>
                <td className="text-right pr-8">1</td>
                <td className="text-right pr-2">40</td>
              </tr>
            </tbody>
          </table>
          <div>
            <p>desription of the burger</p>
          </div>
          <div className="flex justify-between  ">
            <div>
              <h1>Note</h1>
              <p>I want my burger to be half cooked</p>
            </div>

            <div className="flex items-end">
              <button className="mr-4">edit</button>
              <button>delete</button>
            </div>
          </div>
        </div> */}

      {/* <div className="flex justify-between items-center">
          <div>
            <button className="bg-red-500 text-white">clear all</button>
          </div>
          <div>
            <span>total price</span>
            <span>$80</span>
          </div>
        </div>
      </section> */}
    </main>
  );
}
