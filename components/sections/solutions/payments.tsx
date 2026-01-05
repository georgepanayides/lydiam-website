"use client";

import { FadeIn } from "@/components/ui/motion";
import { CreditCard, Link as LinkIcon, Smartphone, Wifi } from "lucide-react";
import { PaymentsGraphic } from "@/components/graphics/payments-graphic";
import Image from "next/image";

export const Payments = () => {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="order-2 lg:order-1">
            <h2 className="font-organetto text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-6">
              Payments & <br />
              <span className="text-primary-500">Cards</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Accept payments globally and settle instantly. From card acquiring to payment links, 
              we streamline your collections process.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="p-4 border border-gray-100 dark:border-dark-700 rounded-xl hover:border-primary-500/50 transition-colors">
                    <CreditCard className="w-8 h-8 text-primary-500 mb-3" />
                    <h3 className="font-bold text-dark-900 dark:text-white mb-2">Card Acquiring</h3>
                    <p className="text-sm text-gray-500">Seamlessly accept Visa, Mastercard, and Amex payments.</p>
                </div>
                <div className="p-4 border border-gray-100 dark:border-dark-700 rounded-xl hover:border-primary-500/50 transition-colors">
                    <LinkIcon className="w-8 h-8 text-primary-500 mb-3" />
                    <h3 className="font-bold text-dark-900 dark:text-white mb-2">Payment Links</h3>
                    <p className="text-sm text-gray-500">Generate secure links for instant client collections.</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-6 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mt-8">
                <Image src="/assets/images/payment-methods/light/visa.svg" alt="Visa" width={60} height={20} className="h-8 w-auto" />
                <Image src="/assets/images/payment-methods/light/mastercard.svg" alt="Mastercard" width={60} height={40} className="h-8 w-auto" />
                <Image src="/assets/images/payment-methods/light/american-express.svg" alt="American Express" width={60} height={40} className="h-8 w-auto" />
                <Image src="/assets/images/payment-methods/light/apple-pay.svg" alt="Apple Pay" width={60} height={25} className="h-8 w-auto" />
                <Image src="/assets/images/payment-methods/light/google-pay.svg" alt="Google Pay" width={60} height={25} className="h-8 w-auto" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="order-1 lg:order-2">
             <div className="relative w-full h-[500px] flex items-center justify-center">
                <div className="scale-110 md:scale-125 translate-x-12 md:translate-x-24">
                    <PaymentsGraphic />
                </div>
             </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

