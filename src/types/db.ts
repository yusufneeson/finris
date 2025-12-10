import { accounts, users } from "@RSV/db/schema";
import { InferSelectModel } from "drizzle-orm";

export type User = InferSelectModel<typeof users>;
export type Account = InferSelectModel<typeof accounts>;
