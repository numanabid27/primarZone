"use client"

import BreadCrump from "@/common/components/breadcrump/breadcrump";
import CustomTable from "@/common/components/custom-table";
import Heading from "@/common/components/heading/heading";
import Image from 'next/image';
import spotlight from '@/common/assets/images/spotlight.png';
import ReactEcharts from "echarts-for-react";
import Link from 'next/link';
import { DASHBOARD_TABLE, DASHBOARD_TABLE_MEDICINE, DASHBOARD_TABLE_MESSAGES, option } from "./dashboard.constant"; 

export default function Dashboard(){
    const columns = [
        {Header: 'Treatment', accessor: 'treatment'},
        {Header: 'Date', accessor: 'date'},
        {Header: 'Current Stage', accessor: 'stage'}
    ];

    const columnsMedicines = [
        {Header: 'Product', accessor: 'product'},
        {Header: 'Started', accessor: 'started'},
        {Header: 'Runs Out', accessor: 'runs_out'},
        {Header: 'Reorder on', accessor: 'reorder_on'},
        {Header: 'Refills', accessor: 'refills'},
        {Header: 'Started', accessor: 'started2'}
    ];

    const columnsMessages = [
        {Header: 'Status', accessor: 'status'},
        {Header: 'Created on', accessor: 'created_on'},
        {Header: 'From', accessor: 'form'},
        {Header: 'Subject', accessor: 'subject'}
    ];
    
    return (
        <>
            <Heading title="Dashboard" size="h1"/>
            <BreadCrump text="Patient / Dashboard" />
            <div className="flex flex-col md:flex-row pt-5 mt-4 gap-3">
                <div className="md:w-[68%] w-full">
                    <div className="bg-secondary pb-3 pt-4 px-4 rounded-md">
                        <div className="flex items-center gap-3">
                            <Heading title="Hormonal Health Tracker" size="h2"/>
                            <span className="flex items-center justify-center rounded-xl w-[20px] h-[20px] border-[1px] border-[#A4ACB9] text-[#A4ACB9]">i</span>
                        </div>
                        <div className="table-responsive">
                            <CustomTable 
                                columns={columns}
                                data={DASHBOARD_TABLE}
                                
                            />
                        </div>
                    </div>

                    <div className="bg-secondary pb-3 pt-4 px-4 rounded-md mt-3">
                        <div className="flex items-center gap-3">
                            <Heading title="Medicine Purchases" size="h2"/>
                            <span className="flex items-center justify-center rounded-xl w-[20px] h-[20px] border-[1px] border-[#A4ACB9] text-[#A4ACB9]">i</span>
                        </div>
                        <div className="table-responsive">
                            <CustomTable 
                                columns={columnsMedicines}
                                data={DASHBOARD_TABLE_MEDICINE}
                                
                            />
                        </div>
                    </div>

                    <div className="bg-secondary pb-3 pt-4 px-4 rounded-md mt-3">
                        <div className="flex items-center gap-3">
                            <Heading title="Message Center" size="h2"/>
                            <span className="flex items-center justify-center rounded-xl w-[20px] h-[20px] border-[1px] border-[#A4ACB9] text-[#A4ACB9]">i</span>
                        </div>
                        <div className="table-responsive">
                            <CustomTable 
                                columns={columnsMessages}
                                data={DASHBOARD_TABLE_MESSAGES}
                                
                            />
                        </div>
                    </div>

                </div>
                <div className="md:w-[32%] w-full">
                    <div className="bg-secondary px-4 rounded-md pt-4">
                        <div className="flex items-center justify-between gap-1">
                            <Heading title="Hormonal Health Tracker" size="h2"/>
                            <div className="flex rounded-md p-2 bg-[#1C1F2D]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M1.66699 1.66666V15.8333C1.66699 17.2167 2.78366 18.3333 4.16699 18.3333H18.3337" stroke="#A4ACB9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.16699 14.1667L7.99199 9.70002C8.62533 8.96669 9.75033 8.91668 10.4337 9.60834L11.2253 10.4C11.9087 11.0834 13.0337 11.0417 13.667 10.3083L17.5003 5.83334" stroke="#A4ACB9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className="pb-4">
                        <ReactEcharts option={option} style={{ height: '230px', width: '450px', maxWidth: '100%' }} />
                        </div>
                    </div>
                    <div className="bg-secondary px-4 rounded-md pt-4 pb-3 mt-3">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-1">
                            <Heading title="Notifications (2)" size="h2"/>
                            <button type="button" className="flex rounded-md px-2 py-1 bg-[#1C1F2D] text-[14px] text-[#A4ACB9]">Mark as Read All</button>
                        </div>

                        <div className="bg-[#1C1F2D] p-2 mt-3 rounded-sm">
                            <div className="flex items-center justify-between gap-1">
                                <h3 class="text-[16px] font-semibold text-white">Welcome</h3>
                                <button type="button" className="bg-transparent border-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                        <path d="M11.7871 19.2123L19.2117 11.7877" stroke="#A4ACB9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M19.2117 19.2123L11.7871 11.7877" stroke="#A4ACB9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                            <p class="alert-body-text font-medium text-[11px] mt-2 text-[#A4ACB9]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>

                        <div className="bg-[#1C1F2D] p-2 mt-3 rounded-sm">
                            <div className="flex items-center justify-between gap-1">
                                <h3 class="text-[16px] font-semibold text-white">Treatment Spotlight</h3>
                                <button type="button" className="bg-transparent border-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                        <path d="M11.7871 19.2123L19.2117 11.7877" stroke="#A4ACB9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M19.2117 19.2123L11.7871 11.7877" stroke="#A4ACB9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-2 text-center">
                            <Image
                                src={spotlight}
                                alt="Picture of the author"
                                width={226}
                                height={133}
                                className="rounded-sm md:max-w-[226px] max-w-[unset] w-100 mx-auto"
                                layout="responsive" 
                            />
                            </div>
                            <p class="alert-body-text font-medium text-[11px] mt-2 text-[#A4ACB9]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            {/* <a class="mt-2 flex items-center justify-center text-[14px] font-semibold" href="#">Start Treatment</a> */}
                            <Link className="mt-2 flex items-center justify-center text-sm font-semibold text-[#C92D78] p-2.5 h-[38px] rounded-sm bg-[#c92d7833]"  href="#">Start Treatment</Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}