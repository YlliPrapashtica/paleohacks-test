import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";

interface InsetImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ImageCalloutProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Optional smaller image overlaid at bottom-left (e.g. hospital inset on heart-pain photo). */
  inset?: InsetImage;
  /** Max rendered width in px; image scales down on smaller viewports. */
  maxWidth?: number;
  className?: string;
}

export function ImageCallout({
  src,
  alt,
  width,
  height,
  inset,
  maxWidth = 320,
  className = "",
}: ImageCalloutProps) {
  return (
    <figure
      className={`relative mx-auto ${className}`.trim()}
      style={{ maxWidth: `${maxWidth}px` }}
    >
      <ResponsiveImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        rounded
        sizes={`(max-width: 768px) 70vw, ${maxWidth}px`}
        className="w-full shadow-lg"
      />
      {inset && (
        <div className="absolute left-[8%] bottom-[6%] w-[42%] rounded-lg overflow-hidden ring-2 ring-white shadow-xl">
          <ResponsiveImage
            src={inset.src}
            alt={inset.alt}
            width={inset.width}
            height={inset.height}
            sizes="200px"
            className="w-full"
          />
        </div>
      )}
    </figure>
  );
}
