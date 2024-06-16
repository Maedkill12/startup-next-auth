"use server";
import { signIn as naSignIn, signOut as naSignOut } from "@/auth";

export async function signIn() {
  await naSignIn();
}

export async function signOut() {
  await naSignOut();
}

export async function doCredentialsSignIn(username: string, password: string) {
  try {
    console.log(username, password);
    return await naSignIn("credentials", {
      username,
      password,
      redirect: false,
    });
  } catch (error) {
    throw new Error("Credenciales inválidas");
  }
}
