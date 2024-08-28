import React from "react";
import Image from 'next/image';
import VideoPopUp from "./video-popup";

export default function JourneyCard({imgSrc, pText, h2Text, videoId, onClick }){
    return (
        <>
        <div className="H__J_card c2_bg wow slideInUp" data-wow-duration="1.5s" data-wow-delay="0s">
            <div className="over__hiden relative youtube-btn-wrapper" id={videoId} onClick={()=> onClick(videoId)}>
                <button type="button" className="absolute youtube-btn bg-transparent border-0">
                    <svg width="44" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" fill="#FFF" />
                    </svg>
                </button>
                <Image
                    src={imgSrc}
                    alt="Card image"
                    width={308}
                    height={223}
                    className="max-w-[308px]"
                    layout="responsive"
                />
            </div>
            <p className="text-lg text-white font-light ff_helvetica mt-3">{pText}</p>
            <h2 className="text-lg text-white font-medium ff_helvetica mt-4">{h2Text}</h2>
        </div>

        </>
    );
}