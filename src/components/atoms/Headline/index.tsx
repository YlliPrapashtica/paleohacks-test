import type { ReactNode, ElementType } from "react";

type HeadlineVariant = "banner" | "claim" | "caption";

interface HeadlineProps {
  children: ReactNode;
  as?: ElementType;
  variant?: HeadlineVariant;
  className?: string;
}

const VARIANTS: Record<HeadlineVariant, string> = {
  banner:
    "font-heading font-bold text-brand-purple leading-[1.1] text-[clamp(1.4rem,4.5vw,2.25rem)]",
  claim:
    "font-heading font-bold italic text-brand-orange leading-[1.15] text-[clamp(1.5rem,5vw,2.5rem)]",
  caption:
    "font-heading font-bold text-brand-red leading-tight text-[clamp(0.95rem,2.5vw,1.125rem)]",
};

export function Headline({
  children,
  as: Tag = "h2",
  variant = "banner",
  className = "",
}: HeadlineProps) {
  return (
    <Tag className={`${VARIANTS[variant]} ${className}`.trim()}>{children}</Tag>
  );
}
