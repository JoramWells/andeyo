import React from "react";

export default function Footer() {
  return (
    <footer
      style={{ height: "200px" }}
      className="grid w-full text-sm text-gray-500 h-screen"
    >
      <div className="px-8 py-3">
        <p>jorammwells</p>
        <div className="grid grid-cols-1">
          @Carbon 2002
          <div className="divide-y-[1px]">2007</div>
          <div className="flex justify-center space-x-8">
              <p>Home</p>
              <p>Pricing</p>
          </div>
          <div className="flex justify-center space-x-8">
              <p>Privacy</p>
              <p>Terms</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
