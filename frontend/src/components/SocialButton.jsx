import React from "react";
import Button from "./Button";

const SocialButton = ({ icon, provider, ...props }) => {
  return (
    <Button
      variant="outline"
      className="flex items-center justify-center gap-2"
      {...props}
    >
      {icon}
      <span>{provider}</span>
    </Button>
  );
};

export default SocialButton;
