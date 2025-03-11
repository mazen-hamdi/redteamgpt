import { ChatContainer } from "@/components/chat/chat-container";

export default function ChatPage() {
  return (
    <div className="container flex h-[calc(100vh-4rem)] flex-col">
      <header className="py-4 border-b">
        <h1 className="text-2xl font-bold">RedGreenGPT</h1>
        <p className="text-muted-foreground">Be mindful of your AI usage - Track and reduce your token consumption</p>
      </header>
      <main className="flex flex-1 flex-col">
        <ChatContainer showTokenCounts={true} />
      </main>
    </div>
  );
}
