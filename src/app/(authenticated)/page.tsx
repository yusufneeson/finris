import Dashboard from "@RSV/components/Dashboard";
import { getAccounts } from "@RSV/lib/accounts";
import { getUser } from "@RSV/lib/auth/get-user";

export default async function Home() {
  const user = await getUser();
  const { accounts, balance } = await getAccounts(user.id);

  return (
      <Dashboard user={user} accounts={accounts} balance={balance} />
  );
}
