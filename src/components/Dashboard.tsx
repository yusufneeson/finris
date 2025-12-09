"use client";

import { UserContext } from "@RSV/lib/user-context";
import { BellDot } from "lucide-react";
import { useContext } from "react";
import BalanceCard from "./BalanceCard";

export default function Dashboard() {
  const user = useContext(UserContext);

  const accountBalance = {
    balance: 89500250,
    income: 21432467,
    expense: 31862652
  }

  return (
    <div>
      <div className="flex mb-5 justify-between">
        <div className="flex gap-1 items-center">
          <div className="bg-green-600 w-6 h-6 rounded-full"></div>
          <span>{user?.name}</span>
        </div>
        <div>
          <BellDot />
        </div>
      </div>

      <BalanceCard
        balance={accountBalance.balance}
        income={accountBalance.income}
        expense={accountBalance.expense}
      />
    </div>
  );
}
