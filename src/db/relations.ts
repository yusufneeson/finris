import { defineRelations } from "drizzle-orm";
import * as schema from "./schema";

export const relations = defineRelations(schema, (r) => ({
  users: {
    session: r.many.sessions(),
    accounts: r.many.accounts(),
    categories: r.many.categories(),
    transactions: r.many.transactions(),
  },
  sessions: {
    user: r.one.users({
      from: r.sessions.userId,
      to: r.users.id,
    }),
  },
  accounts: {
    user: r.one.users({
      from: r.accounts.userId,
      to: r.users.id,
    }),
    transactions: r.many.transactions(),
  },
  categories: {
    user: r.one.users({
      from: r.categories.userId,
      to: r.users.id,
    }),
    transactions: r.many.transactions(),
  },
  transactions: {
    user: r.one.users({
      from: r.transactions.userId,
      to: r.users.id,
    }),
    account: r.one.accounts({
      from: r.transactions.accountId,
      to: r.accounts.id,
    }),
    category: r.one.categories({
      from: r.transactions.categoryId,
      to: r.categories.id,
    }),
  },
}));
