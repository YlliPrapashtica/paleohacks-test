import { ArticleBlock } from "@/components/molecules/ArticleBlock";

export function MuscleWastingSection({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-shell">
        <ArticleBlock
          imageSide="left"
          image={{
            src: "/images/ecg-doctor.webp",
            alt: "Doctor reviewing an ECG printout",
            width: 520,
            height: 720,
            maxWidth: 317,
            aspectRatio: "317/408",
          }}
        >
          <p>And here&rsquo;s what&rsquo;s truly terrifying:</p>
          <p>
            No standard EKG test&hellip; blood work panel&hellip; or yearly
            physical&hellip;
          </p>
          <p>
            Can detect the likely culprit <em>behind</em> a weak heart:
          </p>
          <p>A nutrient deficiency that&rsquo;s so critical&hellip;</p>
          <p>
            <em>The American College of Cardiology</em> found it can raise the
            risk of heart failure&hellip; and early death.
            <sup className="text-xs">
              <a
                href="https://www.acc.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                2
              </a>
            </sup>
          </p>
          <p>
            When I share these alarming stats with my patients, they always
            ask:
          </p>
          <p className="font-bold italic">
            &ldquo;Dr. Rick - what should I do to keep my heart strong at my
            age?&rdquo;
          </p>
          <p>
            And I tell them: it&rsquo;s not about exercising like an
            Olympian&hellip;
          </p>
          <p>Or eating like a rabbit&hellip;</p>
          <p>
            Today, I&rsquo;ll show you a simple pre-shower technique to stay
            &ldquo;heart strong&rdquo; at any age.
          </p>
        </ArticleBlock>
      </div>
    </section>
  );
}
