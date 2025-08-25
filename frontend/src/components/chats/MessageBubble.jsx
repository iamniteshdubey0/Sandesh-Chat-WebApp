import { Paperclip } from "lucide-react";

const MessageBubble = ({ msg }) => {
  return (
    <div className={`flex ${msg.me ? "justify-end" : "justify-start"} w-full`}>
      {!msg.me && msg.avatar && (
        <img
          src={msg.avatar}
          alt={msg.sender}
          className="w-6 h-6 rounded-full border mr-2 mt-auto"
        />
      )}
      <div className={`max-w-[75%] flex flex-col ${msg.me ? "items-end" : "items-start"}`}>
        {/* Text Message */}
        {msg.type === "text" && (
          <div
            className={`
              px-3 py-2 
              rounded-2xl 
              mb-0.5
              text-sm
              ${msg.me
                ? "bg-text-muted/40 text-text rounded-br-xs"
                : "bg-highlight text-text rounded-bl-xs"
              }
            `}
            style={{ wordBreak: "break-word" }}
          >
            {msg.content}
          </div>
        )}
        {/* File Message */}
        {msg.type === "file" && (
          <div className="flex items-center bg-highlight text-text px-4 py-2 rounded-2xl mb-1">
            <span className="inline-block mr-2">
              <Paperclip className="text-text" />
            </span>
            <div className="flex flex-col text-xs">
              <span className="font-semibold text-sm">{msg.file.name}</span>
              <span className="text-text-muted text-left">{msg.file.size}</span>
            </div>
          </div>
        )}
        {/* Image Message */}
        {msg.type === "image" && (
          <div className="flex space-x-2 rounded-lg overflow-hidden mb-1 bg-text-muted/40 p-2">
            {msg.images.map((img, idx) => (
              <img
                src={img}
                key={idx}
                className="w-36 h-36 object-cover rounded-lg border"
                alt="attachment"
              />
            ))}
          </div>
        )}
        <span className={`text-xs mt-0.5 ${msg.me ? "text-highlight" : "text-text-muted"}`}>
          {msg.time}
        </span>
      </div>
    </div>
  )
}

export default MessageBubble
