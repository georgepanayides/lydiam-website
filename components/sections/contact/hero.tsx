"use client";

import { FadeIn } from "@/components/ui/motion";
import { ContactGraphic } from "@/components/graphics/contact/contact-graphic";
import Image from "next/image";

export const ContactHero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white dark:bg-dark-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Gradient Blob Background */}
      <div className="absolute top-[-20%] right-0 w-[800px] h-[800px] opacity-10 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 [mask-image:radial-gradient(closest-side,black,transparent)]">
            <Image 
                src="/assets/gradient-bg/Gradient.jpg" 
                alt="Gradient" 
                fill
                className="object-cover"
                priority
            />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h1 className="font-organetto text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-6">
              Let&apos;s Start <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                The Conversation
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-lg">
              Whether you&apos;re looking for a strategic partnership or a bespoke financial solution, our global team is ready to assist.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="relative">
             <ContactGraphic />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
