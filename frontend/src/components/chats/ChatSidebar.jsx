import React, { useEffect } from "react";
import { Plus, User } from "lucide-react";
import { useChatStore } from "../../store/useChatStore";
import ChatSidebarSkeleton from "../skeletons/ChatSidebarSkeleton";
import { useAuthStore } from "../../store/useAuthStore";
import useMobileStore from "../../store/useMobileStore";


const ChatSidebar = ({ onOpenChat }) => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const { handleOpenChat } = useMobileStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isUsersLoading) return <ChatSidebarSkeleton />;

  return (
    <aside className="h-[calc(100vh-5.2rem)] bg-bg border-1 border-border shadow-xl p-4 flex flex-col mx-auto rounded-md z-0 w-full">
      {/* Chats Title */}
      <h2 className="font-bold text-md mb-4 text-text-muted text-left flex items-center gap-2">
        <User></User>Chats
      </h2>

      {/* Search */}
      <input
        type="text"
        className="w-full px-4 py-2 text-text-muted rounded-lg border border-border/60 focus:outline-none focus:border-border text-sm mb-4"
        placeholder="Search name, contact, etc"
      />

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto pr-1 mt-2 space-y-1">
        {users && users.length > 0 ? (
          users.map((user) => (
            <div
              key={user._id}
              onClick={() => {
                setSelectedUser(user);
                // Use the prop if provided, otherwise use the store function
                if (onOpenChat) {
                  onOpenChat();
                } else {
                  handleOpenChat();
                }
              }}
              className={`relative
              flex items-center px-1 py-3 rounded-lg cursor-pointer 
              ${
                selectedUser?._id === user._id
                  ? "bg-highlight/80 border-1 border-border"
                  : ""
              }
              transition
            `}
            >
              <img
                src={user.profilePic || "/vite.svg"}
                alt={user.fullName}
                className="w-9 h-9 rounded-full object-cover mr-3 border"
              />
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-3 left-7 size-3 bg-success rounded-full ring-2 ring-zinc-900"></span>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-0.5">
                  <span className="font-semibold text-text-muted truncate text-sm capitalize">
                    {user.fullName}
                  </span>
                  <span className="text-xs text-text-muted/60"></span>
                </div>
                <span className="block text-xs text-text-muted/60 truncate text-left">
                  {onlineUsers.includes(user._id) ? "Online" : "Offline"}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-text-muted/60 py-8">
            No users found
          </div>
        )}
      </div>

      {/* New Chat Button */}
      <button className="mt-4 flex items-center justify-center gap-2 w-full rounded-lg bg-highlight/70 hover:bg-highlight text-text font-semibold py-2 shadow cursor-pointer">
        <Plus className="text-text" />
        New Chat
      </button>
    </aside>
  );
};

export default ChatSidebar;
