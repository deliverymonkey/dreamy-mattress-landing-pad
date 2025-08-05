
import React from "react";

const Logo = ({ className = "h-12 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/lovable-uploads/0e45a14e-d302-42a1-84f4-5b3824f3c4db.png"
        alt="Mattress Delivery Solutions"
        className="h-full w-auto"
      />
    </div>
  );
};

export default Logo;
