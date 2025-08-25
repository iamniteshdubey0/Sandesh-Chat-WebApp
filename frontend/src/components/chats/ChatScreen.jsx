import { FaEllipsisH, FaPaperPlane, FaPaperclip } from "react-icons/fa";
import { useState } from "react";

// Mock messages data
const messages = [
  {
    id: 1,
    sender: "Audrey Kelly",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    type: "text",
    content: "Hi Aaron, this is my design i create last night, you can check it",
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
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=400&q=80"
    ],
    time: "12.41",
    me: true,
  }
];

// Mock upload progress
const uploadPanel = {
  show: true,
  uploads: [
    { name: "Packaging Design.zip", uploading: true, progress: 72, uploaded: "9.4 MB", size: "14 MB" },
    { name: "Merchandise.psd", uploading: false, size: "24 MB" },
    { name: "Logo.ai", uploading: false, size: "3.7 MB" }
  ]
};

export default function ChatScreen() {
  const [input, setInput] = useState("");

  return (
    <div className="bg-bg-light min-h-screen flex items-center justify-center p-0 sm:p-6">
      <div className="relative max-w-md w-full bg-white rounded-2xl shadow-xl flex flex-col h-[90vh]">

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-bg rounded-t-2xl">
          <div>
            <div className="font-semibold text-lg text-gray-900">Audrey Kelly</div>
            <div className="flex items-center space-x-1 text-sm text-green-500">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Online</span>
            </div>
          </div>
          <FaEllipsisH className="text-gray-400 text-xl cursor-pointer" />
        </div>

        {/* Messages */}
        <div className="flex-1 px-3 py-4 overflow-y-auto bg-bg-light space-y-3">
          {messages.map((msg, idx) => (
            <div
              key={msg.id}
              className={`
                flex ${msg.me ? "justify-end" : "justify-start"} w-full
              `}
            >
              {/* Avatar for received messages */}
              {!msg.me && msg.avatar && (
                <img
                  src={msg.avatar}
                  alt={msg.sender}
                  className="w-8 h-8 rounded-full border mr-2 mt-auto"
                />
              )}

              {/* Message Bubble */}
              <div
                className={`
                  max-w-[75%] flex flex-col
                  ${msg.me ? "items-end" : "items-start"}
                `}
              >
                {/* Text Message */}
                {msg.type === "text" && (
                  <div
                    className={`
                      px-4 py-2 
                      rounded-2xl 
                      mb-1
                      ${msg.me
                        ? "bg-violet-600 text-white rounded-br-xs"
                        : "bg-gray-100 text-gray-900 rounded-bl-xs"
                      }
                    `}
                    style={{ wordBreak: "break-word" }}
                  >
                    {msg.content}
                  </div>
                )}

                {/* File Message */}
                {msg.type === "file" && (
                  <div className="flex items-center bg-gray-100 text-gray-900 px-4 py-2 rounded-2xl mb-1">
                    <span className="inline-block mr-2">
                      <FaPaperclip className="text-gray-500" />
                    </span>
                    <div className="flex flex-col text-xs">
                      <span className="font-semibold text-sm">{msg.file.name}</span>
                      <span className="text-gray-500">{msg.file.size}</span>
                    </div>
                  </div>
                )}

                {/* Image Message */}
                {msg.type === "image" && (
                  <div className="flex space-x-2 rounded-lg overflow-hidden mb-1">
                    {msg.images.map((img, idx) => (
                      <img
                        src={img}
                        key={idx}
                        className="w-24 h-20 object-cover rounded-lg border"
                        alt="attachment"
                      />
                    ))}
                  </div>
                )}

                <span className={`text-xs mt-0.5 ${msg.me ? "text-violet-500" : "text-gray-400"}`}>
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Panel (floating) */}
        {uploadPanel.show && (
          <div className="absolute bottom-24 right-2 w-72 bg-white rounded-xl shadow-xl border border-border z-40">
            <div className="p-4">
              <div className="font-semibold text-md mb-2">Upload</div>
              <div className="space-y-3">
                {uploadPanel.uploads.map((u, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{u.name}</span>
                      <span className="text-xs text-gray-500">
                        {u.uploading ? `${u.uploaded} - ` : ""}
                        {u.size}
                      </span>
                    </div>
                    {u.uploading && (
                      <div className="mt-1 w-full h-1 rounded-full bg-gray-200 relative overflow-hidden">
                        <div
                          className="h-1 bg-violet-500 rounded-full transition-all"
                          style={{ width: `${u.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Input Box */}
        <form className="bg-white rounded-b-2xl border-t border-border p-3 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="flex-1 px-4 py-2 rounded-full bg-gray-100 border border-border focus:ring-1 focus:ring-violet-500 focus:border-violet-500 focus:outline-none transition text-sm"
            placeholder="Type in your messages..."
          />
          <button type="submit" className="p-2 bg-violet-500 rounded-full hover:bg-violet-600 transition">
            <FaPaperPlane className="text-white text-lg" />
          </button>
        </form>
      </div>
    </div>
  );
}
