import React, { useState } from "react";
import ChatSidebar from "../components/chats/ChatSidebar";
import ChatSettings from "../components/chats/ChatSettings";
import ChatWindow from "../components/chats/ChatWindow";
import NoChatSelected from "../components/NoChatSelected";
import { useChatStore } from "../store/useChatStore";

const Home = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showChatWindow, setShowChatWindow] = useState(false);
  const { selectedUser } = useChatStore();

  const handleOpenChat = (chat) => {
    setSelectedChat(chat);
    setShowChatWindow(true);
  };

  const handleBackToSidebar = () => {
    setShowChatWindow(false);
    setSelectedChat(null);
  };
  return (
    <div className="h-screen bg-bg-dark">
      {/* Desktop View */}
      <div className="max-sm:hidden conatiner pt-18 px-4 w-full h-full">
        <div className="grid md:grid-cols-4 space-x-2 ">
          <div className="flex h-full col-span-1">
            <ChatSidebar onOpenChat={handleOpenChat}></ChatSidebar>
          </div>

          {!selectedUser ? (
            <div
              className={`transition-all duration-500 ease-in-out col-span-3`}
            >
              <NoChatSelected />
            </div>
          ) : (
            <div
              className={`transition-all duration-500 ease-in-out ${
                showSettings ? "col-span-2" : "col-span-3"
              }`}
            >
              <ChatWindow
                showSettings={showSettings}
                onToggleSettings={() => setShowSettings((prev) => !prev)}
              />
            </div>
          )}

          {/* {showSettings && (
            <div className="col-span-1 p-2 transition-all duration-500 ease-in-out transform opacity-100 translate-x-0">
              <ChatSettings />
            </div>
          )} */}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden conatiner w-full mt-15">
        <div className="space-x-2">
          {/* Show ChatSidebar when showChatWindow is false */}
          {!showChatWindow && (
            <div className="p-2 transition-all duration-300 ease-in-out">
              <ChatSidebar onOpenChat={handleOpenChat} />
            </div>
          )}

          {/* Show ChatWindow when showChatWindow is true */}
          {showChatWindow && (
            <div className="transition-all duration-300 ease-in-out">
              <ChatWindow
                showSettings={showSettings}
                onToggleSettings={() => setShowSettings((prev) => !prev)}
                selectedChat={selectedChat}
                onBackToSidebar={handleBackToSidebar}
              />
            </div>
          )}

          {showSettings && showChatWindow && (
            <div className="absolute top-15 w-full left-0 p-2 h-screen bg-bg-dark/60">
              <ChatSettings
                showSettings={showSettings}
                onToggleSettings={() => setShowSettings((prev) => !prev)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
