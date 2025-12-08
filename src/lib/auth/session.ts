import crypto from "crypto";
import { cookies } from "next/headers";
import { db } from "../db";
import { sessions } from "@RSV/db/schema";
import { eq } from "drizzle-orm";

export function generateToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

export function hashToken(token: string): string {
  return crypto.createHash("sha256").update(token).digest("hex");
}

export async function createSessionToken(userId: number): Promise<string> {
  const token = generateToken();
  const hashedToken = hashToken(token);
  const cookieStore = await cookies();
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // Expires in 30 days

  cookieStore.set("rsv_session", token, {
    httpOnly: true,
    path: "/",
    expires: expiresAt,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  await db.insert(sessions).values({
    id: hashedToken,
    userId: userId,
    expiresAt: expiresAt,
  });

  return token;
}

export async function getCurrentSession(): Promise<null | {
  id: string;
  userId: number;
  expiresAt: Date;
}> {
  const cookieStore = await cookies();
  const token = cookieStore.get("rsv_session")?.value as string;

  if (!token) {
    return null;
  }

  const hashedToken = hashToken(token);

  const sessions = await db.query.sessions.findFirst({
    where: {
      id: hashedToken,
      expiresAt: {
        gt: new Date(),
      },
    },
  });

  console.log(sessions);

  if (!sessions) {
    return null;
  }

  return sessions;
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  const token = cookieStore.get("rsv_session")?.value as string;

  if (!token) {
    return;
  }

  const hashedToken = hashToken(token);

  await db.delete(sessions).where(eq(sessions.id, hashedToken));

  cookieStore.delete("rsv_session");
}
