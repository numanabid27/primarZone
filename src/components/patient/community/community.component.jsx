"use client";

import BreadCrump from "@/common/components/breadcrump/breadcrump";
import Heading from "@/common/components/heading/heading";
import React, { useState } from "react";
import { COMMUNITY_TABS, FROUM } from "./community.constant";
import people from "@/common/assets/svgs/people.svg";
import Image from "next/image";
import Comments from "./components/comments.component";

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState(0);

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <Comments />;
      case 1:
        return <Comments />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="mb-6">
        <Heading title="Community Forum" size="h1" />
        <BreadCrump text="Patient / Community Forum" />
      </div>

      <div className="flex gap-3 lg:flex-row flex-col">
        <div className="lg:w-[30%] w-full flex lg:flex-col flex-col-reverse ">
          <div className="bg-secondary rounded-md p-5 lg:mt-0 mt-3">
            <h6 className="text-lg text-white font-semibold pb-[15px]">Ongoing Forums</h6>
            <div className="flex justify-end gap-3 flex-col">
              {COMMUNITY_TABS.map((tab, index) => (
                <button
                  className={`text-white font-medium flex items-center gap-2 rounded py-3 px-[17px] ${activeTab === index ? "activeForum" : "formTabs"}`}
                  onClick={() => {setActiveTab(index)}}
                  key={index.toString()}
                >
                  <Image
                    src={people}
                    alt=""
                    style={{
                      filter: activeTab === index ? "brightness(99)" : "unset",
                    }}
                  />
                  {tab.title}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-secondary rounded-md p-5 mt-3">
            <h6 className="text-lg text-white font-semibold pb-[15px]">Forum Rules</h6>
            <ul className="list pl-[15px]">
              {
                FROUM.map((item, i)=>(
                  <li key={i.toString()} className="text-[#FFFFFFCC] pb-4">{item}</li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="tab-content lg:w-[70%] w-full">{renderTabContent()}</div>
      </div>
    </>
  );
}
