import type { ReactNode } from "react";

type HighlightVariant = "yellow" | "yellowOnDark";

interface HighlightProps {
  children: ReactNode;
  variant?: HighlightVariant;
  className?: string;
}

const VARIANTS: Record<HighlightVariant, string> = {
  yellow: "bg-brand-yellow text-brand-redDeep",
  yellowOnDark: "bg-brand-yellow text-brand-redDeep",
};

export function Highlight({
  children,
  variant = "yellow",
  className = "",
}: HighlightProps) {
  return (
    <mark
      className={`inline px-1 box-decoration-clone ${VARIANTS[variant]} ${className}`.trim()}
    >
      {children}
    </mark>
  );
}
