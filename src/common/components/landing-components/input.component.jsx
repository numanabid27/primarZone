import React from "react";

export default function InputField({type, id, name, placeholder='', className =''}){
    return (
        <input type={type} name={name} id={id} placeholder={placeholder} className={` ${className}`} />
    );
}