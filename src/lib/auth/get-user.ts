"use server";

import { User } from "@RSV/types/db";
import { db } from "../db";
import { getCurrentSession } from "./session";

export async function getUser(): Promise<User> {
  const session = await getCurrentSession();
  if (!session) {
    throw new Error("Unauthenticated");
  }

  const user = await db.query.users.findFirst({
    where: {
      id: session?.userId,
    },
  });

  if (!user) {
    throw new Error("Entity_Not_Found");
  }

  console.log(user);
  return user;
}
