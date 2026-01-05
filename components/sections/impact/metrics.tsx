"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { ShieldCheck, Building2, Users, Clock, Globe, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const Counter = ({ value, prefix = "", suffix = "", decimals = 0 }: { value: number | string, prefix?: string, suffix?: string, decimals?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 60 });
  const [display, setDisplay] = useState<string | number>(0);

  useEffect(() => {
    if (typeof value === 'number' && inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    if (typeof value === 'number') {
      return springValue.on("change", (latest) => {
        setDisplay(latest.toFixed(decimals));
      });
    }
  }, [springValue, decimals, value]);

  return <span ref={ref}>{prefix}{typeof value === 'number' ? display : value}{suffix}</span>;
};

export const Metrics = () => {
  const metrics = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary-500" />,
      value: 1.2,
      prefix: "$",
      suffix: "B+",
      decimals: 1,
      label: "Processed Securely",
      description: "Across traditional and digital finance."
    },
    {
      icon: <Building2 className="w-6 h-6 text-primary-500" />,
      value: 75,
      suffix: "+",
      label: "Institutions",
      description: "Trust Lydiam for secure, large-scale financial solutions."
    },
    {
      icon: <Users className="w-6 h-6 text-primary-500" />,
      value: 200,
      suffix: "+",
      label: "Retail Clients",
      description: "Served globally with seamless, private finance in FY24."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-500" />,
      value: "24/7",
      label: "Availability",
      description: "Our platform runs 24/7 — your transactions never stop."
    },
    {
      icon: <Globe className="w-6 h-6 text-primary-500" />,
      value: 140,
      suffix: "+",
      label: "Currencies & Assets",
      description: "Freedom to move your way."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-primary-500" />,
      value: 99.9,
      suffix: "%",
      decimals: 1,
      label: "Success Rate",
      description: "Secure, compliant, and reliable."
    }
  ];

  const triangleShades = [
    "bg-primary-300/20",
    "bg-primary-400/20",
    "bg-primary-500/20",
    "bg-primary-600/20",
    "bg-primary-700/20",
    "bg-primary-800/20"
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-800/50 relative overflow-hidden">
       {/* Ambient Glow & Grid */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none">
          <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.primary.500/.1)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.primary.500/.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
       </div>

      <div className="container mx-auto px-4 relative z-10">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <StaggerItem key={index} className="group relative bg-white dark:bg-dark-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-dark-700 transition-hover overflow-hidden">
              {/* Triangle Shape */}
              <div className={`absolute -bottom-24 -right-12 w-32 h-64 ${triangleShades[index % triangleShades.length]} rotate-45 transform group-hover:scale-110 transition-transform duration-500 z-0`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {metric.icon}
                </div>
                <h3 className="text-4xl font-bold text-primary-700 font-organetto mb-2">
                    <Counter 
                        value={metric.value} 
                        prefix={metric.prefix} 
                        suffix={metric.suffix} 
                        decimals={metric.decimals} 
                    />
                </h3>
                <p className="text-lg font-bold text-dark-900 dark:text-white mb-2">{metric.label}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {metric.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
