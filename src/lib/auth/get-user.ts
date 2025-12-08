"use server";

import { db } from "../db";
import { getCurrentSession } from "./session";

export async function getUser() {
  const session = await getCurrentSession();
  if (!session) {
    return null;
  }

  const user = await db.query.users.findFirst({
    where: {
      id: session?.userId,
    },
  });

  console.log(user);

  return user;
}
