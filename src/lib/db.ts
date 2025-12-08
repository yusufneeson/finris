import { relations } from "@RSV/db/relations";
import { drizzle } from "drizzle-orm/node-postgres";
// import postgres from "postgres";

const connectionString = process.env.DATABASE_URL as string;

// const client = postgres(connectionString, { prepare: false });
export const db = drizzle(connectionString, { relations: relations });
