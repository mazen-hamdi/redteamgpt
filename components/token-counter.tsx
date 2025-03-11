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
  
  // Add color coding based on token count
  const getColorClass = () => {
    if (tokenCount < 50) return "text-green-600 dark:text-green-400"; // Good - minimal usage
    if (tokenCount < 200) return "text-amber-600 dark:text-amber-400"; // Medium usage
    return "text-red-600 dark:text-red-400"; // Heavy usage
  };
  
  return (
    <div 
      className={cn(
        "text-xs flex items-center gap-1", 
        getColorClass(),
        className
      )} 
      data-testid="token-counter"
      title="Lower token counts help reduce AI computational resources"
    >
      <span className="inline-block h-2 w-2 rounded-full bg-current"></span>
      ~{formatTokenCount(tokenCount)} tokens
    </div>
  );
}
