import React from 'react'


export default function Button({text, icon, onClick, isbg, type, disabled}) {
  return (
    <button 
    type={type}
    onClick={onClick}
    style={{ backgroundColor: isbg }}
    disabled={disabled}
    className={`text-white md:text-base text-sm font-semibold flex items-center gap-2 rounded py-[10px] px-[17px]`}>
        {icon && icon}
        {text}
    </button>
  )
}
