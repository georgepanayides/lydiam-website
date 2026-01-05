"use client";

import { FadeIn } from "@/components/ui/motion";
import { Bitcoin, Lock, Wallet, BarChart3 } from "lucide-react";

export const Crypto = () => {
  return (
    <section className="py-20 bg-dark-900 text-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <h2 className="font-organetto text-3xl md:text-4xl font-bold mb-6">
              Crypto & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
                Digital Assets
              </span>
            </h2>
            <p className="text-lg text-gray-400">
              Institutional-grade access to the digital asset economy. 
              Secure, compliant, and fully integrated with your fiat operations.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {[
                {
                    icon: <BarChart3 className="w-6 h-6 text-primary-400" />,
                    title: "Deep Liquidity",
                    description: "Access institutional liquidity pools for best execution on large block trades."
                },
                {
                    icon: <ArrowRightLeft className="w-6 h-6 text-primary-400" />,
                    title: "On/Off Ramps",
                    description: "Seamless conversion between fiat currencies and major digital assets."
                },
                {
                    icon: <Wallet className="w-6 h-6 text-primary-400" />,
                    title: "Segregated Wallets",
                    description: "Client assets are held in segregated wallets, never commingled."
                },
                {
                    icon: <Lock className="w-6 h-6 text-primary-400" />,
                    title: "Institutional Custody",
                    description: "Bank-grade security protocols and regulated custody partners."
                }
            ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors h-full">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                            {item.icon}
                        </div>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
};

import { ArrowRightLeft } from "lucide-react";
