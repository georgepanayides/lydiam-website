"use client";

import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  ArrowRightLeft, 
  Wallet, 
  Users, 
  LifeBuoy, 
  Settings, 
  LogOut,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownLeft
} from "lucide-react";

export const MasterDashboardGraphic = () => {
  return (
    <div className="w-full aspect-[16/10] bg-gray-50 dark:bg-dark-900 rounded-xl border border-gray-200 dark:border-dark-700 shadow-2xl overflow-hidden flex relative font-sans text-xs md:text-sm">
      
      {/* Sidebar */}
      <div className="w-48 md:w-56 border-r border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 flex flex-col justify-between p-4 md:p-6 z-10">
        <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-2 px-2">
                <span className="font-organetto font-bold text-dark-900 dark:text-white text-lg">LYDIAM</span>
            </div>

            {/* Nav Items */}
            <div className="space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary-50 dark:bg-primary-900/10 text-primary-600 dark:text-primary-400 font-medium">
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Home</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors">
                    <ArrowRightLeft className="w-4 h-4" />
                    <span>Convert & Pay</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors">
                    <Wallet className="w-4 h-4" />
                    <span>Balances</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors">
                    <Users className="w-4 h-4" />
                    <span>Beneficiaries</span>
                </div>
            </div>
        </div>

        <div className="space-y-1">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors">
                <LifeBuoy className="w-4 h-4" />
                <span>Support</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors mt-4">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 dark:bg-dark-900 p-4 md:p-8 overflow-hidden relative">
        
        {/* Floating Decorative Elements */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute top-12 right-12 z-20 bg-white dark:bg-dark-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-dark-700 w-48 hidden lg:block"
        >
            <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">GBP/USD</span>
                <span className="text-xs font-bold text-green-500">+1.2%</span>
            </div>
            <div className="h-12 w-full">
                <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                    <path d="M0 30 C 20 30, 20 10, 40 10 C 60 10, 60 25, 80 25 C 90 25, 90 5, 100 5" fill="none" stroke="#10B981" strokeWidth="2" />
                    <path d="M0 30 C 20 30, 20 10, 40 10 C 60 10, 60 25, 80 25 C 90 25, 90 5, 100 5 V 40 H 0 Z" fill="url(#gradient)" opacity="0.1" />
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10B981" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-12 right-8 z-20 bg-dark-900 text-white p-4 rounded-xl shadow-xl w-56 hidden lg:block"
        >
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
                <div>
                    <div className="text-xs opacity-70">Payment Sent</div>
                    <div className="font-bold text-sm">$12,450.00</div>
                </div>
            </div>
        </motion.div>

        {/* White Card Container */}
        <div className="w-full h-full bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-dark-700 shadow-sm p-6 md:p-8 overflow-hidden relative">
            
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
                <h1 className="font-organetto font-bold text-2xl text-dark-900 dark:text-white">WELCOME TO LYDIAM</h1>
            </div>

            {/* Account Info */}
            <div className="mb-8">
                <h2 className="font-bold text-dark-900 dark:text-white mb-4">Account</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                        <div className="text-xs text-gray-500 mb-1">Name</div>
                        <div className="font-medium text-dark-900 dark:text-white">Jane Doe</div>
                    </div>
                    <div>
                        <div className="text-xs text-gray-500 mb-1">Email</div>
                        <div className="font-medium text-dark-900 dark:text-white">jane.doe@example.com</div>
                    </div>
                    <div>
                        <div className="text-xs text-gray-500 mb-1">Currency</div>
                        <div className="font-medium text-dark-900 dark:text-white">GBP</div>
                    </div>
                    <div>
                        <div className="text-xs text-gray-500 mb-1">ID</div>
                        <div className="font-medium text-dark-900 dark:text-white font-mono">001KB00000BcQW7YAN</div>
                    </div>
                </div>
            </div>

            {/* Top Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-xl border border-gray-100 dark:border-dark-700 bg-white dark:bg-dark-800 shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Trades</div>
                    <div className="text-2xl font-bold text-dark-900 dark:text-white">5</div>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 dark:border-dark-700 bg-white dark:bg-dark-800 shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Total Tokens</div>
                    <div className="text-2xl font-bold text-dark-900 dark:text-white">555,789</div>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 dark:border-dark-700 bg-white dark:bg-dark-800 shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Total Amount</div>
                    <div className="text-2xl font-bold text-dark-900 dark:text-white">7,253</div>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 dark:border-dark-700 bg-white dark:bg-dark-800 shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Avg Fee</div>
                    <div className="text-2xl font-bold text-dark-900 dark:text-white">0.6</div>
                </div>
            </div>

            {/* Recent Trades Table */}
            <div className="mb-8">
                <h2 className="font-bold text-dark-900 dark:text-white mb-4">Recent Trades</h2>
                <div className="border border-gray-100 dark:border-dark-700 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-xs md:text-sm">
                        <thead className="bg-gray-50 dark:bg-dark-700/50 text-gray-500 font-medium">
                            <tr>
                                <th className="p-3">NAME</th>
                                <th className="p-3">TYPE</th>
                                <th className="p-3 text-right">TOKENS</th>
                                <th className="p-3 text-right">AMOUNT</th>
                                <th className="p-3 text-right">FEE</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-dark-700">
                            <tr>
                                <td className="p-3 font-medium text-dark-900 dark:text-white">TR-0423</td>
                                <td className="p-3 text-gray-600 dark:text-gray-400">Crypto-to-Crypto</td>
                                <td className="p-3 text-right text-dark-900 dark:text-white">344</td>
                                <td className="p-3 text-right text-dark-900 dark:text-white">33</td>
                                <td className="p-3 text-right text-gray-500">3</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-medium text-dark-900 dark:text-white">TR-0419</td>
                                <td className="p-3 text-gray-600 dark:text-gray-400">FX</td>
                                <td className="p-3 text-right text-dark-900 dark:text-white">1,001</td>
                                <td className="p-3 text-right text-dark-900 dark:text-white">1,200</td>
                                <td className="p-3 text-right text-gray-500">-</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-medium text-dark-900 dark:text-white">TR-0418</td>
                                <td className="p-3 text-gray-600 dark:text-gray-400">Crypto On-ramp</td>
                                <td className="p-3 text-right text-dark-900 dark:text-white">6,767</td>
                                <td className="p-3 text-right text-dark-900 dark:text-white">2,500</td>
                                <td className="p-3 text-right text-gray-500">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Payments Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-xl border border-gray-100 dark:border-dark-700 bg-white dark:bg-dark-800 shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Payments</div>
                    <div className="text-2xl font-bold text-dark-900 dark:text-white">15</div>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 dark:border-dark-700 bg-white dark:bg-dark-800 shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Total Amount</div>
                    <div className="text-2xl font-bold text-dark-900 dark:text-white">7,687</div>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 dark:border-dark-700 bg-white dark:bg-dark-800 shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Paid Out</div>
                    <div className="text-2xl font-bold text-dark-900 dark:text-white">4,677</div>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 dark:border-dark-700 bg-white dark:bg-dark-800 shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Received</div>
                    <div className="text-2xl font-bold text-dark-900 dark:text-white">3,010</div>
                </div>
            </div>

            {/* Payments by Type */}
            <div>
                <h2 className="font-bold text-dark-900 dark:text-white mb-4">Payments by Type</h2>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-500">Paid Out</span>
                            <span className="text-dark-900 dark:text-white font-medium">4,677 (61%)</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 dark:bg-dark-700 rounded-full overflow-hidden">
                            <div className="h-full bg-primary-600 w-[61%] rounded-full" />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-500">Received</span>
                            <span className="text-dark-900 dark:text-white font-medium">3,010 (39%)</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 dark:bg-dark-700 rounded-full overflow-hidden">
                            <div className="h-full bg-primary-600 w-[39%] rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};
