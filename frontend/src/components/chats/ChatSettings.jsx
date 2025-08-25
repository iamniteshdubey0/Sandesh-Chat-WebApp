import React from "react";
import { Paperclip, Phone, Plus, Video, X } from "lucide-react";

const chatsMock = [
  {
    name: "David Nolan",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    lastMessage: "Aaron? Are you here?",
    time: "12.10",
    unread: false,
  },
  {
    name: "Audrey Kelly",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    lastMessage: "Ok, I will touch up this",
    time: "14.21",
    unread: true,
  },
  {
    name: "Brian Artemayev",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    lastMessage: "Why you have that stupid idea? i think this is very...",
    time: "Yesterday",
    unread: false,
  },
  {
    name: "Jessica Naomi",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    lastMessage: "I will handle that Aaron, Thanks!",
    time: "Yesterday",
    unread: false,
  },
  {
    name: "Albedo Greyhold",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    lastMessage: "Okay fine",
    time: "Yesterday",
    unread: false,
  },
  {
    name: "Amalia Chen",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    lastMessage: "Thank You!",
    time: "11/04",
    unread: false,
  },
  {
    name: "Rudi Hadisuwarno",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    lastMessage: "Woalah pie to ham",
    time: "11/04",
    unread: false,
  },
];

const ChatSettings = ({ showSettings, onToggleSettings }) => {
  return (
    <div className="md:max-w-xs w-full bg-bg border-1 border-border shadow-xl p-4 flex flex-col sm:h-[95vh] md:h-[88vh] md:mx-auto rounded-md">
      <button onClick={onToggleSettings} className="md:hidden flex justify-end py-2 mb-4"><X size={20} className="text-text-muted" /></button>
      <div className="flex flex-col items-center justify-center bg-bg-light px-3 py-2 rounded-lg border gap-4">
        <div className="flex flex-col items-center justify-center text-center space-y-2 focus:outline-none cursor-pointer">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Aaron Stanley"
            className="w-16 h-16 rounded-full border"
          />
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-sm font-semibold text-text">
              Aaron Stanley
            </span>
            <span className="text-xs text-text-muted">Web Developer</span>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <Video size={20} className="text-text-muted hover:text-text" />
          <Phone size={20} className="text-text-muted hover:text-text" />
          <Plus size={20} className="text-text-muted hover:text-text" />
        </div>
      </div>

      {/* Shared File */}
      <div className="flex-1 pr-1 mt-2 space-y-1">
        <div className="flex justify-between items-center rounded-lg gap-1">
          <h2 className="font-bold text-md mb-1 mt-1 text-text-muted text-left">
            Shared Files
          </h2>

          <a href="#" className="text-text-muted text-sm hover:text-text">
            View all
          </a>
        </div>

        <div className="flex items-center justify-between px-3 py-1 hover:bg-bg-light rounded-md">
          <div className="flex items-center space-x-2 focus:outline-none cursor-pointer">
            <span className="inline-block mr-2">
              <Paperclip className="text-text" />
            </span>
            <div className="flex flex-col text-xs">
              <span className="font-semibold text-sm">Hello World.apk</span>
              <span className="text-text-muted text-left">89.2 mb</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-3 py-1 hover:bg-bg-light rounded-md">
          <div className="flex items-center space-x-2 focus:outline-none cursor-pointer">
            <span className="inline-block mr-2">
              <Paperclip className="text-text" />
            </span>
            <div className="flex flex-col text-xs">
              <span className="font-semibold text-sm">Hello World.apk</span>
              <span className="text-text-muted text-left">89.2 mb</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-3 py-1 hover:bg-bg-light rounded-md">
          <div className="flex items-center space-x-2 focus:outline-none cursor-pointer">
            <span className="inline-block mr-2">
              <Paperclip className="text-text" />
            </span>
            <div className="flex flex-col text-xs">
              <span className="font-semibold text-sm">Hello World.apk</span>
              <span className="text-text-muted text-left">89.2 mb</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shared Media */}
      <div className="flex-1 pr-1 mt-2 space-y-1">
        <div className="flex justify-between items-center rounded-lg gap-1">
          <h2 className="font-bold text-md mb-1 mt-1 text-text-muted text-left">
            Shared Media
          </h2>

          <a href="#" className="text-text-muted text-sm hover:text-text">
            View all
          </a>
        </div>

        <div className="flex flex-wrap rounded-lg gap-1">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=400&q=80"
            className="w-18 h-18 object-cover rounded-lg border"
            alt="attachment"
          />

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=400&q=80"
            className="w-18 h-18 object-cover rounded-lg border"
            alt="attachment"
          />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=400&q=80"
            className="w-18 h-18 object-cover rounded-lg border"
            alt="attachment"
          />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=400&q=80"
            className="w-18 h-18 object-cover rounded-lg border"
            alt="attachment"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatSettings;
