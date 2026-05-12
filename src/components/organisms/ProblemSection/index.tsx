import { ArticleBlock } from "@/components/molecules/ArticleBlock";

export function ProblemSection() {
  return (
    <section>
      <div className="mx-auto max-w-shell">
        <ArticleBlock
          imageSide="right"
          image={{
            src: "/images/heart-pain.webp",
            alt: "Person clutching chest with heart-rate overlay and hospital inset",
            width: 640,
            height: 960,
            maxWidth: 317,
            aspectRatio: "317/534",
          }}
          overlay={{
            src: "/images/hospital-interior.webp",
            alt: "Hospital staff rushing a stretcher down a corridor",
            width: 1600,
            height: 1067,
          }}
        >
          <p>The first sign of a heart attack is almost never chest pain.</p>
          <p>You don&rsquo;t actually realize your heart is dying&hellip;</p>
          <p>Until it stops.</p>
          <p className="font-bold">
            Every 33 seconds another person is stolen from their loved ones.
          </p>
          <p>
            First comes the strange fatigue and shortness of breath&hellip;
          </p>
          <p>The heaviness in your legs&hellip;</p>
          <p>The cold feet&hellip; dry cough&hellip;</p>
          <p>
            And you think it&rsquo;s just age - but it&rsquo;s actually your
            heart&hellip;
          </p>
          <p>Getting weaker&hellip; and weaker&hellip; by the day.</p>
          <p>
            My patients rightly fret about their blood pressure &amp;
            cholesterol numbers&hellip;
          </p>
          <p>
            But they&rsquo;re shocked when I reveal{" "}
            <span className="text-brand-red font-bold">the #1 problem</span>{" "}
            behind all those symptoms:
          </p>
          <p>A weak heart.</p>
        </ArticleBlock>
      </div>
    </section>
  );
}
