
import React from "react";

const Logo = ({ className = "h-8 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/lovable-uploads/fcf51440-5e08-47ca-b32a-aef22793b79a.png"
        alt="Mattress Delivery Solutions"
        className="h-full w-auto"
      />
    </div>
  );
};

export default Logo;
