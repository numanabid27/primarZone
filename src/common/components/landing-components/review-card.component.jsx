import React from "react";
import Image from 'next/image';

export default function ReviewCard({ text = '', count, reviewStar, customerProfile, googleIcon }) {
    return (
        <div className="review-card flex flex-col justify-between gap-4 review_card1 wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
            <div>
                <p className="fst-italic ff_helvetica text-lg font-light text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className="flex align-items-center mt-3 gap-2">
                <Image
                    src={customerProfile}
                    alt='Profile Icon'
                    width={50}
                    height={50}
                    className='h-50px'
                />
                <div className="reviews_stars">
                    <p className="ff_helvetica text-base fw-400 text-white">George K - NSW</p>
                    <div className="flex align-items-center py-2">
                        {Array.from({ length: count }).map((_, index) => (
                            <Image
                            key={index}
                            src={reviewStar}
                            alt='Ratings'
                            width={21}
                            height={20}
                            />
                        ))}

                        <Image
                            src={googleIcon}
                            alt='Ratings'
                            width={19}
                            height={18}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}