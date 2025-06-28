import React from "react";

export default function Input(props) {
  return (
    <input
      type="search"
      className="w-full p-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-header"
      {...props}
    />
  );
}
