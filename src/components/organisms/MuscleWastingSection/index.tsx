import { HighlightedClaim } from "@/components/molecules/HighlightedClaim";
import { ImageCallout } from "@/components/molecules/ImageCallout";

export function MuscleWastingSection() {
  return (
    <section className="px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-content space-y-8">
        <HighlightedClaim
          title={<>Rapid Muscle Wasting&hellip;</>}
          subline={
            <>
              Which can leave your heart{" "}
              <span className="italic">78% weaker</span> by the time you hit{" "}
              <span className="italic">70</span>
            </>
          }
        />
        <ImageCallout
          src="/images/ecg-doctor.webp"
          alt="Doctor reviewing an ECG printout"
          width={520}
          height={720}
          maxWidth={240}
        />
      </div>
    </section>
  );
}
