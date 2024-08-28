import React from "react";

export default function TreatmentCard({count, heading, items}){
    return (
        <div className="treatment-card w-full flex flex-col items-center wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
            <div className="counting-box rounded-full flex items-center justify-center">
                <span className="text-5xl font-medium text-white ff_helvetica">{count}</span>
            </div>

            <h2 className="ff_helvetica gridient__txt text-4xl font-medium">{heading}</h2>
            <ul>
                
                {items.map((item,index)=> (
                    <li key={index} className="ff_helvetica text-lg font-light text-white">{item}</li>
                ))}
            </ul>
        </div>
    );
}