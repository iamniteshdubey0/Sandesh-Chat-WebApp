import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClasses =
    "flex items-center justify-center gap-2 cursor-pointer w-full py-2 px-3 rounded-lg font-medium transition-all duration-200 focus:outline-none";
  const variants = {
    primary: "bg-highlight hover:bg-highlight/80 text-text",
    outline: "border border-border hover:bg-bg-light text-text/70",
  };
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
