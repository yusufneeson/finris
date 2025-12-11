"use client";

import { BellDot, CircleUser } from "lucide-react";
import BalanceCard from "./BalanceCard";
import AccountsCard from "./AccountsCard";
import { User, Account, Transaction } from "@RSV/types/db";
import { formatRupiah } from "@RSV/lib/rupiah";
import { TransactionWithRelations } from "@RSV/lib/transactions";

export default function Dashboard({ user, accounts, balance, transactions } : {user: User, accounts: Account[], balance: bigint, transactions: TransactionWithRelations[]}) {
  const accountBalance = {
    income: 21432467n,
    expense: 31862652n,
  };

  return (
    <div>
      <div className="flex mb-5 justify-between">
        <div className="flex gap-1 items-center">
          <div className="bg-green-800 dark:bg-green-900 w-6 h-6 rounded-full">
            <CircleUser className="text-lime-50 dark:text-[#03120d]" />
          </div>
          <span>{user?.name}</span>
        </div>
        <div>
          <BellDot className="cursor-pointer" />
        </div>
      </div>

      <BalanceCard
        balance={balance}
        income={accountBalance.income}
        expense={accountBalance.expense}
      />

      <AccountsCard accounts={accounts} />

      <div className="mt-6">
        <div className="flex justify-between items-center px-4">
          <span className="font-semibold">Transaksi</span>
          <span className=" text-lime-800 dark:text-lime-600 text-sm cursor-pointer">
            Lihat Semua
          </span>
        </div>

        <div className="bg-white dark:bg-[#252525] rounded-2xl mt-2 flex flex-col gap-3 p-4">
          {transactions.map((t, i) => (
            <div key={i} className="flex flex-col items-center gap-3.5">
              <div className="flex justify-between items-center gap-4 w-full">
                <div className="font-semibold flex-1">{t?.account!.name}</div>
                <div className="flex flex-col gap-1 text-left flex-5">
                  <span className="font-semibold">{t.description}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-neutral-500 text-sm">Lain Lain</span>
                    <div className="w-1 h-1 rounded-full bg-gray-500"></div>
                    <span className="text-neutral-500 text-sm">11 Des</span>
                  </div>
                </div>
                <div className="font-semibold flex-2">
                  {formatRupiah(t.amount)}
                </div>
              </div>
              {i%transactions.length == 0 && (
              <div className="w-[90%] border-b border-neutral-300 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
