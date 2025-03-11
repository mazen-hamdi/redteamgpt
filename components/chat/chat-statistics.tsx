"use client";

import React from "react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { estimateTokenCount, formatTokenCount } from "@/lib/utils/token-counter";
import { Message } from "ai";

interface ChatStatisticsProps {
  messages: Message[];
  className?: string;
}

export function ChatStatistics({ messages, className }: ChatStatisticsProps) {
  const totalTokens = useMemo(() => {
    return messages.reduce((total, msg) => {
      return total + estimateTokenCount(msg.content || "");
    }, 0);
  }, [messages]);

  return (
    <div className={cn("p-2 text-sm text-muted-foreground", className)} data-testid="chat-statistics">
      <div className="flex items-center gap-2">
        <span>Total tokens: ~{formatTokenCount(totalTokens)}</span>
      </div>
    </div>
  );
}
