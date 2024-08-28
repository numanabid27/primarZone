import Link from 'next/link'
import React from 'react'

export default function TreatmentCard({
    title,
    price,
    desc,
    slug,
    action,
    treatmentIncludes,
    otherIncludes
}) {
  return (
    <div className="bg-secondary text-center rounded-md border h-full border-[#707070] pt-7 pb-5 px-3">
        <h4 className="text-white text-base ">{title}</h4>
        <h2 className="text-white text-[42px] py-3 px-[6px]">{price}<span className="text-xl">+GST</span></h2>
        <p className="text-[#FFFFFF99] font-medium">{desc}</p>
        <Link 
            href={`add-new-treatment/${slug}`} 
            className="block text-white font-medium w-full py-3 rounded-[4px] my-5 action_btn">
            {action}
        </Link>
        <ul className="border-t border-[#707070] py-6 h-[27%]">
            <h6 className="text-white text-base font-semibold pb-3">Treatment Includes</h6>
            {
                treatmentIncludes?.map((itemInner)=>{
                    return(
                        <li className="text-white text-sm pb-2">{itemInner}</li>
                    )
                })
            }
        </ul>

        <ul className="border-t border-[#707070] pt-6 h-[27%]">
            <h6 className="text-white text-base font-semibold pb-3">Treatment Includes</h6>
            {
                otherIncludes?.map((itemInner)=>{
                    return(
                        <li className="text-white text-sm pb-2">{itemInner}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}
