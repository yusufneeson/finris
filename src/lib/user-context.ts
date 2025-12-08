import { User } from "@RSV/types/db";
import { createContext } from "react";

export const UserContext = createContext<User | null>(null);
