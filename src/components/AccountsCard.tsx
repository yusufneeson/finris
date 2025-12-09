import { Banknote, Landmark, Wallet } from "lucide-react";

export default function AccountsCard() {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center px-4">
        <span className="font-semibold">Accounts</span>
        <span className=" text-lime-800 text-sm cursor-pointer">Lihat Semua</span>
      </div>
      <div className="bg-white rounded-2xl mt-2 flex flex-col gap-3 p-4">
        <div className="flex justify-between border border-gray-200 p-3 rounded-2xl">
          <div className="flex gap-1.5 items-center">
            <Landmark/>
            <span className="font-bold">BCA</span>
          </div>
          <span className="font-bold">75.000.000</span>
        </div>
        <div className="flex justify-between border border-gray-200 p-3 rounded-xl">
          <div className="flex gap-1.5 items-center">
            <Wallet/>
            <span className="font-bold">Gopay</span>
          </div>
          <span className="font-bold">10.450.000</span>
        </div>
        <div className="flex justify-between border border-gray-200 p-3 rounded-xl">
          <div className="flex gap-1.5 items-center">
            <Banknote/>
            <span className="font-bold">Cash</span>
          </div>
          <span className="font-bold">0</span>
        </div>
      </div>
    </div>
  )
}
