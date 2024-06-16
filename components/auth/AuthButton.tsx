"use client";
import { signOut } from "@/auth/helpers";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";

import { useRouter } from "next/navigation";

export const AuthButton = () => {
  const session = useSession();
  const router = useRouter();

  return session?.data?.user ? (
    <Button
      onClick={async () => {
        await signOut();
        router.push("/sign-in");
      }}
    >
      Cerrar sesión
    </Button>
  ) : (
    <Link href={"/sign-in"}>Iniciar sesión</Link>
  );
};
