"use client"

import React, { useState } from "react";
import Heading from "@/common/components/heading/heading";
import BreadCrump from "@/common/components/breadcrump/breadcrump";
import { FAQS, PHOTOS_VIDOES } from "./education-hub.constant";
import Button from "@/common/components/button/button";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import playBtn from "@/common/assets/svgs/play-btn.svg";
import Link from "next/link";
import Accordian from "@/common/components/accodian/accordian";

export default function EducationHubView() {
  const [activeTab, setActiveTab] = useState(0);
  const [isSelect, setIsSelect] = useState("");
  const [isSelectHide, setIsSelectHide] = useState(false);

  const tabs = ["FAQ’s", "Podcasts & Videos"];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <FAQ faq={FAQS} />;
      case 1:
        return <Photos PHOTOS_VIDOES={PHOTOS_VIDOES} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="mb-6">
        <Heading title="Education Hub" size="h1" />
        <BreadCrump text="Patient / Education Hub" />
      </div>
      <div className="flex justify-between md:flex-row flex-col-reverse ">
        <div className="relative md:w-[50%] w-full lg:mt-0 mt-5">
          <button
            onClick={() => {
              setIsSelectHide(!isSelectHide);
            }}
            className="bg-secondary flex w-full items-center justify-between text-white lg:text-xl text-[17px] font-semibold py-2 lg:px-[22px] px-[15px] rounded-[4px]"
          >
            {`${isSelect ? isSelect : "Men’s Hormone Health (TRT)"} `}
            {!isSelectHide ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </button>
          {isSelectHide && (
            <ul className="absolute bg-secondary w-full top-[51px] py-2 rounded-[4px]">
              {["Men’s Hormone Health (TRT)", "Men’s Hormone Health"].map(
                (item, i) => (
                  <li
                    onClick={() => {
                      setIsSelect(isSelect === i ? null : item);
                      setIsSelectHide(false);
                    }}
                    className="text-xl pb-2 border-[#ffffff9f] px-[22px] border-b font-semibold mb-1 cursor-pointer text-white"
                    key={i.toString()}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          )}
        </div>
        <div className="flex justify-end gap-3">
          {tabs.map((tab, index) => (
            <Button
              text={tab}
              onClick={() => setActiveTab(index)}
              isbg={activeTab === index ? "#6122B3" : "#131922"}
            />
          ))}
        </div>
      </div>
      <div className="tab-content mt-5">{renderTabContent()}</div>
    </>
  );
}

export const FAQ = ({ faq }) => {
  const [isHide, setIsHide] = useState(faq[0]?.id);
  return (
    <Accordian ACCORDIAN_DATA={faq} setIsHide={setIsHide} isHide={isHide} color="bg-secondary" />
  );
};

export const Photos = ({ PHOTOS_VIDOES }) => {
  return (
    <div className="flex md:flex-row flex-col gap-[19px] flex-wrap">
      {PHOTOS_VIDOES.map((item) => (
        <div
          key={item.id}
          className="bg-secondary md:w-[32%] w-full rounded-md py-4 px-4 mb-1"
        >
          <div className="relative">
            <Image src={item.picture} alt="" />
            <Link href="#" className="absolute top-0 right-0 bottom-0 left-0 m-auto h-fit w-fit">
              <Image src={playBtn} alt="" />
            </Link>
          </div>
          <p className="text-white font-medium py-6">{item.desc}</p>
          <span className="text-white font-medium pb-3 block">
            {item.author}
          </span>
        </div>
      ))}
    </div>
  );
};
