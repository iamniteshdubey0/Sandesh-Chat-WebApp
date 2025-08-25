import { ArrowLeft, Ellipsis } from "lucide-react";
import { useEffect, useState } from "react";
import MessageBubble from "./MessageBubble";
import InputBar from "./InputBar";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";

const messages = [
  {
    id: 1,
    sender: "Audrey Kelly",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    type: "text",
    content:
      "Hi Aaron, this is my design i create last night, you can check it",
    time: "12.10",
    me: false,
  },
  {
    id: 2,
    sender: "Audrey Kelly",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    type: "file",
    file: {
      name: "Marketing Brochure.zip",
      size: "8.1 MB",
    },
    time: "12.13",
    me: false,
  },
  {
    id: 3,
    sender: "me",
    type: "text",
    content: "That's quick Audrey! thanks for your work, i will check it now",
    time: "12.15",
    me: true,
  },
  {
    id: 4,
    sender: "Audrey Kelly",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    type: "text",
    content: "Thanks Aaron! 🥳 feel free to leave feedback",
    time: "12.34",
    me: false,
  },
  {
    id: 5,
    sender: "me",
    type: "text",
    content: "Hello Audrey, i have some feedback on your design!",
    time: "12.40",
    me: true,
  },
  {
    id: 6,
    sender: "me",
    type: "image",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=400&q=80",
    ],
    time: "12.41",
    me: true,
  },
];

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

  if (isMessagesLoading) return <div>Loading....</div>;

  const [allMessages, setAllMessages] = useState(messages);

  const handleSend = (msgText) => {
    setAllMessages([
      ...allMessages,
      {
        id: Date.now(),
        sender: "me",
        me: true,
        type: "text",
        content: msgText,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  };

  // Use selectedChat data if available, otherwise use default
  const chatName = selectedChat ? selectedChat.name : "Audrey Kelly";
  const chatAvatar = selectedChat
    ? selectedChat.avatar
    : "https://randomuser.me/api/portraits/women/44.jpg";

  return (
    <div className="bg-bg-dark h-[calc(100vh-5.2rem)] flex items-center justify-center">
      <div className="relative w-full bg-bg-dark/30 flex flex-col h-full">
        {/* Header */}
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
                    {onlineUsers.includes(selectedUser._id)
                      ? "Online"
                      : "Offline"}
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

        {/* Messages */}
        <div className="flex-1 px-3 py-4 overflow-y-auto bg-bg-dark space-y-3">
          {allMessages.map((msg) => (
            <MessageBubble key={msg.id} msg={msg} />
          ))}
        </div>

        {/* Input Bar */}
        <InputBar onSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatWindow;
