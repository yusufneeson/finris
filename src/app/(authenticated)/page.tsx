import Dashboard from "@RSV/components/Dashboard";
import { getAccounts } from "@RSV/lib/accounts";
import { getUser } from "@RSV/lib/auth/get-user";
import { getTransactions } from "@RSV/lib/transactions";

export default async function Home() {
  const user = await getUser();
  const { accounts, balance } = await getAccounts(user.id);
  const transactions = await getTransactions(user.id)

  return (
      <Dashboard user={user} accounts={accounts} balance={balance} transactions={transactions} />
  );
}
