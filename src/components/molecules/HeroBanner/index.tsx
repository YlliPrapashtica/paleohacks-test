import { Highlight } from "@/components/atoms/Highlight";
import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";

export function HeroBanner() {
  return (
    <header className="w-full bg-brand-bannerBg">
      <div className="mx-auto max-w-shell px-4 py-3 sm:py-4 flex items-center gap-3 sm:gap-6">
        <h1 className="flex-1 min-w-0 font-heading font-bold leading-[1.15] text-[clamp(1.1rem,3.6vw,2rem)]">
          <span className="text-brand-purple">Duke University Doctor:</span>
          <br />
          <span className="text-black">
            &ldquo;Do This For 3 Seconds Before You Shower To Stay{" "}
            <Highlight>&lsquo;Heart Strong&rsquo;</Highlight> at Any Age&rdquo;
          </span>
        </h1>
        <div className="shrink-0 w-[38%] max-w-[280px]">
          <ResponsiveImage
            src="/images/banner-seniors.webp"
            alt="Older couple walking outdoors with yoga mats"
            width={560}
            height={420}
            priority
            sizes="(max-width: 768px) 38vw, 280px"
          />
        </div>
      </div>
    </header>
  );
}
