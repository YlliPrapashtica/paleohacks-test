import { HeroSection } from "@/components/organisms/HeroSection";
import { ProblemSection } from "@/components/organisms/ProblemSection";
import { MuscleWastingSection } from "@/components/organisms/MuscleWastingSection";
import { ClosingSection } from "@/components/organisms/ClosingSection";

export function LandingTemplate() {
  return (
    <main className="min-h-dvh bg-black text-white">
      <HeroSection />
      <ProblemSection />
      <MuscleWastingSection />
      <ClosingSection />
    </main>
  );
}
