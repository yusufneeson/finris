'use client';

import {
    BanknoteArrowUp,
    Home,
    Landmark,
    Plus,
    Settings,
    X,
} from 'lucide-react';
import { useState } from 'react';

export default function BottomNavbar() {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState('INCOME');

    return (
        <div>
            <div className="relative">
                <div className="fixed bottom-5 left-0 right-0 md:w-[450px] flex justify-center mx-auto md:px-8 px-6">
                    <div className="w-full bg-white dark:bg-[#3a3a3a] shadow-xl px-4 py-2 rounded-full border border-lime-100 dark:border-gray-900">
                        <div className="flex gap-1 justify-around items-center">
                            <Home />
                            <BanknoteArrowUp />
                            <div
                                className="bg-lime-300 dark:bg-lime-700 p-4 rounded-full"
                                onClick={() => setOpen(true)}
                            >
                                <Plus className="text-lime-800 dark:text-lime-50" />
                            </div>
                            <Landmark />
                            <Settings />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`transition-colors ease-in-out duration-450 md:rounded-md fixed md:w-[450px] z-3 inset-0 mx-auto ${open ? 'bg-black/20 h-screen' : 'h-0'}`}
            >
                <div
                    className={`z-4 h-[70vh] w-[450px] fixed bottom-0 inset-x-0 mx-auto transition-transform duration-150 ease-in-out ${open ? 'translate-y-0' : 'translate-y-full'}`}
                >
                    <div className="bg-white w-full h-full rounded-t-3xl border-t border-lime-950">
                        <div className="w-20 h-1 mx-auto rounded-b-full bg-green-950"></div>
                        <div className="relative border-b border-neutral-200">
                            <div className="text-center py-4">
                                <span className="text-neutral-800 font-semibold">
                                    Add Transaction
                                </span>
                            </div>
                            <div className="absolute top-4 right-4">
                                <button
                                    className="cursor-pointer text-green-950"
                                    onClick={() => setOpen(false)}
                                >
                                    <X />
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <form>
                                <div className="flex justify-between bg-neutral-300 p-1 gap-1 rounded-md mb-4">
                                    <div
                                        onClick={() => setType('INCOME')}
                                        className={`transition-all duration-75 ease-linear rounded-md p-2 flex-1 text-center font-semibold ${type == 'INCOME' ? 'bg-white' : 'text-neutral-500 cursor-pointer'}`}
                                    >
                                        Income
                                    </div>
                                    <div
                                        onClick={() => setType('EXPENSE')}
                                        className={`transition-all duration-75 ease-linear rounded-md p-2 flex-1 text-center font-semibold ${type == 'EXPENSE' ? 'bg-white' : 'text-neutral-500 cursor-pointer'}`}
                                    >
                                        Expense
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="font-semibold">
                                            Date
                                        </label>
                                        <input
                                            type="text"
                                            className="border border-neutral-200 outline-0 rounded-md py-2 px-2 focus:border-lime-600/50 focus:ring-2 ring-lime-200"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-semibold">
                                            Account
                                        </label>
                                        <input
                                            type="text"
                                            className="border border-neutral-200 outline-0 rounded-md py-2 px-2 focus:border-lime-600/50 focus:ring-2 ring-lime-200"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
