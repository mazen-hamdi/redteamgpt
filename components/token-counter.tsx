"use client";

import React from "react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { estimateTokenCount, formatTokenCount } from "@/lib/utils/token-counter";

interface TokenCounterProps {
  content: string | null | undefined;
  className?: string;
}

export function TokenCounter({ content, className }: TokenCounterProps) {
  const tokenCount = useMemo(() => estimateTokenCount(content || ""), [content]);
  
  return (
    <div className={cn("text-xs text-muted-foreground", className)} data-testid="token-counter">
      ~{formatTokenCount(tokenCount)} tokens
    </div>
  );
}
