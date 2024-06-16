import { BASE_PATH, auth } from "@/auth";
import { AuthButton } from "@/components/auth/AuthButton";
import { SessionProvider } from "next-auth/react";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <h1>Bienvenido</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <SessionProvider basePath={BASE_PATH} session={session}>
        <AuthButton />
      </SessionProvider>
    </main>
  );
}
