import { toIDR } from "@RSV/lib/number-format";

export default function BalanceCard({ balance, income, expense} : {balance: number, income: number, expense: number}) {
  return (
    <div className="bg-white rounded-4xl p-1">
      <div className="bg-lime-200 p-5 rounded-4xl">
        <div className="text-xs mb-1">Balance</div>
        <span className="text-3xl font-bold">IDR {toIDR(balance)}</span>
      </div>

      <div className="flex justify-between p-5 mt-2">
        <div>
            <span className="bg-green-300 text-green-900 text-xs rounded-md px-1 py-0.5">
              Income
            </span>
          <div className="font-semibold text-xl mt-1">{toIDR(income)}</div>
        </div>
        <div>
          <span className="bg-red-300 text-red-900 text-xs rounded-md px-1 py-0.5">
            Expense
          </span>
          <div className="font-semibold text-xl mt-1">{toIDR(expense)}</div>
        </div>
      </div>
    </div>
  )
}
