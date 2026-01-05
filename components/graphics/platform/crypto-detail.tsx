

import { Bitcoin, ShieldCheck, Wallet } from "lucide-react";

export const CryptoDetailGraphic = () => {
  const assets = [
    { symbol: "BTC", name: "Bitcoin", balance: "12.4500", value: "$524,890.00", change: "+2.4%", wallet: "bc1q...39ka" },
    { symbol: "ETH", name: "Ethereum", balance: "145.2000", value: "$348,480.00", change: "+1.8%", wallet: "0x71...9291" },
    { symbol: "USDC", name: "USD Coin", balance: "250,000.00", value: "$250,000.00", change: "0.0%", wallet: "0x71...9291" },
    { symbol: "SOL", name: "Solana", balance: "1,200.50", value: "$145,260.00", change: "+5.2%", wallet: "83aa...1122" },
    { symbol: "XRP", name: "Ripple", balance: "50,000.00", value: "$32,500.00", change: "-0.5%", wallet: "rMw...9921" },
  ];

  return (
    <div className="w-full">
      {/* Abstract Background Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
      
      {/* The Card - Positioned to overflow right and bottom */}
      <div className="absolute -top-42 left-8 w-[120%] bg-white dark:bg-dark-800 rounded-tl-xl shadow-2xl border-l border-t border-gray-200 dark:border-dark-700 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 dark:border-dark-700 flex justify-between items-center bg-white dark:bg-dark-800 sticky top-0 z-10">
            <div>
                <h3 className="font-bold text-xl text-dark-900 dark:text-white">Digital Assets</h3>
                <p className="text-sm text-gray-500">Institutional custody & trading</p>
            </div>
            <div className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 text-xs font-medium flex items-center gap-1 mr-24">
                <ShieldCheck className="w-3 h-3" />
                Segregated Wallets
            </div>
        </div>
        
        <div className="divide-y divide-gray-100 dark:divide-dark-700">
            {assets.map((asset, i) => (
            <div key={i} className="p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-dark-700/50 transition-colors group">
                <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-dark-700 flex items-center justify-center font-bold text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-dark-600">
                        {asset.symbol === "BTC" ? <Bitcoin className="w-6 h-6 text-dark-900 dark:text-white" /> : 
                         asset.symbol === "ETH" ? <span className="text-lg">Ξ</span> :
                         asset.symbol.substring(0, 1)}
                    </div>
                    <div>
                        <div className="font-bold text-lg text-dark-900 dark:text-white">{asset.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            <span className="font-mono">{asset.balance} {asset.symbol}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <span className="text-xs bg-gray-100 dark:bg-dark-700 px-1.5 py-0.5 rounded text-gray-500 font-mono flex items-center gap-1">
                                <Wallet className="w-3 h-3" />
                                {asset.wallet}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="text-right mr-24">
                    <div className="font-bold text-lg text-dark-900 dark:text-white">{asset.value}</div>
                    <div className={`text-sm font-medium ${asset.change.startsWith("+") ? "text-primary-500" : "text-gray-400"}`}>
                        {asset.change}
                    </div>
                </div>
            </div>
            ))}
             {/* Extra row for overflow */}
             <div className="p-6 flex items-center justify-between opacity-50">
                <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-dark-700 flex items-center justify-center font-bold text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-dark-600">
                        L
                    </div>
                    <div>
                        <div className="font-bold text-lg text-dark-900 dark:text-white">Litecoin</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            <span className="font-mono">500.00 LTC</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
