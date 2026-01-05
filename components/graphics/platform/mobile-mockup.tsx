

import { Wallet, ArrowUpRight, ArrowDownLeft, ScanLine, CreditCard, RefreshCw, Bell, Menu } from "lucide-react";
import Image from "next/image";

export const MobileMockupGraphic = () => {
  return (
    <div className="relative mx-auto border-gray-900 dark:border-gray-900 bg-gray-900 border-[8px] rounded-[3rem] h-[600px] w-[320px] shadow-2xl shadow-primary-500/20 flex flex-col overflow-hidden">
      <div className="w-[120px] h-[18px] bg-gray-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
      <div className="h-[32px] w-[3px] bg-gray-900 absolute -start-[11px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-900 absolute -start-[11px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-900 absolute -start-[11px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-900 absolute -end-[11px] top-[142px] rounded-e-lg"></div>
      
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-dark-950 relative flex flex-col">
        {/* Status Bar Placeholder */}
        <div className="h-8 w-full bg-white dark:bg-dark-950 shrink-0" />

        {/* App Content */}
        <div className="flex-1 overflow-hidden relative flex flex-col">
            
            {/* Header */}
            <div className="px-5 mb-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-[10px] shadow-lg shadow-primary-500/20">
                        JD
                    </div>
                    <div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">Personal Account</div>
                        <div className="text-xs font-bold text-dark-900 dark:text-white">Jane Doe</div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full bg-gray-50 dark:bg-dark-800 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors">
                        <ScanLine className="w-3.5 h-3.5 text-dark-900 dark:text-white" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-50 dark:bg-dark-800 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors">
                        <Bell className="w-3.5 h-3.5 text-dark-900 dark:text-white" />
                    </button>
                </div>
            </div>

            {/* Balance Card */}
            <div className="px-5 mb-6">
                <div className="rounded-3xl p-5 text-white shadow-xl shadow-primary-500/20 relative overflow-hidden group cursor-pointer">
                    <Image 
                        src="/assets/gradient-bg/Gradient.jpg" 
                        alt="Gradient Background" 
                        fill 
                        className="object-cover"
                    />
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10" />
                    
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-1">
                            <div className="text-primary-100 text-[10px] font-medium">Total Balance</div>
                            <div className="px-2 py-0.5 rounded-lg bg-white/10 text-[10px] font-bold backdrop-blur-md">GBP</div>
                        </div>
                        <div className="text-2xl font-bold mb-4 tracking-tight">£2,450,290.00</div>
                        <div className="flex gap-2">
                            <button className="flex-1 bg-white text-primary-700 hover:bg-gray-50 transition-colors rounded-xl h-9 flex items-center justify-center text-[10px] font-bold shadow-sm">
                                Add Money
                            </button>
                            <button className="flex-1 bg-white/10 hover:bg-white/20 transition-colors rounded-xl h-9 flex items-center justify-center text-[10px] font-bold backdrop-blur-sm border border-white/10">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="px-5 mb-6">
                <div className="flex justify-between gap-2">
                    {[
                        { icon: Wallet, label: "Accounts" },
                        { icon: RefreshCw, label: "Exchange" },
                        { icon: CreditCard, label: "Cards" },
                        { icon: Menu, label: "More" }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-1.5 flex-1 cursor-pointer group">
                            <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-dark-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors flex items-center justify-center text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 shadow-sm">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-medium text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Activity */}
            <div className="flex-1 bg-gray-50 dark:bg-dark-900 rounded-t-[2rem] p-5 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] relative">
                <div className="w-10 h-1 bg-gray-200 dark:bg-dark-700 rounded-full mx-auto mb-5" />
                
                <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-dark-900 dark:text-white text-sm">Transactions</h4>
                    <span className="text-[10px] text-primary-500 font-bold cursor-pointer hover:text-primary-600">View All</span>
                </div>
                
                <div className="space-y-4">
                    <div className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white dark:bg-dark-800 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                                <ArrowUpRight className="w-4 h-4 text-dark-900 dark:text-white" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-dark-900 dark:text-white">Apple Store</div>
                                <div className="text-[10px] text-gray-500">Electronics • Today</div>
                            </div>
                        </div>
                        <div className="text-xs font-bold text-dark-900 dark:text-white">-$1,299.00</div>
                    </div>
                    
                    <div className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white dark:bg-dark-800 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                                <ArrowDownLeft className="w-4 h-4 text-green-500" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-dark-900 dark:text-white">Salary Deposit</div>
                                <div className="text-[10px] text-gray-500">Transfer • Yesterday</div>
                            </div>
                        </div>
                        <div className="text-xs font-bold text-green-500">+$8,450.00</div>
                    </div>

                    <div className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white dark:bg-dark-800 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                                <RefreshCw className="w-4 h-4 text-primary-500" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-dark-900 dark:text-white">USD to GBP</div>
                                <div className="text-[10px] text-gray-500">Exchange • Mon</div>
                            </div>
                        </div>
                        <div className="text-xs font-bold text-dark-900 dark:text-white">$500.00</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
