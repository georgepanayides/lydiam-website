import { FadeIn } from "@/components/ui/motion";
import Image from "next/image";

export const ImpactHero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white dark:bg-dark-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Gradient Blob Background */}
      <div className="absolute top-[-70%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] opacity-30 dark:opacity-30 pointer-events-none">
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
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="font-organetto text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-6">
              Our Numbers, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                Your Confidence
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-dark-900 dark:text-white mb-6">
              We turn performance into proof.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Lydiam isn&apos;t just a platform — it&apos;s a high-performance engine trusted by clients across industries. 
              From rapid execution to global reach, our numbers speak to the strength behind every transaction.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
