import { ImageCallout } from "@/components/molecules/ImageCallout";
import { Paragraph } from "@/components/atoms/Paragraph";

export function ProblemSection() {
  return (
    <section className="px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-content space-y-5">
        <ImageCallout
          src="/images/heart-pain.webp"
          alt="Person clutching chest with heart-rate overlay"
          width={640}
          height={960}
          maxWidth={300}
          inset={{
            src: "/images/hospital-inset.webp",
            alt: "Hospital emergency room scene",
            width: 320,
            height: 200,
          }}
        />
        <Paragraph variant="caption">the #1 problem</Paragraph>
      </div>
    </section>
  );
}
