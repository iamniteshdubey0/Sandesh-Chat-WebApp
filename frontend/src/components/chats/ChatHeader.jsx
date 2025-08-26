import React from "react";
import { ArrowLeft, Ellipsis } from "lucide-react";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";

const ChatHeader = ({onBackToSidebar, onToggleSettings}) => {

    const { messages, getMessages, isMessagesLoading, selectedUser } =
    useChatStore();
  const { onlineUsers } = useAuthStore();
  return (
    <div className="flex items-center justify-between py-1 px-4 bg-bg-light rounded-md mx-1">
      <div className="flex items-center">
        {/* Back button for mobile */}
        {onBackToSidebar && (
          <button
            onClick={onBackToSidebar}
            className="mr-3 p-1 rounded-full hover:bg-highlight/20 transition-colors"
          >
            <ArrowLeft className="text-text-muted text-lg" />
          </button>
        )}
        <div className="flex items-center">
          <img
            src={selectedUser.profilePic}
            alt={selectedUser.fullName}
            className="w-8 h-8 rounded-full object-cover mr-3 border"
          />
          <div>
            <div className="font-semibold text-lg text-text capitalize">
              {selectedUser.fullName}
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <span
                className={`w-2 h-2 rounded-full ${
                  onlineUsers.includes(selectedUser._id)
                    ? "bg-success"
                    : "bg-text/50"
                }`}
              ></span>
              <span
                className={
                  onlineUsers.includes(selectedUser._id)
                    ? "text-success"
                    : "text-text/50"
                }
              >
                {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Ellipsis
        className="text-text-muted/60 text-xl cursor-pointer"
        onClick={onToggleSettings}
      />
    </div>
  );
};

export default ChatHeader;
