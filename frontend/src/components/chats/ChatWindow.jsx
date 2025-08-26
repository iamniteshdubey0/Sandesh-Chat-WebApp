import { ArrowLeft, Ellipsis } from "lucide-react";
import { useEffect, useState } from "react";
import MessageBubble from "./MessageContainer";
import InputBar from "./MessageInput";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import ChatHeader from "./ChatHeader";
import MessageContainer from "./MessageContainer";

const ChatWindow = ({
  showSettings,
  onToggleSettings,
  selectedChat,
  onBackToSidebar,
}) => {
  const { messages, getMessages, isMessagesLoading, selectedUser } =
    useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [selectedUser._id, getMessages]);

  if (isMessagesLoading)
    return (
      <div>
        <MessageSkeleton />
      </div>
    );

  // Use selectedChat data if available, otherwise use default
  const chatName = selectedChat ? selectedChat.name : "Audrey Kelly";
  const chatAvatar = selectedChat
    ? selectedChat.avatar
    : "https://randomuser.me/api/portraits/women/44.jpg";

  return (
    <div className="bg-bg-dark h-[calc(100vh-5.2rem)] flex items-center justify-center">
      <div className="relative w-full bg-bg-dark/30 flex flex-col h-full">
        {/* Header */}
        <ChatHeader
          onBackToSidebar={onBackToSidebar}
          onToggleSettings={onToggleSettings}
        ></ChatHeader>

        {/* Messages */}
        {/* <MessageContainer /> */}

        {/* Input Bar */}
        <InputBar />
      </div>
    </div>
  );
};

export default ChatWindow;
