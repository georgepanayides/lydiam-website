"use client";

import { ArrowRight, ChevronDown, Calendar, Info } from "lucide-react";

export const ExecutionDetailGraphic = () => {
  return (
    <div className="w-full">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />

      {/* The Card - Positioned to overflow left and bottom */}
      <div className="absolute -top-42 right-15 w-[110%] bg-white dark:bg-dark-800 rounded-tr-xl shadow-2xl border-r border-t border-gray-200 dark:border-dark-700 overflow-hidden">
        <div className="p-8">
            <div className="mb-8 flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-xl text-dark-900 dark:text-white mb-2">Send Payment</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Execute global transfers instantly.</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                    Active
                </div>
            </div>

            <div className="space-y-6">
                {/* Amount Input */}
                <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</label>
                    <div className="flex gap-4">
                        <div className="flex-1 relative">
                            <input 
                                type="text" 
                                value="50,000.00" 
                                readOnly
                                className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-lg px-4 py-3 text-lg font-bold text-dark-900 dark:text-white focus:outline-none focus:border-primary-500"
                            />
                        </div>
                        <div className="w-32 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-lg px-4 py-3 flex items-center justify-between cursor-pointer">
                            <span className="font-bold text-dark-900 dark:text-white">USD</span>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                </div>

                {/* Beneficiary */}
                <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Beneficiary</label>
                    <div className="bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 font-bold">
                                TS
                            </div>
                            <div>
                                <div className="font-bold text-dark-900 dark:text-white">TechSolutions Inc.</div>
                                <div className="text-xs text-gray-500">US82...9921 • SWIFT</div>
                            </div>
                        </div>
                        <button className="text-primary-500 text-sm font-medium hover:underline">Change</button>
                    </div>
                </div>

                {/* Payment Details Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</label>
                        <input 
                            type="text" 
                            value="INV-2024-001" 
                            readOnly
                            className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-lg px-4 py-3 text-sm font-medium text-dark-900 dark:text-white"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Date</label>
                        <div className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-lg px-4 py-3 flex items-center justify-between text-sm font-medium text-dark-900 dark:text-white">
                            <span>Today</span>
                            <Calendar className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                </div>

                {/* Fee Breakdown */}
                <div className="bg-primary-50 dark:bg-primary-900/10 rounded-lg p-4 border border-primary-100 dark:border-primary-900/20">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2 text-sm text-primary-700 dark:text-primary-300">
                            <Info className="w-4 h-4" />
                            <span>Estimated Fee</span>
                        </div>
                        <span className="font-bold text-primary-700 dark:text-primary-300">$15.00</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-primary-600/70 dark:text-primary-400/70">
                        <span>Exchange Rate</span>
                        <span>1 USD = 1.00 USD</span>
                    </div>
                </div>

                {/* Button */}
                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary-500/20">
                    Review Payment
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};
