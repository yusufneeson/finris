"use client";

import { UserContext } from "@RSV/lib/user-context";
import { User } from "@RSV/types/db";

export default function Providers({
  children,
  user,
}: Readonly<{
  children: React.ReactNode;
  user: User;
}>) {
  return <UserContext value={user}>{children}</UserContext>;
}
