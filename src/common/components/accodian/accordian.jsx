import React from "react";

export default function Accordian({ACCORDIAN_DATA, setIsHide, isHide, color}) {
  return (
    <div>
      {ACCORDIAN_DATA.map((item) => {
        return (
          <div
            key={item.id}
            className={`mb-5 ${color} py-[14px] rounded px-4 cursor-pointer faq-item ${
              isHide === item.id ? "expanded" : ""
            }`}
            onClick={() => {
              setIsHide(isHide === item.id ? null : item.id);
            }}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-white md:text-lg text-base font-semibold">
                {item.title}
              </h4>
              <span className="text-white text-lg">
                {isHide === item.id ? "-" : "+"}
              </span>
            </div>
            {isHide === item.id && (
              <div className="pt-3 pl-5">
                {item.desc.map((innerItem) => {
                  return (
                    <p className="text-white pb-5 md:text-base text-sm">
                      {innerItem}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
