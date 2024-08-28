"use client"

import BreadCrump from '@/common/components/breadcrump/breadcrump'
import CustomTable from '@/common/components/custom-table'
import React from 'react'
import { MESSAGE_DATA } from './message.constant'
import Heading from '@/common/components/heading/heading'

export default function Message() {
    const columns = [
        {
          Header: "Msg ID",
          accessor: "msgId",
         
        },
        {
          Header: "Status",
          accessor: "status",
            render: (_, item) => {
                return <span className={item.status === "Open" ? "text-purple" : "text-primary_white"}>{item.status}</span>;
            },
        },
        {
          Header: "Date",
          accessor: "date",
            render: (_, item) => {
                return <span className="text-primary_white">{item.date}</span>;
            },
        },
        {
          Header: "From",
          accessor: "from",
        },
        {
          Header: "Subject",
          accessor: "subject",
            // render: (_, item) => {
            //     return <div className="tw-flex tw-gap-2">Complete</div>;
            // },
        },
        {
            Header: "No. of Messages",
            accessor: "numberMsgs",
            render: (_, item) => {
                return <span className={item.numberMsgs <= "2" ? "text-purple" : "text-primary_white"}>{item.numberMsgs}</span>;
            },
        }
    ];
    return (
        <>
            <div className='mb-6'>
                <Heading title="Message Center" size="h1" />
                <BreadCrump text="Patient / Message Center" />
            </div>
            <div className="bg-secondary pt-5 px-6 rounded-md">
                <h3 className="text-white font-semibold text-xl">Message History</h3>
                <CustomTable data={MESSAGE_DATA} columns={columns} />
            </div>
        </>
    )
}
