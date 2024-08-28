"use client"

import Image from "next/image";
import { SYMPTOMS } from "../treatment-stepper.constant";
import tick from "@/common/assets/svgs/tick-circle.svg";
import Card from "@/common/components/steper-card";

const { useState } = require("react");
const SymptomsForm = () => {
    const [isChecked, setIsChecked] = useState();
    const [isItem, setIsItem] = useState(false);
    return (
      <div className="mt-7">
        <p className="text-white text-sm mb-5">
          Please ensure you check them as yes, even if you have them occassionally
        </p>
        <div className="flex gap-[26px]">
          <div className="w-[50%]">
            <p className="text-white font-medium opacity-[0.8]">
              Select Symptoms*
            </p>
            <div class="symptoms-wrapper mt-2 pt-1 flex flex-wrap gap-2">
              {SYMPTOMS.map((item, i) => {
                return (
                  <div
                    onMouseEnter={() => {
                      setIsChecked(item.id);
                      setIsItem(item);
                    }}
                  >
                    <input
                      class="symptoms-field"
                      type="checkbox"
                      name={item.name}
                      id={item.id}
                    />
                    <label
                      for={item.id}
                      class="syptoms-label bg_linkBlack rounded flex items-center gap-3"
                      hover-text="hoverTextOne"
                    >
                      <Image src={tick} alt="" class="selected-icon" />
                      <span class="text-white">{item.title}</span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[50%]">
            <p className="text-white font-medium opacity-[0.8]">
              Symptom Considerations
            </p>
            <Card>
              {isChecked && (
                <>
                  <h6 className="text-white opacity-[0.8] text-xs font-semibold mb-3">
                    {isItem.shortDesc}
                  </h6>
                  <ul className="ml-4">
                    {isItem.longdDesc.map((list, i) => {
                      return (
                        <li
                          key={i.toString()}
                          className="text-white mb-3 font-medium list-decimal text-sm"
                        >
                          <span className="text-base">{list.title} </span>{" "}
                          {list.desc}
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    );
};

export default SymptomsForm;