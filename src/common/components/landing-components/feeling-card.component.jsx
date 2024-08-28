"use client";

import React from 'react';

export default function FeelingCard({ imageUrl, imgWidth, imgHeight, heading, text }) {
    return (
        <div className="cd__bx">
            <div className="card-box wow slideInDown" data-wow-duration="1.5s" data-wow-delay="0s">
                <div className="icon-container">
                    <img src={imageUrl} width={imgWidth} height={imgHeight} alt="Icon" />
                </div>
                <h2 className="mt-4 pt-3 text-white text-2xl font-bold">{heading}</h2>
                <p className="text-white text-lg font-normal">{text}</p>
            </div>
        </div>
    );
}
