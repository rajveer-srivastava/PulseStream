"use client";

import { ReceivedChatMessage } from "@livekit/components-react";
import { Skeleton } from "@/components/ui/skeleton";
import { ChatMessage } from "./chat-message";

interface ChatListProps {
  messages: ReceivedChatMessage[];
  isHidden: boolean;
}

export const ChatList = ({ messages, isHidden }: ChatListProps) => {
  if (isHidden || !messages || messages.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          {isHidden ? "Chat is disabled" : "Welcome to the chart!"}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col-reverse overflow-y-auto p-3 h-full">
      {messages.map((messages) => (
        <ChatMessage key={messages.timestamp} data={messages} />
      ))}
    </div>
  );
};

export const ChatListSkeleton = () => {
  return (
    <div className="text h-full items-center justify-center">
      <Skeleton className="flex float-start w-2/5 h-8 mt-4 ml-4" />
      <Skeleton className="flex float-end w-3/4 h-8 mt-4 mr-4" />
      <Skeleton className="flex float-start w-3/5 h-8 mt-4 ml-4" />
      <Skeleton className="flex float-end w-3/5 h-8 mt-4 mr-4" />
      <Skeleton className="flex float-start w-4/5 h-8 mt-4 ml-4" />
      <Skeleton className="flex float-end w-3/5 h-8 mt-4 mr-4" />
      <Skeleton className="flex float-start w-3/4 h-8 mt-4 ml-4" />
      <Skeleton className="flex float-end w-2/5 h-8 mt-4 mr-4" />
    </div>
  );
};
