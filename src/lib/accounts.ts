import { db } from "./db";

export async function getAccounts(userId: number) {
  const resultAccounts = await db.query.accounts.findMany({
    where: {
      userId: userId
    }
  });

  const totalBalance = resultAccounts.reduce((acc, sum) => sum.balance + acc, 0n);

  return {
    accounts: resultAccounts,
    balance: totalBalance
  }
}
