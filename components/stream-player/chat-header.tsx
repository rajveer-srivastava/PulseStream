"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { ChatToggle } from "./chat-toggle";
import { VariantToggle } from "./variant-toggle";

export const ChatHeader = () => {
  return (
    <div className="relative p-3 border-b">
      {/* TODO: Toggle Chat  */}
      <div className="absolute left-2 top-2 hidden lg:block">
        <ChatToggle />
      </div>
      <p className="font-semibold text-primary text-center">Stream Chat</p>
      {/* TODO: Toggle Chat Community */}
      <div className="absolute right-2 top-2">
        <VariantToggle />
      </div>
    </div>
  );
};

export const ChatHeaderSkeleton = () => {
  return (
    <div className="relative p-3 border-b hidden md:block">
      <Skeleton className="absolute h-7 w-8 left-3 top-3" />
      <Skeleton className="w-28 h-7 mx-auto" />
    </div>
  );
};
