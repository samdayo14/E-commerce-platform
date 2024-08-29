import React, { useState } from "react";

interface FloatingLabelInputProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name?: string; // Make name optional
}

export default function FloatingLabelInput({
  placeholder,
  type,
  value,
  onChange,
  name,
}: FloatingLabelInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <input
        type={type}
        onChange={onChange}
        name={name}
        id="floatingInput"
        className={`block w-full px-3 py-2 text-base bg-white border border-gray-400 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-black peer transition-all`}
        placeholder=" "
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <label
        htmlFor="floatingInput"
        className={`absolute left-3 top-2 text-gray-500 transition-all duration-200 transform origin-left scale-100 pointer-events-none bg-white px-1
          ${
            focused || value
              ? "scale-75 -translate-y-4 text-black"
              : "text-gray-400"
          }`}
      >
        {placeholder}
      </label>
    </div>
  );
}
