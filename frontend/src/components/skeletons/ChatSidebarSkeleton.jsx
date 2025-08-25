import React from "react";

const ChatSidebarSkeleton = () => {
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside className="h-[calc(100vh-5.2rem)] bg-bg border-1 border-border shadow-xl p-4 flex flex-col mx-auto rounded-md z-0 w-full">
      {/* Chats Title */}
      <div className="bg-bg-light w-full px-4 py-2 text-text-muted rounded-lg text-sm mb-4 animate-pulse"></div>

      {/* Search */}
      <input
        type="text"
        className="bg-bg-light w-full px-4 py-2 text-text-muted rounded-lg focus:outline-none text-sm mb-4 animate-pulse"
        placeholder=""
      />
      {/* Chat List */}
      <div className="flex-1 overflow-y-auto pr-1 mt-2 space-y-1 h-80">
        {skeletonContacts.map((_, i) => (
          <div
            key={i}
            className={`
              flex items-center px-1 py-3 rounded-lg cursor-pointer transition
            `}
          >
            <div className="w-9 h-9 rounded-full object-cover mr-3 bg-bg-light animate-pulse" />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <div className="bg-bg-light w-full px-4 py-3 text-text-muted rounded-lg text-sm mb-4 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ChatSidebarSkeleton;
