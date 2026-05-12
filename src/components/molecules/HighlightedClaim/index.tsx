import type { ReactNode } from "react";
import { Headline } from "@/components/atoms/Headline";
import { Highlight } from "@/components/atoms/Highlight";

interface HighlightedClaimProps {
  /** Italic orange headline, e.g. "Rapid Muscle Wasting…" */
  title: ReactNode;
  /** Body line shown inside the yellow highlight strip. */
  subline: ReactNode;
  className?: string;
}

export function HighlightedClaim({
  title,
  subline,
  className = "",
}: HighlightedClaimProps) {
  return (
    <div className={`text-center space-y-4 ${className}`.trim()}>
      <Headline as="h2" variant="claim">
        {title}
      </Headline>
      <p className="font-body font-bold text-[clamp(0.95rem,2.6vw,1.125rem)] leading-snug">
        <Highlight>{subline}</Highlight>
      </p>
    </div>
  );
}
