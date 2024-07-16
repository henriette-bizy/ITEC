import React from 'react'
import TableComponent from '../../components/table/table'
import { AddNewRequest, DownloadButton } from '../../components/buttons/buttons'

export const UserDashboard = () => {
    const headers = ["Submitted Date","Requisition Title", "Status","File"]
    const fields = [{
        data:"2023-02-03",
        title:"Nashyo",
        Status:'approved',
    },
    {
        data:"2023-02-03",
        title:"Nashyo",
        Status:'approved',
    },
    {
        data:"2023-02-03",
        title:"Nashyo",
        Status:'approved',
    }
]

    const dashboardData = fields.map((field)=>[
        field.data,
        field.title,
        field.Status,
        <DownloadButton />
    ])

    return (
        <div className='w-full h-screen bg-[#ECEDF2]'>
            <div className='w-full flex flex-col gap-3 items-start'>
                <div className='w-[90%] mx-auto mt-6'>
                    <h1 className='font-bold text-xl'>Your Requests</h1>
                </div>

                <div className='w-[90%] mx-auto'>
                    <div className='flex justify-end mb-4'>
                        <div className='w-[20%]'>
                            <AddNewRequest />
                        </div>
                    </div>
                    <TableComponent 
                        headers={headers}
                        data={dashboardData}
                        title={""}
                        showCheckBox={false}
                        showFilter={false}
                    />
                </div>
            </div>
        </div>
    )
}