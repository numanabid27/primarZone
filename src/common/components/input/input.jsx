import React from "react";

const InputField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  className = "",
  placeholder = " ",
  icon = null,
  ...props
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        className={`block rounded-md w-full text-white px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-[#1C1F2D] border-[#a4acb933] border appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {icon && (
        <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none text-white opacity-[0.7] text-sm">
          {icon}
        </span>
      )}
      <label
        htmlFor={id}
        className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white opacity-[0.8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
