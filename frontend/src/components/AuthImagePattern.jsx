import { MessageCircleHeart, Smile, Vault } from "lucide-react";
import React from "react";

const AuthImagePattern = ({title, subtitle}) => {
  return (
    <div className="hidden lg:flex bg-bg-light items-center justify-center p-8 relative overflow-hidden">
      <div className="text-center text-text z-10">
        {/* App Icons */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <div className="w-16 h-16 bg-text/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <MessageCircleHeart size={30}></MessageCircleHeart>
          </div>
          <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center">
            <Smile size={30}/>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Vault size={30} />
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="bg-bg-light border-border border-1 rounded-2xl p-6 mb-8 backdrop-blur-sm max-w-sm mx-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-text/30 rounded-full"></div>
              <div className="flex-1 h-3 bg-text/30 rounded"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-text/30 rounded-full"></div>
              <div className="flex-1 h-3 bg-text/30 rounded"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-text/30 rounded-full"></div>
              <div className="flex-1 h-3 bg-text/30 rounded"></div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-3xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-text/60 mb-8 max-w-sm mx-auto">
          {subtitle}
        </p>

      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-text/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-text/20 rounded-full blur-2xl"></div>
    </div>
  );
};

export default AuthImagePattern;
