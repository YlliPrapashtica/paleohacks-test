import Image from "next/image";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  rounded?: boolean;
}

export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  rounded = false,
}: ResponsiveImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={`${rounded ? "rounded-[25px]" : ""} ${className}`.trim()}
    />
  );
}
