"use client";

import { FadeIn } from "@/components/ui/motion";

export const RegulatoryNote = () => {
  return (
    <section className="py-12 bg-white dark:bg-dark-900 border-t border-gray-100 dark:border-dark-800">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Lydiam Group’s payment and foreign currency exchange services are provided by Global Currency Exchange Network Ltd T/A GC Partners. Global Currency Exchange Network Ltd is authorised by the FCA under the Payment Services Regulations, 2017 (FRN: 504346). Registered as a Money Services Business, regulated by HM Revenue & Customs (“HMRC”) under the Money Laundering Regulations 2017. (Registration number is 12137189). Registered in England and Wales. Company number 04675786. Registered Office 3rd Floor 100 New Bond Street, London, England, W1S 1SP.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
