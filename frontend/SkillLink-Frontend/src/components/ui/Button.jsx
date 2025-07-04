import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button className="bg-blue-500 text-black px-4 py-2 rounded-md" {...props}>
      {children}
    </button>
  );
}
