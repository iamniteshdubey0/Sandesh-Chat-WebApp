import { LogOut, MessageCircle, Settings, User } from "lucide-react";
import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <nav className="fixed w-full z-40 transition-all duration-300 py-2 bg-bg backdrop-blur-md shadow-xs">
      <div className="flex items-center justify-between px-4 py-2 md:py-1">
        {/* left: Logo and Brand Name */}
        <div className="flex-1 flex items-center justify-start space-x-2">
          <MessageCircle></MessageCircle>
          <span className="text-xl font-semibold text-text inline">
            Sandesh
          </span>
        </div>

        {/* Right: setting, profile & logout */}
        <div className="flex items-center space-x-2">
          <Link
            to={"/settings"}
            className="flex items-center justify-center space-x-1  text-text/70 cursor-pointer border-1 border-bg hover:bg-bg-light hover:border-border py-1 px-2 rounded-md"
          >
            <Settings size={22}></Settings>
            <span className="text-md">Settings</span>
          </Link>

          {authUser && (
            <>
              <Link
                to={"/profile"}
                className="flex items-center justify-center space-x-1  text-text/70 cursor-pointer border-1 border-bg hover:bg-bg-light hover:border-border py-1 px-2 rounded-md"
              >
                <User></User>
                <span className="text-md">{authUser.fullName}</span>
              </Link>

              <button
                onClick={logout}
                className="flex items-center justify-center space-x-1  text-text/70 cursor-pointer border-1 border-bg hover:bg-bg-light hover:border-border py-1 px-2 rounded-md"
              >
                <LogOut></LogOut>
                <span className="text-md">LogOut</span>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
