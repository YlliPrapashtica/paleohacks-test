import { ArticleBlock } from "@/components/molecules/ArticleBlock";

export function ClosingSection({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-shell">
        <ArticleBlock
          imageSide="right"
          image={{
            src: "/images/couple-smiling.webp",
            alt: "Older couple smiling together outdoors",
            width: 520,
            height: 620,
            maxWidth: 317,
            aspectRatio: "317/378",
          }}
        >
          <p className="font-bold">
            Embrace this 3-second ritual, try it for 30 days&hellip;
          </p>
          <p className="font-bold">
            &hellip;and wonder what it was ever like to worry about your
            heart&hellip;
          </p>
          <p className="font-bold">
            <em>Regardless</em> of your genes, your current diet, or your age.
          </p>
          <p>
            Based on brand new research from Johns Hopkins and{" "}
            <em>The American College of Cardiology</em>&hellip;
            <sup className="text-xs">
              <a
                href="https://www.hopkinsmedicine.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                3
              </a>{" "}
              <a
                href="https://www.acc.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                4
              </a>
            </sup>
          </p>
          <p>
            Everything you&rsquo;ve been told about keeping your heart healthy
            is backwards.
          </p>
        </ArticleBlock>
      </div>
    </section>
  );
}
