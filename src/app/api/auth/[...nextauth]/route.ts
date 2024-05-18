import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../../lib/prisma";

const comparePasswords = (plainPassword, Password) => {
  return plainPassword === Password;
};

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findFirst({
          where: { email: credentials.email, password: credentials.password },
        });
        if (!user) {
          return null;
        }
        const isPasswordValid = comparePasswords(
          credentials.password,
          user.password
        );
        if (!isPasswordValid) {
          return null;
        }
        return {
          id: user.userId,
          email: user.email,
          name: user.username,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      // console.log({'Session Callback': session, token});
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
        },
      };
    },
    jwt: ({ token, user }) => {
      // console.log({'JWT Callback': token, user});
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.userId,
          role: u.role,
        };
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
