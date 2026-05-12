import { ImageCallout } from "@/components/molecules/ImageCallout";

export function ClosingSection() {
  return (
    <section className="px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-content">
        <ImageCallout
          src="/images/couple-smiling.webp"
          alt="Older couple smiling together outdoors"
          width={520}
          height={620}
          maxWidth={260}
        />
      </div>
    </section>
  );
}
