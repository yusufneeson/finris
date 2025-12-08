import { generateCodeVerifier, generateState, Google } from "arctic";
import { cookies } from "next/headers";

export const google = new Google(
  process.env.GOOGLE_CLIENT_ID as string,
  process.env.GOOGLE_CLIENT_SECRET as string,
  `${process.env.NEXT_PUBLIC_URL}/api/auth/callback`,
);

export async function createGoogleAuth() {
  const cookieStore = await cookies();
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const scopes = ["openid", "email", "profile"];
  const url: URL = google.createAuthorizationURL(state, codeVerifier, scopes);

  cookieStore.set("rsv_google_auth_state", state);
  cookieStore.set("rsv_google_auth_code_verifier", codeVerifier);

  return {
    url,
    state,
    codeVerifier,
  };
}
