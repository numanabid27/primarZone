"use client";
import React from "react";
import Image from 'next/image';
import Link from 'next/link';

import footerLogo from '@/common/assets/images/landing-page/footer_logo.png';


export default function LandingFooter(){
    return(
        <>
        <section className="footer_sec wow slideInUp" data-wow-duration="1.5s" data-wow-delay="0s">
                <div className="container">
                    <div className="footer_links">
                        <div className="flex w-full flex-wrap gap-3">
                            <div className="Company_links">
                                <h2 className="ff_helvetica text-[26px] font-bold text-white">Company</h2>
                                <div className="flex flex-col gap-2 mt-[45px]">
                                    <Link href="#" className='ff_helvetica text-lg font-light text-white'>Security</Link>
                                    <Link href="#" className='ff_helvetica text-lg font-light text-white'>About Us</Link>
                                    <Link href="#" className='ff_helvetica text-lg font-light text-white'>People</Link>
                                    <Link href="#" className='ff_helvetica text-lg font-light text-white'>Music</Link>
                                </div>

                            </div>
                            <div className="Legal_Information_links">
                                <h2 className="ff_helvetica text-[26px] font-bold text-white">Legal Information</h2>
                                <div className="flex flex-col gap-2 mt-[45px]">
                                    <Link href="#" className='ff_helvetica text-lg font-light text-white'>Personal Data</Link>
                                    <Link href="#" className='ff_helvetica text-lg font-light text-white'>Privacy Statement</Link>
                                    <Link href="#" className='ff_helvetica text-lg font-light text-white'>Security Agreement</Link>
                                    <Link href="#" className='ff_helvetica text-lg font-light text-white'>Other Stuff</Link>
                                </div>

                            </div>
                        </div>
                        <div className="contact_links">
                            <h2 className="ff_helvetica text-[40px] font-bold text-white leading-none">Are you <span className="gridient__txt">interested</span>  in Primal Zone?</h2>
                            <button type="button" className="nav-item text-xl fw-normal lh-noraml text-white btn-gradient flex items-center justify-center Start_Treatment__btn footer_conatct_btn mt-[55px]">Submit</button>
                        </div>
                    </div>
                    <div className="footer_logo mt-41">
                        <Link href="#" className='ff_helvetica text-lg font-light text-white'>
                            <Image
                                src={footerLogo}
                                alt='logo'
                                width={548}
                                height={87}
                                className='max-w-[548px]'
                                layout='responsive'
                            />
                        </Link>
                        <p className="ff_helvetica text-lg font-light text-white mt-41">69 Roslyn Street, Rushcutters Bay NSW 2011</p>
                    </div>
                    <div className="footer_bar flex flex-wrap align-items-center gap-3">
                        <div className="footer_bar_links flex gap-4">
                            <a className="ff_helvetica text-lg font-light text-white" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a className="ff_helvetica text-lg font-light text-white" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram </a>
                            <a className="ff_helvetica text-lg font-light text-white" href="https://www.x.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a className="ff_helvetica text-lg font-light text-white" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                        <div className="footer_bar_text">
                            <p className="ff_helvetica text-lg font-light text-white"> 2024 © Primal Zone</p>
                            <Link href="/patient" className='ff_helvetica text-lg font-light text-white'>Dashboard</Link>
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
}