import { PlatformHero } from "@/components/sections/platform/hero";
import { UnifiedTreasury } from "@/components/sections/platform/unified-treasury";
import { GlobalExecution } from "@/components/sections/platform/global-execution";
import { DigitalAssets } from "@/components/sections/platform/digital-assets";
import { MobileApp } from "@/components/sections/platform/mobile-app";
import { CTA as HomeCTA } from "@/components/sections/home/cta";

export const metadata = {
  title: "Platform | Lydiam",
  description: "One platform for all your global financial needs. Manage named accounts, FX, crypto, and payments in a single interface.",
};

export default function PlatformPage() {
  return (
    <main>
      <PlatformHero />
      <UnifiedTreasury />
      <GlobalExecution />
      <DigitalAssets />
      <MobileApp />
      <HomeCTA />
    </main>
  );
}
