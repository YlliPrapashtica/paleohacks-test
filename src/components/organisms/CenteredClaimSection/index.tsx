import { Highlight } from "@/components/atoms/Highlight";

export function CenteredClaimSection() {
  return (
    <section>
      <div className="mx-auto max-w-shell space-y-[35px] text-center">
        <h2 className="font-heading font-bold italic capitalize leading-[1.175] mx-auto max-w-[90%] text-[30px] md:text-[clamp(1.5rem,4vw,2.5rem)]">
          Johns Hopkins University Found That After The Age Of 50 - The Heart
          Spirals Into A State Of{" "}
          <span className="text-brand-red">Rapid Muscle Wasting&hellip;</span>
          <sup className="text-[0.45em] ml-0.5 align-super">
            <a
              href="https://www.hopkinsmedicine.org/health/heart-and-vascular"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              1
            </a>
          </sup>
        </h2>
        <p className="font-heading font-bold text-[clamp(1.25rem,3vw,1.875rem)] leading-[1.566]">
          <Highlight className="!px-2 !py-[11px]">
            Which can leave your heart 78% <em>weaker</em> by the time you hit{" "}
            <em>70</em>
          </Highlight>
        </p>
      </div>
    </section>
  );
}
