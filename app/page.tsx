import { Hero } from "@/components/sections/home/hero";
import { Intro } from "@/components/sections/home/intro";
import { AtAGlance } from "@/components/sections/home/at-a-glance";
import { ProblemSolution } from "@/components/sections/home/problem-solution";
import { WhyLydiam } from "@/components/sections/home/why-lydiam";
import { CTA } from "@/components/sections/home/cta";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Intro />
      <AtAGlance />
      <ProblemSolution />
      <WhyLydiam />
      <CTA />
    </div>
  );
}
