import { prisma } from '../../lib/prisma';

export default async function prismaPage() {
//   const product = await prisma.product.findFirst({
//     where: {
//       productId: 8,
//     }
//   });

//   return (
//     <div>
//       <h1>Prisma Page</h1>
//       <br />
//       <p>Name: {product.name}</p>
//       <br />
//       <p>Description: {product.description}</p>
//       <br />
//       <p>Price: {product.price}</p>
//       <br />
//     </div>
//   );
// }

  const admin = await prisma.user.findFirst({
    where: {
      username: 'admin1',
    }
  });

  return (
    <div>
      <h1>Prisma Page</h1>
      <br />
      <p>Name: {admin.username}</p>
      <br />
      <p>Email: {admin.email}</p>
      <br />
      <p>Password: {admin.password}</p>
      <br />
    </div>
  );
}