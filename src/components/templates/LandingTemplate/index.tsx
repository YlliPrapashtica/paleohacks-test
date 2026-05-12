import { HeroSection } from "@/components/organisms/HeroSection";
import { ProblemSection } from "@/components/organisms/ProblemSection";
import { CenteredClaimSection } from "@/components/organisms/CenteredClaimSection";
import { MuscleWastingSection } from "@/components/organisms/MuscleWastingSection";
import { ClosingSection } from "@/components/organisms/ClosingSection";
import { FinalHeadlineSection } from "@/components/organisms/FinalHeadlineSection";

export function LandingTemplate() {
  return (
    <main className="min-h-dvh bg-white text-black">
      <HeroSection />
      <div className="px-4 md:px-[50px]">
        <div className="mx-auto w-full max-w-[770px] space-y-[50px] py-12">
          <ProblemSection />
          <CenteredClaimSection />
          <MuscleWastingSection className="!mt-[40px]" />
          <ClosingSection className="!mt-[16px]" />
          <FinalHeadlineSection />
        </div>
      </div>
    </main>
  );
}
