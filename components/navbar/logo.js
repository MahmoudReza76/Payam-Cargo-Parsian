import React from "react";

function Logo() {
  return (
    <div className="relative inline-flex flex-col items-center">
      <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800">
        <span className="text-lg tracking-wide">PAYAM</span>
        <span className="text-sm mx-1 text-gray-600">|</span>
        <span className="text-lg tracking-wide text-blue-700">CARGO</span>
      </div>

      {/* Single decorative line */}
      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </div>
  );
}

export default Logo;
