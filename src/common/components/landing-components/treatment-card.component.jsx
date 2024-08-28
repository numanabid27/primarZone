"use client";

import Link from 'next/link';
import React from 'react';

export default function PricingCard({
    title,
    price,
    gstInfo,
    refundPolicy,
    buttonText,
    whatsIncludedTitle,
    whatsIncludedItems,
    medicationTitle,
    medicationItems,
}) {
    return (
        <div className="lg:w-[32%] md:w-[50%] py-2">
            <div className="pricing-card h-full t1 wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                <p className="text-lg font-light text-white text-center ff_helvetica">{title}</p>
                <h2 className="mt-33 text-5xl font-light text-white text-center ff_abz">
                    {price} <span className="text-xl">{gstInfo}</span>
                </h2>
                <p className="text-lg lh-normal font-light text-white text-center ff_helvetica">{refundPolicy}</p>
                
                <Link href="/treatments" className="mt-33 nav-item text-xl font-normal lh-noraml text-white btn-gradient flex items-center justify-center w-full mx-auto bg_grey Start_Treatment__btn ff_helvetica">{buttonText}</Link>
                <hr className="horizontal-line w-full my-[33px]" />
                <p className="text-lg lh-normal font-medium text-white pt-3 text-center ff_helvetica">{whatsIncludedTitle}</p>
                <ul className="list-unstyled ps-4 mt-2">
                    {whatsIncludedItems.map((item, index) => (
                        <li key={index} className="text-lg lh-normal font-light text-white mt-2 text-center ff_helvetica">
                            {item}
                        </li>
                    ))}
                </ul>
                <hr className="horizontal-line w-full my-[33px]" />
                <p className="text-lg lh-normal font-medium text-white pt-3 text-center">{medicationTitle}</p>
                <ul className="list-unstyled ps-4 mt-2">
                    {medicationItems.map((item, index) => (
                        <li key={index} className="text-lg lh-normal font-light text-white mt-2 text-center">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
