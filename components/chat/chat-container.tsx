"use client";

import { useChat } from "ai/react";
import { ChatMessage } from "@/components/chat/message";
import { ChatPanel } from "@/components/chat/chat-panel";
import { ChatStatistics } from "@/components/chat/chat-statistics";

interface ChatContainerProps {
  showTokenCounts?: boolean;
}

export function ChatContainer({ showTokenCounts = true }: ChatContainerProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat();

  const handleClear = () => {
    setMessages([]);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center">
            <div className="rounded-lg border border-neutral-200 p-8 dark:border-neutral-800 max-w-md">
              <h2 className="text-lg font-semibold mb-2">Welcome to RedGreenGPT</h2>
              <p className="text-muted-foreground mb-4">
                Track your AI usage and be mindful of your environmental impact. Our token counter helps you visualize how much processing each message requires.
              </p>
              <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-md text-amber-900 dark:text-amber-200 text-sm">
                <strong>Why it matters:</strong> Large language models consume significant energy resources. By being aware of your token usage, you can help minimize unnecessary AI consumption.
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((message) => (
              <ChatMessage 
                key={message.id} 
                message={message} 
                isLoading={isLoading && messages[messages.length - 1].id === message.id}
                showTokenCount={showTokenCounts}
              />
            ))}
          </div>
        )}
      </div>
      
      {messages.length > 0 && showTokenCounts && (
        <div className="px-4">
          <ChatStatistics messages={messages} />
        </div>
      )}

      <ChatPanel
        messages={messages}
        isLoading={isLoading}
        onSend={(message) => {
          handleSubmit(new Event('submit') as any, { data: { content: message } });
        }}
        onClear={handleClear}
      />
    </div>
  );
}
