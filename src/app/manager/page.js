import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { prisma } from '../../lib/prisma';
import ReadOnlyStars from '../../components/ReadOnlyStars';
import Footer from '../../components/Footer';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.role) {
    redirect('/api/auth/signin');
  }
  if (session.user.role === 'ADMIN') {
    redirect('/dashboard');
  }


  const feedbacks = await prisma.feedback.findMany();


  const orders = await prisma.order.findMany({
    include: {
      product: true
    },
  });

  const totalEarned = orders.reduce((total, order) => {
    return total + (order.quantity * order.product.price);
  }, 0);

  const itemsSold = orders.reduce((total, order) => {
    return total + order.quantity;
  }, 0);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="inline">
          <br />
          <h1 className="bg-gray-100 text-xl font-bold mb-4 text-center">
            Manager Dashboard - 🔐 <u>Name</u>: {JSON.stringify(session.user.name)} 🔐 <u>Email</u>: {JSON.stringify(session.user.email)} 🔐 <u>Role</u>: {JSON.stringify(session.user.role)} 🔐
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold mb-4">All Feedbacks</h2>
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {feedbacks.length > 0 ? (
              feedbacks.map(feedback => (
                <div key={feedback.feedbackId} className="bg-white shadow-md rounded-lg p-6 w-full">
                  <div className="flex flex-col">
                    <p className="flex items-center"><strong>Food:</strong> <ReadOnlyStars rate={feedback.answerOne} /></p>
                    <p className="flex items-center"><strong>Service:</strong> <ReadOnlyStars rate={feedback.answerTwo} /></p>
                    <p className="flex items-center"><strong>Vibe:</strong> <ReadOnlyStars rate={feedback.answerThree} /></p>
                    <p><strong>Thoughts:</strong> {feedback.answerFour}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No feedback available</p>
            )}
          </div>
          <div className="mt-8 w-full flex flex-col items-center">
            <div>
              <h2 className="text-lg font-bold">Total Earned:</h2>
            </div>
            <div className="bg-white rounded-lg p-4 flex items-center justify-center w-full max-w-sm mt-2">
              <h2 className="text-lg font-bold">${(totalEarned / 100).toFixed(2)}</h2>
            </div>
            <br/>
            <div>
              <h2 className="text-lg font-bold">Total Items Sold:</h2>
            </div>
            <div className="bg-white rounded-lg p-4 flex items-center justify-center w-full max-w-sm mt-2">
              <h2 className="text-lg font-bold">{itemsSold}</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
