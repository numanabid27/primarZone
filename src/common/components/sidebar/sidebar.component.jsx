"use client"

import React, { useEffect, useState } from "react";
import logo from "../../assets/svgs/logo.svg";
import { usePathname } from 'next/navigation'
import dasboard from "../../assets/svgs/dashboard.svg";
import treatment from "../../assets/svgs/treatment.svg";
import script from "../../assets/svgs/script.svg";
import community from "../../assets/svgs/community.svg";
import edu from "../../assets/svgs/education.svg";
import cart from "../../assets/svgs/shopping-cart.svg";
import msg from "../../assets/svgs/sms.svg";
import call from "../../assets/svgs/headphone.svg";
import user from "../../assets/svgs/user-octagon.svg";
import Link from "next/link";
import Image from "next/image";
import useWidth from "@/common/hooks/use-dimenstion.hook";
import { FaBars } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";

export default function Sidebar() {
    let pathname = usePathname();
    const [isMenu, setIsMenu] = useState(false);
    const {windowWidth} = useWidth();
    useEffect(() => {
        setIsMenu(false)
    }, [pathname]);
    const navLink = [
       [ {
        title: "Dashboard",
        icon: dasboard,
        url: "/patient",
    },
    {
        title: "Treatments",
        icon: treatment,
        url: "/patient/treatments",
    },
    {
        title: "Scripts",
        icon: script,
        url: "/patient/scripts",
    },
    {
        title: "Community",
        icon: community,
        url: "/patient/community",
    },
    {
        title: "Education Hub",
        icon: edu,
        url: "/patient/education-hub",
    }],

    [ {
            title: "Cart",
            icon: cart,
            url: "#",
        },
        {
            title: "Message",
            icon: msg,
            url: "/patient/message",
        },
        {
            title: "Support",
            icon: call,
            url: "#",
        },
        {
            title: "Profile",
            icon: user,
            url: "#",
        }]

       
    ];
   
    return (
        <>
            <button onClick={()=>{setIsMenu(true)}} className={`${windowWidth && windowWidth < 767 ? "block" : ""} absolute md:hidden top-[34px] right-[22px]`}><FaBars className="text-white" /></button>
            <div className={isMenu ? "w-full bg-[#00000087] absolute right-0 left-0 top-0 bottom-0 h-full" : ""}>
                <nav className={`${ isMenu ? "addClass" : "removeClass" } bg-dark z-10 py-6 w-[0%] lg:px-5 px-3 h-full overflow-y-auto scroll fixed top-0 bottom-0 xl:w-[19%] lg:w-[22%] md:w-[23%]`}>
                    <button onClick={()=>setIsMenu(false)} className="md:hidden block absolute right-0 top-[6px]"><IoCloseCircleSharp className="text-white" /></button>
                    <Image src={logo} alt="" className="w-full" />
                    <div className="h-[96%] flex justify-between flex-col">
                        <ul className="nav_list mt-8">
                            {navLink[0].map((item, i) => {
                                const isActive = pathname === item.url;
                                return (
                                    <li key={i.toString()} className="mb-3">
                                        <Link
                                            href={`${item.url}`}
                                            className={`${
                                                isActive ? "bg-primary" : "bg-secondary"
                                            } flex text-white lg:gap-4 gap-2  rounded py-4 lg:px-5 px-3`}
                                        >
                                            <Image src={item.icon} alt="" />
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <ul className="nav_list mt-8">
                            {navLink[1].map((item, i) => {
                                const isActive = pathname === item.url;
                                return (
                                    <li key={i.toString()} className="mb-3">
                                        <Link
                                            href={`${item.url}`}
                                            className={`${
                                                isActive ? "bg-primary" : "bg-secondary"
                                            } flex text-white gap-4  rounded py-4 px-5`}
                                        >
                                            <Image src={item.icon} alt="" />
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
            
            
        </>
    );
}