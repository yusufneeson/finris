'use client';

import { BellDot, CircleUser } from 'lucide-react';
import BalanceCard from './BalanceCard';
import AccountsCard from './AccountsCard';
import { User, Account } from '@RSV/types/db';
import { TransactionWithRelations } from '@RSV/lib/transactions';
import TransactionDashboard from './TransactionDashboard';

type Props = {
    user: User;
    accounts: Account[];
    balance: bigint;
    transactions: TransactionWithRelations[];
};

export default function Dashboard({
    user,
    accounts,
    balance,
    transactions,
}: Props) {
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
            <TransactionDashboard transactions={transactions} />
        </div>
    );
}
