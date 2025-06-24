
import React from "react";

const Logo = ({ className = "h-8 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        viewBox="0 0 200 60"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Mattress icon */}
        <rect
          x="8"
          y="20"
          width="40"
          height="20"
          rx="10"
          fill="#3B82F6"
          stroke="#1E40AF"
          strokeWidth="2"
        />
        <rect
          x="12"
          y="24"
          width="32"
          height="2"
          rx="1"
          fill="#1E40AF"
        />
        <rect
          x="12"
          y="28"
          width="32"
          height="2"
          rx="1"
          fill="#1E40AF"
        />
        <rect
          x="12"
          y="32"
          width="32"
          height="2"
          rx="1"
          fill="#1E40AF"
        />
        
        {/* Delivery truck outline */}
        <rect
          x="28"
          y="15"
          width="20"
          height="12"
          rx="2"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="1.5"
        />
        <circle cx="33" cy="30" r="2" fill="#3B82F6" />
        <circle cx="43" cy="30" r="2" fill="#3B82F6" />
        
        {/* Company name */}
        <text
          x="60"
          y="25"
          className="text-lg font-bold"
          fill="#1E40AF"
          fontSize="14"
          fontFamily="Arial, sans-serif"
        >
          MATTRESS DELIVERY
        </text>
        <text
          x="60"
          y="40"
          className="text-sm font-semibold"
          fill="#3B82F6"
          fontSize="12"
          fontFamily="Arial, sans-serif"
        >
          GROUP
        </text>
      </svg>
    </div>
  );
};

export default Logo;
