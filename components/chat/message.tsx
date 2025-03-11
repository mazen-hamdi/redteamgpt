"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { TokenCounter } from "@/components/token-counter";
import { Message } from "ai";

interface ChatMessageProps {
  message: Message;
  isLoading?: boolean;
  showTokenCount?: boolean;
}

export function ChatMessage({ 
  message, 
  isLoading = false, 
  showTokenCount = true 
}: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:mb-6",
        isUser ? "justify-end" : "justify-start"
      )}
      data-testid={`message-${message.role}`}
    >
      <div
        className={cn(
          "flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-4 py-3 md:max-w-[70%]",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground"
        )}
        data-testid="message-content"
      >
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-xs font-medium">
              {isUser ? "Y" : "A"}
            </span>
          </div>
          <div className="text-sm font-medium">
            {isUser ? "You" : "Assistant"}
          </div>
        </div>

        <div className="prose max-w-none dark:prose-invert">
          {message.content}
        </div>
        
        {showTokenCount && !isLoading && message.content && (
          <div className="mt-1 flex justify-end">
            <TokenCounter content={message.content} />
          </div>
        )}
      </div>
    </div>
  );
}
