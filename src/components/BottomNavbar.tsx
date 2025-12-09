import { BanknoteArrowUp, Home, Landmark, Plus, Settings } from "lucide-react";

export default function BottomNavbar() {
  return (
    <div className="relative">
      <div className="fixed bottom-5 left-0 right-0 md:w-[450px] flex justify-center mx-auto md:px-8 px-6">
        <div className="w-full bg-white shadow-xl px-4 py-2 rounded-full border border-lime-100">
          <div className="flex gap-1 justify-around items-center">
            <div>
              <Home/>
            </div>
            <div>
              <BanknoteArrowUp/>
            </div>
            <div className="bg-lime-300 p-4 rounded-full">
              <Plus className="text-lime-800"/>
            </div>
            <div>
              <Landmark/>
            </div>
            <div>
              <Settings/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
