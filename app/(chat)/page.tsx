import { cookies } from 'next/headers';

import { Chat } from '@/components/chat';
import { DEFAULT_CHAT_MODEL } from '@/lib/ai/models';
import { generateUUID } from '@/lib/utils';
import { DataStreamHandler } from '@/components/data-stream-handler';

export default async function ChatPage() {
  const id = generateUUID();

  const cookieStore = await cookies();
  const modelIdFromCookie = cookieStore.get('chat-model');
  
  return (
    <div className="container flex h-[calc(100vh-4rem)] flex-col">
      <header className="py-4 border-b">
        <h1 className="text-2xl font-bold">RedGreenGPT</h1>
        <p className="text-muted-foreground">Be mindful of your AI usage - Track and reduce your token consumption</p>
      </header>
      <main className="flex flex-1 flex-col">
        <Chat
          key={id}
          id={id}
          initialMessages={[]}
          selectedChatModel={modelIdFromCookie?.value || DEFAULT_CHAT_MODEL}
          selectedVisibilityType="private"
          isReadonly={false}
        />
        <DataStreamHandler id={id} />
      </main>
    </div>
  );
}
