import { formatRupiah } from "@RSV/lib/rupiah";

export default function BalanceCard({
  balance,
  income,
  expense,
}: {
  balance: bigint;
  income: bigint;
  expense: bigint;
}) {
  return (
    <div className="bg-white dark:bg-[#252525] rounded-4xl p-1">
      <div className="bg-lime-200 dark:bg-green-900 p-5 rounded-4xl">
        <div className="text-xs mb-1">Balance</div>
        <span className="text-3xl font-bold">IDR {formatRupiah(balance)}</span>
      </div>

      <div className="flex justify-between p-5 mt-2">
        <div>
          <span className="bg-green-300 dark:bg-green-700 text-green-900 dark:text-green-100 text-xs rounded-md px-1 py-0.5">
            Income
          </span>
          <div className="font-semibold text-xl mt-1">{formatRupiah(income)}</div>
        </div>
        <div>
          <span className="bg-red-300 dark:bg-red-900 text-red-900 dark:text-red-200 text-xs rounded-md px-1 py-0.5">
            Expense
          </span>
          <div className="font-semibold text-xl mt-1">{formatRupiah(expense)}</div>
        </div>
      </div>
    </div>
  );
}
