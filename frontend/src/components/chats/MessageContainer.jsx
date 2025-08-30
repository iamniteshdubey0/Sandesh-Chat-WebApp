import { useChatStore } from "../../store/useChatStore";
import { useEffect, useRef } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import { formatMessageTime } from "../../lib/util";

const MessageContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessage,
    unsubscribeFromMessage,
  } = useChatStore();

  const { authUser } = useAuthStore();
  const messageRef = useRef(null);

  useEffect(() => {
    if (!selectedUser || !selectedUser._id) return;
    getMessages(selectedUser._id);

    subscribeToMessage();

    return () => unsubscribeFromMessage();
  }, [selectedUser._id]);

  useEffect(() => {
    if (messageRef.current && messages) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Show loading skeleton if messages are loading
  if (isMessagesLoading) {
    return <MessageSkeleton />;
  }

  // Show empty state if no selected user
  if (!selectedUser) {
    return (
      <div className="flex-1 px-3 py-4 overflow-y-auto bg-bg-dark flex items-center justify-center">
        <p className="text-text-muted">Select a chat to start messaging</p>
      </div>
    );
  }

  return (
    <div className="flex-1 px-3 py-4 overflow-y-auto bg-bg-dark space-y-3">
      {messages &&
        messages.map((message) => (
          <div
            key={message._id}
            className={`flex ${
              message.senderId === authUser?._id
                ? "justify-end"
                : "justify-start"
            } w-full`}
            ref={messageRef}
          >
            <img
              src={
                message.senderId === authUser?._id
                  ? authUser?.profilePic || "/vite.svg"
                  : selectedUser?.profilePic || "/vite.svg"
              }
              alt="profile pic"
              className="w-6 h-6 rounded-full border mr-2 mt-auto"
            />
            <div
              className={`max-w-[75%] flex flex-col ${
                message.senderId === authUser?._id ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`px-3 py-2 rounded-2xl mb-0.5 text-sm
            ${
              message.senderId === authUser?._id
                ? "bg-text-muted/40 text-text rounded-bl-xs"
                : "bg-highlight text-text rounded-bl-xs"
            }
          `}
                style={{ wordBreak: "break-word" }}
              >
                {message.image && (
                  <img
                    src={message.image}
                    alt="attachment"
                    className="sm:max-w-[200px] sm:max-h-[250px] rounded-md mb-2 "
                  />
                )}

                {message.text}
              </div>
              <span
                className={`text-xs mt-0.5 ${
                  message.senderId === authUser?._id
                    ? "text-highlight"
                    : "text-text-muted"
                }`}
              >
                {formatMessageTime(message.createdAt)}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MessageContainer;
