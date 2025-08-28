import React from "react";

const MessageSkeleton = () => {
  const skeletonMessages = Array(8).fill(null);
  return (
    <div className="flex-1 px-3 py-4 overflow-y-auto bg-bg-dark space-y-3">
      {skeletonMessages.map((_, idx) => (
        <div
        key={idx}
          className={`flex ${
            idx % 2 === 0 ? "justify-end" : "justify-start"
          } w-full gap-2`}
        >
          <div className="w-8 h-8 rounded-full mr-2 mt-auto bg-bg-light animate-pulse" />
          <div className={`flex flex-col`}>
            {/* Text Message */}
            <div
              className={`
              px-3 py-2 
              rounded-2xl 
              mb-0.5
              text-sm
              bg-bg-light animate-pulse
              w-80
              h-12
            `}
              style={{ wordBreak: "break-word" }}
            ></div>

            <span className={`text-xs mt-0.5`}></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
