"use client"

import Heading from "@/common/components/heading/heading";
import treatmentData from "./dashboard-4.constant";
import ReactEcharts from "echarts-for-react";
import Image from 'next/image';
import React from "react";

import medicine from '@/common/assets/images/dashboard-4-medicine.png';
import InternalLinkButton from "@/common/components/landing-components/button-link.component";
import { option } from "../dashboard/dashboard.constant";

export default function Dashboard4View() {
    return (
        <>
            <div className="flex gap-3">

                {treatmentData.map((item, index) => (
                    <div className={`px-6 pt-5 pb-7 ${item.value == 0 ? 'bg-[#242735]' : 'bg-[#AB4848]'} rounded-md w-[24%]`}>
                        <div className="flex items-center gap-3 justify-between">
                            <Heading title={item.title} size="h2" />
                            <span className="flex items-center justify-center rounded-xl w-[20px] h-[20px] border-[1px] border-[#A4ACB9] text-[#A4ACB9]">i</span>
                        </div>
                        <p className="text-8xl text-center text-white mt-4">{item.value}</p>
                        <p className="text-xs text-center text-white pb-3.5">{item.description}</p>
                    </div>

                ))}

            </div>

            <div className="flex gap-3 mt-5">
                <div className="bg-secondary px-5 rounded-md pt-4">
                    <div className="flex items-center justify-between gap-1">
                        <Heading title="Hormonal Health Tracker" size="h2" />
                        <div className="flex rounded-md p-2 bg-[#1C1F2D]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M1.66699 1.66666V15.8333C1.66699 17.2167 2.78366 18.3333 4.16699 18.3333H18.3337" stroke="#A4ACB9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.16699 14.1667L7.99199 9.70002C8.62533 8.96669 9.75033 8.91668 10.4337 9.60834L11.2253 10.4C11.9087 11.0834 13.0337 11.0417 13.667 10.3083L17.5003 5.83334" stroke="#A4ACB9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="pb-4">
                        <ReactEcharts option={option} style={{ height: '230px', width: '450px', maxWidth: '100%' }} />
                    </div>
                </div>

                <div className="bg-secondary p-5 rounded-md w-full">
                    <div className="flex items-center justify-between gap-1">
                        <Heading title="Hormonal Health Tracker" size="h2" />
                        <button type="button" className="bg-transparent border-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path d="M11.7891 19.2129L19.2137 11.7883" stroke="#A4ACB9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M19.2137 19.2117L11.7891 11.7871" stroke="#A4ACB9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>

                    <div className="flex mt-2.5 gap-6">
                        <Image
                            src={medicine}
                            alt="Medicine"
                            width={273}
                            height={254}
                            layout="responsive"
                            className="max-w-[273px]"
                        />
                        <div className="flex flex-col justify-between h-auto">
                            <div>
                                <h2 className="text-sm font-medium text-white">PEPTIIDES</h2>
                                <p className="text-sm text-white mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                <p className="text-sm text-white mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <InternalLinkButton href="#" children="Start Peptides Treatment" className='mt-3.5 mb-0 bg-[#6122B3] p-[11px] rounded-sm font-medium' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}