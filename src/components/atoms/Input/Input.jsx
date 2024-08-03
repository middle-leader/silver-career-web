import React, { useState } from "react";

function Input({ type, placeholder, label }) {
  const [value, setValue] = useState("");

  return (
    <label className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mb-8 h-12 w-full px-6 text-sm border-[#CCCCCC] border rounded-lg border-opacity-50 outline-none 
              focus:border-[#999999] transition duration-200"
        placeholder={placeholder}
      />
      <span
        className="text-base text-gray-400 text-opacity-80 absolute left-0 top-2 mx-4 px-2 transition duration-200
            input-text"
      >
        {label}
      </span>
    </label>
  );
}
export default Input;
