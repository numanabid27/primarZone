"use client"
import { useState } from "react";
import { HISTORY } from "../treatment-stepper.constant";

const LifeStyle = () => {
    const [checkedItems, setCheckedItems] = useState(false);
  
    return (
      <div className="mt-7">
        <p className="text-white text-sm mb-5">
          Your lifestyle choices may be the reason you are not at your peak, so
          please be specific and detailed in your answers.
        </p>
        {HISTORY.map((historyItem, i) => {
          return (
            <div className="mb-4" key={i.toString()}>
              <input
                id={historyItem.id}
                type="checkbox"
                onChange={() => {
                  setCheckedItems(historyItem.title);
                }}
                name={historyItem.name}
                class="w-4 h-4 accent-[#6122B34D] focus:border focus:border-[red] text-white"
              />
              <label
                for={historyItem.id}
                class="ms-2 text-base font-medium text-white"
              >
                {historyItem.title}
              </label>
            </div>
          );
        })}
      </div>
    );
};

export default LifeStyle;