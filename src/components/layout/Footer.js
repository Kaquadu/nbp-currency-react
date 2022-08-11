import React from "react";

export default function Footer() {
  return (
    <footer className="width-full bg-gray-900 flex justify-end flex-wrap px-8 py-4">
      <div className="h-full text-gray-100 flex flex-wrap text-end">
        <span className="w-full">
          React Learning Application
        </span>
        <span className="text-sm w-full">
          Created by Kuba Kowalczykowski
        </span> 
      </div>
    </footer>
  );
}