import { createGoogleAuth } from "@RSV/lib/auth/google";
import { redirect } from "next/navigation";

export async function GET() {
  const { url } = await createGoogleAuth();

  redirect(url.toString());
}
