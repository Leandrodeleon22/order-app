import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import Footer from '../../components/Footer';

import TableOrder from "../../components/TableOrder";
import { getAllOrders, getAllTables } from "../../lib/data";


export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.role) {
    redirect('/api/auth/signin');
  }
  if (session.user.role === 'MANAGER') {
    redirect('/manager');
  }

  const allTables = await getAllTables();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="inline">
          <br />
          <h1 className="bg-gray-100 text-xl font-bold mb-4 text-center">
            Admin Dashboard - 🔐 <u>Name</u>: {JSON.stringify(session.user.name)} 🔐 <u>Email</u>: {JSON.stringify(session.user.email)} 🔐 <u>Role</u>: {JSON.stringify(session.user.role)} 🔐
          </h1>
        </div>
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
      </div>
      <Footer />
    </div>
  );
}