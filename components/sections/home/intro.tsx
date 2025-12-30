
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { IntroSlider } from "@/components/sections/home/intro-slider";

export const Intro = () => {
  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-dark-900 overflow-hidden">
      {/* Subtle Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <Image 
          src="/assets/gradient-bg/Gradient.jpg" 
          alt="Background Texture" 
          fill 
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <StaggerContainer className="max-w-4xl mx-auto text-center mb-20">
          <StaggerItem>
            <h2 className="font-organetto text-3xl md:text-5xl font-bold text-dark-900 dark:text-white mb-8 leading-tight">
              One Group. One Platform. <br />
              <span className="text-primary-500">
                Complete Financial Capability.
              </span>
            </h2>
          </StaggerItem>
          
          <StaggerItem>
            <div className="space-y-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Lydiam Group is an international financial services and advisory group supporting corporates, institutions, high-net-worth individuals, family offices, and professionals.
              </p>
              <p className="font-medium text-dark-900 dark:text-white">
                We simplify global finance by bringing everything together under one onboarding, one relationship, and one platform.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Interactive Slider */}
        <FadeIn delay={0.4} fullWidth>
          <IntroSlider />
        </FadeIn>
          
        <div className="max-w-4xl mx-auto text-center mt-20">
          <div className="pt-12 border-t border-gray-100 dark:border-dark-800">
            <div className="flex flex-col gap-2">
            <p className="text-sm font-bold tracking-[0.2em] text-gray-400 dark:text-gray-500 uppercase">
              Operating across
            </p>
            <div className="flex gap-3 font-organetto text-dark-300 justify-center text-xs items-center">
            <p>UK</p>
            <Image
            src={'assets/logos/icons/Logo_Star Dark Green.svg'}
            alt=""
            width={5}
            height={5}
            className="w-2.5 h-2.5 object-cover"
            />
            <p>Europe</p>
                        <Image
            src={'assets/logos/icons/Logo_Star Dark Green.svg'}
            alt=""
            width={5}
            height={5}
            className="w-2.5 h-2.5 object-cover"
            />
            <p>Middle East</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
