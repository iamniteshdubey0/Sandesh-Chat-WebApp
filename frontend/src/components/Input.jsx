import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder,
  className = "",
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-text/80">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border/80 focus:border-primary rounded-lg outline-none transition-all text-text/60 focus:text-text text-[18px] ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
