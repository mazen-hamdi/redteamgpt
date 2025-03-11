'use client';

import { Message } from 'ai';
import { ChatMessage } from './message';

export interface MessageListProps {
  messages: Message[];
  isLoading?: boolean;
  chatId: string;
  votes?: any[];
  setMessages?: (messages: Message[]) => void;
  reload?: () => void;
  isReadonly?: boolean;
}

export function MessageList({
  messages,
  isLoading,
  chatId,
  votes,
  setMessages,
  reload,
  isReadonly,
}: MessageListProps) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          message={message}
          isLoading={isLoading && messages[messages.length - 1].id === message.id}
          showTokenCount={true}
        />
      ))}
    </div>
  );
}
