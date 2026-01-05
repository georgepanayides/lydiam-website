import { AboutHero } from "@/components/sections/about/hero";
import { Mission } from "@/components/sections/about/mission";
import { GlobalPresence } from "@/components/sections/about/global-presence";
import { PartnerNetwork } from "@/components/sections/about/partner-network";
import { WhoWeServe } from "@/components/sections/about/who-we-serve";
import { Compliance } from "@/components/sections/about/compliance";
import { CTA } from "@/components/sections/home/cta";

export const metadata = {
  title: "About Us | Lydiam",
  description: "Lydiam simplifies global finance by bridging the gap between traditional banking and the digital asset economy.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Mission />
      <GlobalPresence />
      <PartnerNetwork />
      <WhoWeServe />
      <Compliance />
      <CTA />
    </main>
  );
}
