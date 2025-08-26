import { Paperclip } from "lucide-react";

const MessageContainer = ({ msg }) => {
  return (
    <div className="flex-1 px-3 py-4 overflow-y-auto bg-bg-dark space-y-3">
      <div
        className={`flex ${msg.me ? "justify-end" : "justify-start"} w-full`}
      >
        {!msg.me && msg.avatar && (
          <img
            src={msg.avatar}
            alt={msg.sender}
            className="w-6 h-6 rounded-full border mr-2 mt-auto"
          />
        )}
        <div
          className={`max-w-[75%] flex flex-col ${
            msg.me ? "items-end" : "items-start"
          }`}
        >
          <div
            className={`
              px-3 py-2 
              rounded-2xl 
              mb-0.5
              text-sm
              ${
                msg.me
                  ? "bg-text-muted/40 text-text rounded-br-xs"
                  : "bg-highlight text-text rounded-bl-xs"
              }
            `}
            style={{ wordBreak: "break-word" }}
          >
            {msg.content}
          </div>
          <span
            className={`text-xs mt-0.5 ${
              msg.me ? "text-highlight" : "text-text-muted"
            }`}
          >
            {msg.time}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
