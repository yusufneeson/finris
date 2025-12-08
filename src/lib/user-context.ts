import { createContext } from "react";

export const UserContext = createContext(
  {} as { id: number; googleId: string; email: string; name: string } | null,
);
