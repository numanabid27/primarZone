"use client"

import Heading from "@/common/components/heading/heading";

import BreadCrump from "@/common/components/breadcrump/breadcrump";
import TreatmentCard from "@/common/components/treatment-card/treatment-card";
import CustomTable from "@/common/components/custom-table";
import { DASHBOARD_DATA } from "./dashboard3.constant";
import Link from "next/link";
import { GoPencil } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
import { ADD_NEW_TREATMENT } from "../add-new-treatment/add-treatment.constant";

export default function Dashboard3View() {
    const columns = [
        {
          Header: "Created",
          accessor: "created",
         
        },
        {
          Header: "Type",
          accessor: "type",
            render: (_, item) => {
                return <span className={item.status === "Open" ? "text-purple" : "text-primary_white"}>{item.status}</span>;
            },
        },
        {
          Header: "Status",
          accessor: "status",
          render: (_, item) => {
            return <span>{item.status}</span>;
        },
        },
        {
          Header: "From",
          accessor: "from",
            render: (_) => {
                return <div className="flex gap-2 items-center">
                    <Link href="#"><GoPencil className="text-white text-lg" /></Link>
                    <button><RiDeleteBinLine className="text-white text-lg" /></button>
                </div>;
            },
        }
    ];
  return (
    <>
    <Heading title="Dashboard" size="h1" />
    <BreadCrump text="Patient / Dashboard" />
    <div className="flex md:flex-row flex-col gap-3">
        <div className="bg-secondary py-5 px-[31px] rounded-md mt-4 mb-3 md:w-[50%] w-full">
            <h3 className="text-white text-lg font-semibold flex justify-between items-center pb-2 opacity-[0.8]">Treatments <span class="flex items-center justify-center rounded-xl w-[20px] h-[20px] border-[1px] border-[#A4ACB9] text-[#A4ACB9]">i</span></h3>
            <CustomTable data={DASHBOARD_DATA} columns={columns} />
        </div>
        <div className="bg-secondary py-5 px-[31px] rounded-md mt-4 mb-3 md:w-[50%] w-full">
            <h3 className="text-white text-lg font-semibold flex justify-between items-center pb-2 opacity-[0.8]">Welcome <span class="flex items-center justify-center rounded-xl w-[20px] h-[20px] border-[1px] border-[#A4ACB9] text-[#A4ACB9]">i</span></h3>
            <p className="text-white font-light">Welcome to your secure patient portal.  You will be able to apply for treatments, buy medicine, chat with community members and educate yourself.  We'll remind you when you need to re-order medicines or  treatments inline with Australian compliance and standards.  </p><br />
            <p className="text-white font-light">Select your treatment below to get started.</p>
        </div>
    </div>
    <div className="flex gap-3 flex-wrap ">
        {ADD_NEW_TREATMENT.map((item) => {
        return (
            <div className="lg:w-[24%] md:w-[48%]" key={item.id}>
            <TreatmentCard
                title={item.title}
                price={item.price}
                desc={item.desc}
                slug={item.slug}
                action={item.action}
                treatmentIncludes={item.treatmentIncludes}
                otherIncludes={item.otherIncludes}
            />
            </div>
        );
        })}
    </div>
</>
  )
}
