import { ArrowLeft, Ellipsis } from "lucide-react";
import { useEffect, useState } from "react";
import MessageBubble from "./MessageContainer";
import InputBar from "./MessageInput";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";
import ChatHeader from "./ChatHeader";
import MessageContainer from "./MessageContainer";
import useMobileStore from "../../store/useMobileStore";

const ChatWindow = ({
  showSettings,
  onToggleSettings,
  onBackToSidebar,
}) => {
  const { onlineUsers } = useAuthStore();
  const { handleBackToSidebar: storeHandleBackToSidebar } = useMobileStore();

  return (
    <div className="bg-bg-dark h-[calc(100vh-5.2rem)] flex items-center justify-center w-full">
      <div className="relative w-full bg-bg-dark/30 flex flex-col h-full">
        {/* Header */}
        <ChatHeader
          onBackToSidebar={onBackToSidebar || storeHandleBackToSidebar}
          onToggleSettings={onToggleSettings}
        ></ChatHeader>

        {/* Messages */}
        <MessageContainer />

        {/* Input Bar */}
        <InputBar />
      </div>
    </div>
  );
};

export default ChatWindow;
