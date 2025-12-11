import { db } from "./db";

export async function getTransactions(userId: number) {
  const resultTr = await db.query.transactions.findMany({
    where: {
      userId: userId
    },
    with: {
      user: true,
      account: true,
      category: true
    }
  });

  return resultTr;
}

export type TransactionWithRelations = Awaited<
  ReturnType<typeof getTransactions>
>[number]
