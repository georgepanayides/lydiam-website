import { SolutionsHero } from "@/components/sections/solutions/hero";
import { FXTreasury } from "@/components/sections/solutions/fx-treasury";
import { Payments } from "@/components/sections/solutions/payments";
import { Crypto } from "@/components/sections/solutions/crypto";
import { Advisory } from "@/components/sections/solutions/advisory";
import { Commodities } from "@/components/sections/solutions/commodities";
import { CTA } from "@/components/sections/home/cta";

export default function SolutionsPage() {
  return (
    <div className="flex flex-col w-full">
      <SolutionsHero />
      <FXTreasury />
      <Payments />
      {/* <Crypto /> */}
      <Advisory />
      <Commodities />
      <CTA />
    </div>
  );
}
