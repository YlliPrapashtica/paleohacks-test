import Image from "next/image";
import { Highlight } from "@/components/atoms/Highlight";

export function HeroBanner() {
  return (
    <header className="w-full bg-brand-bannerBg">
      <div className="mx-auto max-w-[2300px] relative">
        <div className="px-4 md:px-[50px]">
          <div className="mx-auto w-full max-w-[770px]">
            <h1 className="text-center md:text-left w-full md:max-w-[min(calc(56vw-50px),calc(7vw+385px))] min-[1281px]:w-[578px] min-[1281px]:max-w-full py-[50px] md:pt-[130px] md:pb-[110px] font-heading font-bold tracking-[-0.0261em] leading-[1.093] text-[36px] md:text-[clamp(2rem,4vw,3.375rem)] min-[1281px]:text-[3.375rem]">
              <span className="text-brand-purple">Duke University Doctor:</span>
              <br />
              <span className="text-black">
                &ldquo;Do This For 3 Seconds Before You Shower To Stay{" "}
                <Highlight>&lsquo;Heart Strong&rsquo;</Highlight> at Any Age&rdquo;
              </span>
            </h1>
          </div>
        </div>
        {/* Mobile image: stacked block below text */}
        <div className="relative w-full aspect-[16/9] overflow-hidden md:hidden [clip-path:ellipse(180%_100%_at_50%_100%)]">
          <Image
            src="/images/banner-seniors.webp"
            alt="Older couple walking outdoors with yoga mats"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* md+ image: absolute right side */}
        <div className="hidden md:block absolute inset-y-0 right-0 left-[60%] min-[1281px]:left-[calc(50%+233px)] overflow-hidden [clip-path:ellipse(100%_180%_at_100%_50%)]">
          <Image
            src="/images/banner-seniors.webp"
            alt="Older couple walking outdoors with yoga mats"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
}
