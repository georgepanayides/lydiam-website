"use client";

import { FadeIn } from "@/components/ui/motion";
import { Building, User, Users, Briefcase, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const clients = [
  {
    icon: Building,
    title: "Corporates",
    description: "Streamlining cross-border payments and treasury operations.",
  },
  {
    icon: User,
    title: "HNWIs",
    description: "Bespoke solutions for wealth preservation and transfer.",
  },
  {
    icon: Users,
    title: "Family Offices",
    description: "Multi-generational wealth management infrastructure.",
  },
  {
    icon: Briefcase,
    title: "Institutions",
    description: "Robust rails for large-scale financial flows.",
  },
];

export const WhoWeServe = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-dark-950 relative overflow-hidden">
       {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(300deg,black_40%,transparent_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Sticky Content */}
          <div className="lg:sticky lg:top-32">
            <FadeIn>
              <h2 className="font-organetto text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-8">
                Who We <span className="text-primary-500">Serve</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Our clients demand more than off-the-shelf solutions. They require precision, privacy, and performance.
              </p>
              <div className="relative pl-8">
                <div className="absolute left-0 top-3 w-5 h-5">
                  <Image 
                    src="/assets/logos/icons/Logo_Star Black.svg" 
                    alt="Star" 
                    width={20} 
                    height={20}
                    className="dark:invert opacity-80"
                  />
                </div>
                <p className="text-lg text-dark-800 dark:text-gray-200 italic font-medium">
                  &quot;Whether you are a multinational corporation or a private individual, our commitment remains the same: to provide the infrastructure you need to succeed.&quot;
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Architectural Grid */}
          <FadeIn>
            <div className="grid sm:grid-cols-2 bg-gray-200 dark:bg-dark-800 gap-[1px] border border-gray-200 dark:border-dark-800 rounded-3xl overflow-hidden shadow-2xl">
                {clients.map((client, index) => (
                  <div key={index} className="group relative bg-white dark:bg-dark-900 p-8 hover:bg-gray-50 dark:hover:bg-dark-800/50 transition-colors duration-300">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="w-5 h-5 text-primary-500" />
                    </div>
                    
                    <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-dark-800 flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                        <client.icon size={24} />
                    </div>
                    
                    <h3 className="font-bold text-xl text-dark-900 dark:text-white mb-3">
                        {client.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {client.description}
                    </p>
                  </div>
                ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
