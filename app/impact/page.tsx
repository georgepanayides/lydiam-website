import { ImpactHero } from "@/components/sections/impact/hero";
import { Metrics } from "@/components/sections/impact/metrics";
import { Testimonials } from "@/components/sections/impact/testimonials";
import { Partnerships } from "@/components/sections/impact/partnerships";
import { TrustSecurity } from "@/components/sections/impact/trust-security";
import { CTA as HomeCTA } from "@/components/sections/home/cta";

export const metadata = {
  title: "Impact | Lydiam",
  description: "Our numbers, your confidence. See how Lydiam is powering the future of finance with over $1.2B in transaction volume.",
};

export default function ImpactPage() {
  return (
    <main>
      <ImpactHero />
      <Metrics />
      <Testimonials />
      <Partnerships />
      <TrustSecurity />
      <HomeCTA />
    </main>
  );
}
