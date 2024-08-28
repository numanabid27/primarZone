import React from "react";
import Image from 'next/image';

export default function SocialMediaCard({ cardImage, instagramIcon, text }) {
    return (
        <div className="sm_cards wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
            <div className="over__hiden">
                <Image
                    src={cardImage}
                    alt="User picture"
                    width={286}
                    height={199}
                    className="max-w-[286px]"
                    layout="responsive"
                />
            </div>

            <p className="fst-italic ff_helvetica text-lg font-light text-white mt-6">{text}</p>
            <a className='mt-8 flex justify-center' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Image
                    src={instagramIcon}
                    alt='Instagram'
                    width={47}
                    height={48}
                />
            </a>

        </div>
    );
}