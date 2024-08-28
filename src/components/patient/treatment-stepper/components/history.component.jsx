"use client"

import { useState } from "react";
import { HISTORY } from "../treatment-stepper.constant";

const History = () => {
    const [checkedItems, setCheckedItems] = useState({});
    const handleCheckboxChange = (id) => {
      setCheckedItems((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
      }));
    };
  
    return (
      <div className="mt-7">
        <p className="text-white text-sm mb-5">
          In this section it is CRITICAL you answer with detail and precision.{" "}
        </p>
        {HISTORY.map((historyItem, i) => {
          return (
            <div className="mb-4" key={i.toString()}>
              <input
                id={historyItem.id}
                type="checkbox"
                onChange={() => handleCheckboxChange(historyItem.id)}
                checked={checkedItems[historyItem.id] || false}
                name={historyItem.name}
                class="w-4 h-4 accent-[#6122B34D] focus:border focus:border-[red] text-white"
              />
              <label
                for={historyItem.id}
                class="ms-2 text-base font-medium text-white"
              >
                {historyItem.title}
              </label>
              {historyItem.description && checkedItems[historyItem.id] && (
                <p className="bg-[#1C1F2D] border text-white text-sm my-2 border-[#a4acb933] rounded-[6px] py-[10px] px-[15px]">
                  {historyItem.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    );
};
export default History;