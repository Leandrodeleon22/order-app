import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';


export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.role) {
    redirect('/api/auth/signin');
    
  }
  if (session.user.role === 'ADMIN') {
    redirect('/dashboard');
  }

  return (
    <div>
      <div className="inline">
        <br />
        <h1 className="bg-gray-100 text-xl font-bold mb-4">Manager Dashboard - Server Session - {JSON.stringify(session)}</h1>
      </div>
    </div>
  );
}