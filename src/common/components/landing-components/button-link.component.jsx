import React from "react";
import Link from 'next/link';
// import clsx from 'clsx';

export default function InternalLinkButton ({href, children, className = ''}){
    return (
        <a 
        className={
            `ff_helvetica nav-item text-xl font-light lh-normal text-white btn-gradient flex items-center justify-center w-full Start_Treatment__btn m-auto ${className}` 
            
        } 
         href={href}>
            {children}
        </a>
    );
}