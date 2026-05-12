import type { ReactNode } from "react";
import { ResponsiveImage } from "@/components/atoms/ResponsiveImage";

interface ArticleBlockProps {
  imageSide: "left" | "right";
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    maxWidth?: number;
    aspectRatio?: string;
  };
  overlay?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  children: ReactNode;
  className?: string;
  alignImageMobile?: "center" | "start";
}

/**
 * Text-wraps-image article block (CSS float). Image floats to the requested
 * side and body copy flows around it, exactly like Word's "Wrap Text > Square".
 */
export function ArticleBlock({
  imageSide,
  image,
  overlay,
  children,
  className = "",
  alignImageMobile = "center",
}: ArticleBlockProps) {
  const maxW = image.maxWidth ?? 320;
  const floatClass =
    imageSide === "left"
      ? "md:float-left md:mr-[40px]"
      : "md:float-right md:ml-[40px]";

  const figureClassName = `${floatClass} ${
    alignImageMobile === "center" ? "mx-auto" : ""
  } mt-5 mb-0 w-full min-[470px]:w-[75%] md:mx-0 md:mt-0 md:mb-3 md:w-[42%] ${
    image.aspectRatio || overlay ? "relative" : ""
  }`;

  const figureStyle = {
    maxWidth: `${maxW}px`,
    ...(image.aspectRatio ? { aspectRatio: image.aspectRatio } : {}),
  };

  const figureContents = (
    <>
      {image.aspectRatio ? (
        <div className="absolute inset-0 overflow-hidden rounded-[25px] shadow-md">
          <ResponsiveImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={`(max-width: 640px) 55vw, ${maxW}px`}
            className="w-full h-full object-cover object-[80%_center]"
          />
        </div>
      ) : (
        <ResponsiveImage
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={`(max-width: 640px) 55vw, ${maxW}px`}
          rounded
          className="w-full shadow-md"
        />
      )}
      {overlay && (
        <ResponsiveImage
          src={overlay.src}
          alt={overlay.alt}
          width={overlay.width}
          height={overlay.height}
          sizes={`(max-width: 640px) 35vw, ${Math.round(maxW * 0.7)}px`}
          className="absolute left-0 -bottom-[10px] w-[70%] h-auto rotate-3 rounded-[25px] border-[6px] border-white shadow-lg"
        />
      )}
    </>
  );

  return (
    <div
      className={`font-body text-center md:text-left text-[clamp(1rem,2vw,1.25rem)] leading-[24px] md:leading-[32px] [&_p]:mb-4 [&_p:last-of-type]:mb-0 ${className}`.trim()}
    >
      {/* Desktop: figure first so float wraps text. Hidden on mobile. */}
      <figure
        className={`hidden md:block ${figureClassName}`}
        style={figureStyle}
      >
        {figureContents}
      </figure>
      {children}
      {/* Mobile: figure after text. Hidden on desktop. */}
      <figure
        className={`md:hidden ${figureClassName}`}
        style={figureStyle}
      >
        {figureContents}
      </figure>
      <div className="clear-both" />
    </div>
  );
}
