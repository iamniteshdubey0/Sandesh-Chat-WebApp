import React, { useEffect } from "react";
import ChatSidebar from "../components/chats/ChatSidebar";
import ChatSettings from "../components/chats/ChatSettings";
import ChatWindow from "../components/chats/ChatWindow";
import NoChatSelected from "../components/NoChatSelected";
import { useChatStore } from "../store/useChatStore";
import useMobileStore from "../store/useMobileStore";

const Home = () => {
  const { selectedUser } = useChatStore();
  const { 
    showSettings, 
    showChatWindow, 
    handleOpenChat, 
    handleBackToSidebar, 
    handleToggleSettings,
    initializeMobileStore
  } = useMobileStore();

  useEffect(() => {
    const cleanup = initializeMobileStore();
    return cleanup;
  }, [initializeMobileStore]);
  return (
    <div className="bg-bg-dark">
      {/* Desktop View */}
      <div className="max-sm:hidden pt-18 px-4 w-full">
        <div className="grid md:grid-cols-4 space-x-2 ">
          <div className="flex col-span-1">
            <ChatSidebar></ChatSidebar>
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
                onToggleSettings={handleToggleSettings}
              />
            </div>
          )}

          {showSettings && (
            <div className="col-span-1 p-2 transition-all duration-500 ease-in-out transform opacity-100 translate-x-0">
              <ChatSettings />
            </div>
          )}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden container w-full pt-18 px-4">
        <div className="w-full">
          {/* Show ChatSidebar when showChatWindow is false */}
          {!showChatWindow && (
            <div className="transition-all duration-300 ease-in-out">
              <ChatSidebar onOpenChat={handleOpenChat} />
            </div>
          )}

          {/* Show ChatWindow when showChatWindow is true */}
          {showChatWindow && (
            <div className="transition-all duration-300 ease-in-out">
              <ChatWindow
                showSettings={showSettings}
                onToggleSettings={handleToggleSettings}
                onBackToSidebar={handleBackToSidebar}
              />
            </div>
          )}

          {showSettings && showChatWindow && (
            // todo: adjust height
            <div className="absolute top-18 w-full left-0 p-2 bg-bg-dark/60 z-50">
              <ChatSettings
                showSettings={showSettings}
                onToggleSettings={handleToggleSettings}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
