"use client";

import { BellDot, CircleUser } from "lucide-react";
import BalanceCard from "./BalanceCard";
import AccountsCard from "./AccountsCard";
import { User, Account } from "@RSV/types/db";

export default function Dashboard({ user, accounts, balance } : {user: User, accounts: Account[], balance: bigint}) {
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
          <div className="flex justify-between border border-gray-200 dark:border-[#4d4d4d] p-3 rounded-2xl">
            <div className="flex gap-1.5 items-center">
              <span className="font-bold">BCA</span>
            </div>
            <span className="font-bold">75.000.000</span>
          </div>
          <div className="flex justify-between border border-gray-200 dark:border-[#4d4d4d] p-3 rounded-xl">
            <div className="flex gap-1.5 items-center">
              <span className="font-bold">Gopay</span>
            </div>
            <span className="font-bold">10.450.000</span>
          </div>
          <div className="flex justify-between border border-gray-200 dark:border-[#4d4d4d] p-3 rounded-xl">
            <div className="flex gap-1.5 items-center">
              <span className="font-bold">Cash</span>
            </div>
            <span className="font-bold">0</span>
          </div>
          <div className="flex justify-between border border-gray-200 dark:border-[#4d4d4d] p-3 rounded-xl">
            <div className="flex gap-1.5 items-center">
              <span className="font-bold">Cash</span>
            </div>
            <span className="font-bold">0</span>
          </div>
          <div className="flex justify-between border border-gray-200 dark:border-[#4d4d4d] p-3 rounded-xl">
            <div className="flex gap-1.5 items-center">
              <span className="font-bold">Cash</span>
            </div>
            <span className="font-bold">0</span>
          </div>
          <div className="flex justify-between border border-gray-200 dark:border-[#4d4d4d] p-3 rounded-xl">
            <div className="flex gap-1.5 items-center">
              <span className="font-bold">Cash</span>
            </div>
            <span className="font-bold">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
