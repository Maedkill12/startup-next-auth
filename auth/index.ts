import NextAuth, { NextAuthConfig, User } from "next-auth";
import credentials from "next-auth/providers/credentials";

export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
  providers: [
    credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Usuario", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        const users = [
          {
            id: "1",
            username: "test1",
            displayName: "Test User 1",
            password: "pass",
            email: "test1@test.com",
          },
          {
            id: "2",
            username: "test2",
            displayName: "Test User 2",
            password: "pass",
            email: "test2@test.com",
          },
        ];
        const user = users.find(
          (user) =>
            user.username === credentials.username &&
            user.password === credentials.password
        );

        return user
          ? { id: user.id, name: user.displayName, email: user.email }
          : null;
      },
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
  //   pages: {
  //     signIn: `/sign-in`,
  //   },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
