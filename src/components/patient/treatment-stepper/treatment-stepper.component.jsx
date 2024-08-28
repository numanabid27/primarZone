"use client";

import BreadCrump from "@/common/components/breadcrump/breadcrump";
import Button from "@/common/components/button/button";
import play from "@/common/assets/svgs/play-circle.svg";
import Image from "next/image";
import Heading from "@/common/components/heading/heading";
import { useState } from "react";
import steper from "@/common/assets/images/submenu.png";
import {
  HISTORY,
  INDENTIFY_LIST,
  STEPPER,
  SUB_STEPS
} from "./treatment-stepper.constant";

import Exclamation from "@/common/components/excalmation";
import { RiDeleteBin5Line } from "react-icons/ri";
import submenuBlue from "@/common/assets/svgs/blue-submenu.svg"

import ContactForm from "./components/contact-form.component";
import SymptomsForm from "./components/symptoms-form.component";
import DavLee from "./components/dav-lee.component";
import Medication from "./components/medication.component";
import History from "./components/history.component";
import LifeStyle from "./components/life-cycle.component";
import IndentifyProof from "./components/idnetify-proof.component";
import SupportingDocument from "./components/supporting-document";
import ConsultingFee from "./components/consolting-fee.component";

export default function TreatmentForm({ treatment }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentInnerStep, setCurrentInnerStep] = useState(0);

  const handleNext = () => {
    if (currentStep === 0 && currentInnerStep < SUB_STEPS.length - 1) {
      setCurrentInnerStep(currentInnerStep + 1);
    } else if (currentStep < STEPPER.length - 1) {
      setCurrentStep(currentStep + 1);
      setCurrentInnerStep(0);
    }
  };

  const handlePrevious = () => {
    if (currentStep === 0 && currentInnerStep > 0) {
      setCurrentInnerStep(currentInnerStep - 1);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCurrentInnerStep(0);
    }
  };

  const renderInnerStepContent = () => {
    switch (currentInnerStep) {
      case 0:
        return <ContactForm />;
      case 1:
        return <SymptomsForm />;
      case 2:
        return <DavLee />;
      case 3:
        return <Medication />;
      case 4:
        return <History />;
      case 5:
        return <LifeStyle />;
      default:
        return null;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return renderInnerStepContent();
      case 1:
        return <IndentifyProof />;
      case 2:
        return <SupportingDocument />;
      case 3:
          return <ConsultingFee treatmentPrice={treatment.price} />;

      default:
        return null;
    }
  };

  return (
    <>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <Heading title="Treatments" size="h1" />
          <BreadCrump
            text={`Patient / Create new Treatment / ${treatment.title}`}
          />
        </div>
        <div>
          <Button
            text="Instructional Video"
            isbg="#6122B3"
            icon={<Image src={play} arc="" />}
          />
        </div>
      </div>

      <div className="text-center">
        <Heading title={treatment.title} size="h3" />
      </div>

      {/* stepper form */}
      <div className="mt-5">
        <ul className="flex stepper_list justify-center">
          {STEPPER.map((steperItem, i) => {
            return (
              <>
                <li
                  key={i.toString()}
                  className={`text-center w-[20%] relative ${i <= currentStep ? "activeMain_Step" : ""}`}
                >
                  {i <= currentStep ? 
                    <Image src={submenuBlue} alt="" className="mx-auto" /> : 
                    <Image src={steper} alt="" className="mx-auto" />
                  }
                  
                  <p className="text-white pt-3 text-lg absolute left-0 right-0 whitespace-nowrap">
                    {steperItem.title}
                  </p>
                  {i < STEPPER.length - 1 && (
                    <span className={`${i <= currentStep ? "bg-[#9B4EFF] dots-blue" : "bg-white dots-white"} absolute dots top-0 bottom-0 m-auto w-[69%] h-[1px] right-[-35%]`}></span>
                  )}
                </li>
              </>
            );
          })}
        </ul>

        <div className="bg-secondary rounded-[6px] p-5 mt-16 mb-5">
          {/* sub steps */}

          <ul className="flex subStep_list gap-5">
            {currentStep === 0 &&
              SUB_STEPS.map((subStep, i) => {
                return (
                  <li
                    key={i.toString()}
                    className={`${
                      i <= currentInnerStep ? "bg-[#9B4EFF]" : "bg-[#242735]"
                    } text-white text-center relative w-[18%] px-3 py-3`}
                  >
                    {i + 1}. {subStep}
                  </li>
                );
              })}
          </ul>

          {/* STEPPER CONTENT */}
          <div className="form">{renderStepContent()}</div>

          {/* STEPPER BUTTONS */}
          <div className="flex justify-between mt-9">
            <div className="flex gap-3">
              <Button text="Cancel" isbg="#242735" />
              <Button
                text="Previous"
                isbg="#242735"
                onClick={handlePrevious}
                disabled={currentStep === 0 && currentInnerStep === 0}
              />
            </div>
            <div>
              <Button
                text="Save & Next"
                isbg="#6122B3"
                onClick={handleNext}
                disabled={currentStep === STEPPER.length - 1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}