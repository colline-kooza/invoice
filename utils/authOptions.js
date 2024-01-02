import CredentialsProvider from "next-auth/providers/credentials";
import db from "./db";
import { compare } from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";

const authOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "john Doe" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Check if the credentials are not empty
        if (!credentials?.email || !credentials?.password) {
          console.log("no inputs");
          return null;
        }
        // If the user exists in the db
        const existingUser = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!existingUser) {
          console.log("no user found");
          return null;
        }
        // Check password
        const passwordMatch = await compare(
          credentials.password,
          existingUser.password
        );
        if (!passwordMatch) {
          console.log("wrong password");
          return null;
        }
        const user = {
          id: existingUser.id,
          name: existingUser.name,
          email: existingUser.email,
        };
        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
  },
};

export { authOptions };


