"use client";

import { Globe2, Building2, Scale } from "lucide-react";
import { GlobalMapGraphic } from "@/components/graphics/about/global-map";

const regions = [
  {
    name: "United Kingdom",
    description: "Strategic headquarters and regulated operations.",
  },
  {
    name: "European Union",
    description: "Full virtual currency registration and compliance.",
  },
  {
    name: "UAE",
    description: "Gateway to Middle East and Asian markets.",
  },
];

export const GlobalPresence = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-dark-800/50 border-y border-gray-100 dark:border-dark-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-organetto text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-6">
              Global Reach, <br />
              <span className="text-primary-500">Local Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We operate as a structured group of regulated and non-regulated entities, designed to provide maximum flexibility while maintaining the highest standards of compliance. From London to Dubai, our footprint ensures you can transact across borders with ease.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                  <Globe2 className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-900 dark:text-white">Multi-Jurisdictional</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Operating across Europe, Middle East, Africa, Asia, and Latin America.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-900 dark:text-white">Regulated Structure</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">A robust framework of licensed entities and strategic partnerships.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <GlobalMapGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};
