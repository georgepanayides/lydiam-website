

import { Copy, MoreVertical } from "lucide-react";

export const TreasuryDetailGraphic = () => {
  const accounts = [
    { currency: "GBP", balance: "£1,240,500.00", type: "FPS / CHAPS", iban: "GB82...4921" },
    { currency: "USD", balance: "$850,000.00", type: "ACH / SWIFT", iban: "US44...9920" },
    { currency: "EUR", balance: "€2,100,000.00", type: "SEPA / SWIFT", iban: "DE21...1102" },
    { currency: "CAD", balance: "C$420,000.00", type: "SWIFT", iban: "CA99...2201" },
    { currency: "AUD", balance: "A$310,000.00", type: "SWIFT", iban: "AU12...8833" },
  ];

  return (
    <div className="w-full">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
      
      {/* The Card - Positioned to overflow right and bottom */}
      <div className="absolute -top-40 left-8 w-[120%] bg-white dark:bg-dark-800 rounded-tl-xl shadow-2xl border-l border-t border-gray-200 dark:border-dark-700 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 dark:border-dark-700 flex justify-between items-center bg-white dark:bg-dark-800 sticky top-0 z-10">
            <div>
                <h3 className="font-bold text-xl text-dark-900 dark:text-white">Your Accounts</h3>
                <p className="text-sm text-gray-500">Manage your multi-currency treasury</p>
            </div>
            <div className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 text-xs font-medium mr-24">
                Named IBANs
            </div>
        </div>

        {/* List */}
        <div className="divide-y divide-gray-100 dark:divide-dark-700">
            {accounts.map((acc, i) => (
            <div key={i} className="p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-dark-700/50 transition-colors group">
                <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-dark-700 flex items-center justify-center font-bold text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-dark-600">
                        {acc.currency}
                    </div>
                    <div>
                        <div className="font-bold text-lg text-dark-900 dark:text-white">{acc.balance}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            {acc.type}
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <span className="text-xs bg-gray-100 dark:bg-dark-700 px-1.5 py-0.5 rounded text-gray-500 font-mono">{acc.iban}</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity mr-24">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-600 rounded-lg text-gray-400 hover:text-primary-500 transition-colors">
                        <Copy className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-600 rounded-lg text-gray-400 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                    </button>
                </div>
            </div>
            ))}
            {/* Extra rows to ensure overflow */}
             <div className="p-6 flex items-center justify-between opacity-50">
                <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-dark-700 flex items-center justify-center font-bold text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-dark-600">
                        SGD
                    </div>
                    <div>
                        <div className="font-bold text-lg text-dark-900 dark:text-white">S$120,000.00</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            FAST
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <span className="text-xs bg-gray-100 dark:bg-dark-700 px-1.5 py-0.5 rounded text-gray-500 font-mono">SG11...9922</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
