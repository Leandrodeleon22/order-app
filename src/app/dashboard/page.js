import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';


export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.role) {
    redirect('/api/auth/signin');
  }
  if (session.user.role === 'MANAGER') {
    redirect('/manager');
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <NavBar />
        <div className="inline">
          <br />
          <h1 className="bg-gray-100 text-xl font-bold mb-4 text-center">
            Admin Dashboard - Server Session - 🔐 <u>Name</u>: {JSON.stringify(session.user.name)} 🔐 <u>Email</u>: {JSON.stringify(session.user.email)} 🔐 <u>Role</u>: {JSON.stringify(session.user.role)} 🔐
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}