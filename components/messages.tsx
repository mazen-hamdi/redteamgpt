'use client';

import { Message } from 'ai';
import { cn } from '@/lib/utils';
import { MessageList } from './message-list';

export function Messages({
  messages = [],
  isLoading,
  chatId,
  votes,
  setMessages,
  reload,
  isReadonly,
  isArtifactVisible
}: {
  messages: Message[];
  isLoading?: boolean;
  chatId: string;
  votes?: any[];
  setMessages?: (messages: Message[]) => void;
  reload?: () => void;
  isReadonly?: boolean;
  isArtifactVisible?: boolean;
}) {
  return (
    <div
      className={cn(
        'pb-[200px] pt-4 md:pt-10',
        isArtifactVisible ? 'md:pr-[400px]' : ''
      )}
    >
      {messages.length > 0 ? (
        <MessageList
          messages={messages}
          isLoading={isLoading}
          chatId={chatId}
          votes={votes}
          setMessages={setMessages}
          reload={reload}
          isReadonly={isReadonly}
        />
      ) : (
        <div className="mx-auto max-w-2xl px-4">
          <div className="rounded-lg border bg-background p-8">
            <h1 className="mb-2 text-lg font-semibold">
              Welcome to RedGreenGPT
            </h1>
            <p className="mb-2 leading-normal text-muted-foreground">
              Be mindful of your AI usage - Track and reduce your token consumption
            </p>
            <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-md text-amber-900 dark:text-amber-200 text-sm">
              <strong>Why it matters:</strong> Large language models consume significant energy resources. 
              By being aware of your token usage, you can help minimize unnecessary AI consumption.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
