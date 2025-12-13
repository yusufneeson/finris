import { formatRupiah } from '@RSV/lib/rupiah';
import { TransactionWithRelations } from '@RSV/lib/transactions';

type Props = {
    transactions: TransactionWithRelations[];
};

export default function TransactionDashboard({ transactions }: Props) {
    return (
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
                            <div className="font-semibold flex-1">
                                {t?.account!.name}
                            </div>
                            <div className="flex flex-col gap-1 text-left flex-5">
                                <span className="font-semibold">
                                    {t.description}
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-neutral-500 text-sm">
                                        Lain Lain
                                    </span>
                                    <div className="w-1 h-1 rounded-full bg-gray-500"></div>
                                    <span className="text-neutral-500 text-sm">
                                        {new Intl.DateTimeFormat('id-ID', {
                                            month: 'short',
                                            day: '2-digit',
                                        }).format(new Date(t.transaction_date))}
                                    </span>
                                </div>
                            </div>
                            <div className="font-semibold flex-2 text-right">
                                <span>{t.type == 'INCOME' ? '+' : '-'}</span>
                                <span className="pl-1">
                                    {formatRupiah(t.amount)}
                                </span>
                            </div>
                        </div>
                        {i % transactions.length == 0 && (
                            <div className="w-[90%] border-b border-neutral-300 dark:border-neutral-700 rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
