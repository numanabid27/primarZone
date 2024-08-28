"use client"

import BreadCrumps from "@/common/components/breadcrump/breadcrump";
import cartIcon from "@/common/assets/svgs/bag-tick.svg"
import CustomTable from "@/common/components/custom-table";
import addCard from "@/common/assets/images/addtocard.png"
import allCard from "@/common/assets/svgs/shopping-cart-all.svg"
import { SCRIPT_DATA } from "./script.constant";
import Image from "next/image";
import Heading from "@/common/components/heading/heading";
import Button from "@/common/components/button/button";

export default function ScriptView() {

 
  const columns = [
    {
      Header: "Image",
      accessor: "image",
      render: (_, item) => {
        return <Image src={item.image} alt="" />;
      },
    },
    {
      Header: "Treatment",
      accessor: "treatment",
      render: (_, item) => {
        return <div>
            <p className="flex gap-1 whitespace-nowrap pb-1">Name: <span className="text-[#FFFFFFCC]">{item.treatment.name}</span></p>
            <p className="flex gap-1 whitespace-nowrap">Volume: <span className="text-[#FFFFFFCC]">{item.treatment.volume}</span></p>
        </div>;
      },
    },
    {
      Header: "Description",
      accessor: "description",
      render: (_, item) => {
        return <span className="text-[#FFFFFFCC]">{item.description}</span>;
      },
    },
    {
      Header: "Approved Qty",
      accessor: "approved",
    },
    {
      Header: "Available",
      accessor: "available",
    },
    {
      Header: "Unit Cost",
      accessor: "cost",
    },
    {
      Header: "Add to Cart",
      accessor: "cart",
      render: (_) => {
        return <button>
            <Image src={addCard} alt="" />
        </button>;
      },
    },
  ];

  let totalCost = 0;
  SCRIPT_DATA.forEach(item => {
    let costAsInteger = parseInt(item.cost.replace('$', ''));
    totalCost += costAsInteger;
  });

  return (
    <>
      <div className="mb-6 flex md:flex-row flex-col justify-between md:items-center items-start">
        <div>
          <Heading title="Scripts" size="h1" />
          <BreadCrumps text="Patient / Scripts" />
        </div>
        <div className="md:mt-0 mt-4">
          <Button
            text="Go to Checkout"
            icon={<img src={cartIcon} alt="" />}
            isbg="#131922"
          />
        </div>
      </div>
      <div className="bg-secondary pt-5 pb-5 px-6 rounded-md">
        <div className="flex gap-1 justify-between overflowScript">
            <div className="md:w-[24%] w-full">
              <ScriptTitle title="Created" date="25 Dec, 2024" />
            </div>
            <div className="md:w-[24%] w-full">
              <ScriptTitle title="Expires" date="25 Apr, 2025" />
            </div>
            <div className="md:w-[24%] w-full">
              <ScriptTitle title="Doctor" date="Dr Sivam B." />
            </div>
            <div className="md:w-[24%] w-full">
              <ScriptTitle title="Script#" date="DSAJ-12345" />
            </div>
        </div>
        <CustomTable data={SCRIPT_DATA} columns={columns} />

        <div className="flex items-center justify-between mt-5">
          <p className="text-white text-lg font-semibold">Total: ${totalCost}</p>
          <Button text="Add all to Cart" icon={<img src={allCard} alt="" />} isbg="#6122B3" />
        </div>
      </div>
    </>
  );
}


export const ScriptTitle = ({title, date}) => {
  return(
    <div className="bg-[#1C1F2D] flex md:gap-0 gap-2 rounded py-[11px] justify-between px-3">
      <p className="text-[#A4ACB9] text-sm font-medium whitespace-nowrap">{title}</p>
      <p className="text-white text-sm font-medium whitespace-nowrap">{date}</p>
    </div>
  )
}