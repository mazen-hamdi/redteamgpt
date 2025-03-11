"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Message } from "ai";
import { Send } from "lucide-react";

interface ChatPanelProps {
  messages: Message[];
  isLoading: boolean;
  onSend: (message: string) => void;
  onClear: () => void;
}

export function ChatPanel({
  messages,
  isLoading,
  onSend,
  onClear
}: ChatPanelProps) {
  const [input, setInput] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div className="sticky bottom-0 bg-background p-4 border-t">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type mindfully. Each message consumes AI resources..."
          disabled={isLoading}
          className="flex-1 px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
          data-testid="multimodal-input"
        />
        <Button 
          type="submit" 
          disabled={isLoading || !input.trim()}
          data-testid="send-button"
          className="px-4"
        >
          {isLoading ? "Sending..." : <Send className="h-4 w-4" />}
        </Button>
        {messages.length > 0 && (
          <Button 
            type="button" 
            variant="outline" 
            onClick={onClear}
            title="Clear conversation to save resources"
          >
            Clear
          </Button>
        )}
      </form>
      
      {messages.length > 0 && (
        <div className="text-xs text-center text-muted-foreground mt-2">
          RedGreenGPT helps you be mindful of your AI usage. Track your token count with each message.
        </div>
      )}
    </div>
  );
}
