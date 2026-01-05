import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroGraphic } from "@/components/graphics/hero-graphic";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-[auto] lg:min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-dark-900 pt-20 pb-12 lg:py-0">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Animated Grid Stars */}
      <StaggerContainer delay={0.4} staggerChildren={0.15} className="absolute inset-x-0 top-0 h-[300px] lg:h-full lg:inset-0 pointer-events-none">
        <StaggerItem className="absolute top-[15%] left-[10%] lg:top-[30%] lg:right-[45%] lg:left-auto">
          <div className="relative w-3 h-3 animate-pulse">
            <Image 
              src="/assets/logos/icons/Logo_Star Dark Green.svg" 
              alt="Star" 
              fill
              className="object-contain drop-shadow-[0_0_8px_rgba(100,175,132,0.8)] dark:hidden"
            />
            <Image 
              src="/assets/logos/icons/Logo_Star Cool White.svg" 
              alt="Star" 
              fill
              className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hidden dark:block"
            />
          </div>
        </StaggerItem>
        <StaggerItem className="absolute top-[5%] right-[15%] lg:top-[10%] lg:right-[35%]">
          <div className="relative w-6 h-6 animate-pulse delay-300">
            <Image 
              src="/assets/logos/icons/Logo_Star Dark Green.svg" 
              alt="Star" 
              fill
              className="object-contain drop-shadow-[0_0_8px_rgba(178,206,142,0.8)] dark:hidden"
            />
            <Image 
              src="/assets/logos/icons/Logo_Star Cool White.svg" 
              alt="Star" 
              fill
              className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hidden dark:block"
            />
          </div>
        </StaggerItem>
        <StaggerItem className="absolute top-[25%] right-[5%] lg:top-[15%] lg:right-[20%]">
          <div className="relative w-4 h-4 animate-pulse delay-700">
            <Image 
              src="/assets/logos/icons/Logo_Star Dark Green.svg" 
              alt="Star" 
              fill
              className="object-contain drop-shadow-[0_0_8px_rgba(100,175,132,0.8)] dark:hidden"
            />
            <Image 
              src="/assets/logos/icons/Logo_Star Cool White.svg" 
              alt="Star" 
              fill
              className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hidden dark:block"
            />
          </div>
        </StaggerItem>
        <StaggerItem className="absolute top-[35%] left-[20%] lg:top-[45%] lg:right-[42%] lg:left-auto">
           <div className="relative w-5 h-5 animate-pulse delay-500">
            <Image 
              src="/assets/logos/icons/Logo_Star Dark Green.svg" 
              alt="Star" 
              fill
              className="object-contain drop-shadow-[0_0_8px_rgba(119,186,128,0.8)] dark:hidden"
            />
            <Image 
              src="/assets/logos/icons/Logo_Star Cool White.svg" 
              alt="Star" 
              fill
              className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hidden dark:block"
            />
          </div>
        </StaggerItem>
      </StaggerContainer>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <StaggerContainer className="relative z-50 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 order-2 lg:order-1 -mt-24 md:mt-0">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                <span className="text-xs font-medium text-primary-700 dark:text-primary-300 uppercase tracking-wide">
                  The Future of Treasury
                </span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="font-organetto text-5xl md:text-6xl lg:text-7xl font-bold text-dark-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
                Limitless <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                  Financial Power
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                One platform for Global FX, Crypto, Payments & Advisory. 
                Experience the speed and precision of a modern financial super-app.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="gradient" size="lg" className="w-full sm:w-auto group">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/solutions" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    View Solutions
                  </Button>
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  <span>Regulated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  <span>Global</span>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Right Column: Graphic */}
          <FadeIn direction="left" delay={0.2} className="relative block mt-0 lg:mt-0 order-1 lg:order-2">
             <div className="relative h-[350px] md:h-auto flex items-center justify-center -my-6 md:my-0 overflow-visible">
                <div className="scale-[0.85] md:scale-100 origin-top md:origin-center mt-8 md:mt-0">
                   <HeroGraphic className="h-[400px] md:h-[600px]" />
                </div>
             </div>
             {/* Fade out mask for mobile */}
             <div className="absolute inset-x-0 -bottom-30 h-80 z-40 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-dark-900 dark:via-dark-900/80 md:hidden" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
