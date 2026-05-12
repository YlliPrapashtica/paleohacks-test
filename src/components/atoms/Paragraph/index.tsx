import type { ReactNode } from "react";

type ParagraphVariant = "body" | "caption";

interface ParagraphProps {
  children: ReactNode;
  variant?: ParagraphVariant;
  className?: string;
}

const VARIANTS: Record<ParagraphVariant, string> = {
  body: "font-body text-base leading-relaxed text-black",
  caption: "font-body text-sm font-bold text-brand-red text-center",
};

export function Paragraph({
  children,
  variant = "body",
  className = "",
}: ParagraphProps) {
  return (
    <p className={`${VARIANTS[variant]} ${className}`.trim()}>{children}</p>
  );
}
