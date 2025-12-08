"use client";

import { UserContext } from "@RSV/lib/user-context";

export default function Providers({
  children,
  user,
}: Readonly<{
  children: React.ReactNode;
  user: { id: number; googleId: string; email: string; name: string } | null;
}>) {
  return <UserContext value={user}>{children}</UserContext>;
}
