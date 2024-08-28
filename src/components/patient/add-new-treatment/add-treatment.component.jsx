"use client"
import BreadCrump from "../../../common/components/breadcrump/breadcrump";
import Button from "../../../common/components/button/button";
import Heading from "../../../common/components/heading/heading";
import { PiListChecks } from "react-icons/pi";
import { ADD_NEW_TREATMENT } from "./add-treatment.constant";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import TreatmentCard from "@/common/components/treatment-card/treatment-card";

export default function CreateTreatmentView() {
    const router = useRouter();
  
    return (
        <>
            <div className="mb-6 flex justify-between md:tems-center items-start md:flex-row flex-col">
                <div>
                    <Heading title="Treatments" size="h1" />
                    <BreadCrump text="Patient / Treatments / Create New Treatment" />
                </div>
                <div className="md:mt-0 mt-4">
                    <Button
                        text="Treatment History"
                        icon={<PiListChecks className="text-[18px]" />}
                        onClick={()=>router.push('/patient/treatments')}
                        isbg="#131922"
                    />
                </div>
            </div>
            <div className="flex gap-3 flex-wrap ">
                {
                    ADD_NEW_TREATMENT.map((item)=>{
                        return(
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
                        )
                    })
                }
            </div>
            
        </>
    )
}
