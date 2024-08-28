"use client"

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import { useRouter } from 'next/navigation'
import CustomTable from '@/common/components/custom-table';
import Heading from "@/common/components/heading/heading";
import BreadCrump from "@/common/components/breadcrump/breadcrump";
import Button from "@/common/components/button/button";

export default function TreatmentHistory() {
  const router = useRouter();

  const columns = [
    {
      Header: "Treatment",
      accessor: "treatment",
    },
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Current Stage",
      accessor: "currentStage",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Action",
      accessor: "action",
      render: (_, item) => {
        return <div className="tw-flex tw-gap-2">Complete</div>;
      },
    },
  ];

  const data = [
    {
      treatment: "Men’s Hormonal Health (Rescript)",
      date: "16 Apr, 2024",
      currentStage: "Consultation Review",
      status: "Awaiting Your Response",
    },
    {
      treatment: "Men’s Hormonal Health (Refill)",
      date: "01 Jan, 2024",
      currentStage: "Complete",
      status: "Not Required",
    },
    {
      treatment: "Men’s Hormonal Health",
      date: "8 Aug, 2024",
      currentStage: "Complete",
      status: "Not Required",
    },
  ];
  return (
    <>
      <div className="mb-6 flex md:flex-row flex-col justify-between md:items-center items-start">
        <div>
          <Heading title="Treatments" size="h1" />
          <BreadCrump text="Patient / Treatments History" />
        </div>
        <div className='mt-3 md:mt-0'>
          <Button
            text="Start New Treatment"
            icon={<FiPlusCircle className="text-[17px]" />}
            onClick={()=>router.push('/patient/add-new-treatment')}
            isbg="#6122B3"
          />
        </div>
      </div>
      <div className="bg-secondary pt-5 px-6 rounded-md">
        <h3 className="text-white font-semibold text-xl flex items-center gap-2">
          Treatment History
          <AiOutlineExclamationCircle />
        </h3>
        <CustomTable data={data} columns={columns} />
      </div>
    </>
  );
}
