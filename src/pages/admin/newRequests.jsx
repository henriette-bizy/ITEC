import React from 'react'
import TableComponent from '../../components/table/table'
import { AddNewRequest, DownloadButton, NewRequestsButtons } from '../../components/buttons/buttons'

export const NewRequests = () => {


    const headers = ["Submitted Date","Requisition Title", "Requested By","View PDF","Supporting Document","Total Price of Production","Action"]
    const fields = [{
        RequestDate:"2023-02-03",
        RequestTitle:"Nashyo",
        RequestedBy:'Ira',
        viewPdf:"PENDING",
        SupportingDocument:"N/A",
        price:8769
        
    },
    {
        RequestDate:"2023-02-03",
        RequestTitle:"Nashyo",
        RequestedBy:'Ira',
        viewPdf:"PENDING",
        SupportingDocument:"N/A",
        price:8769
        
    },
    {
        RequestDate:"2023-02-03",
        RequestTitle:"Nashyo",
        RequestedBy:'Ira',
        viewPdf:"PENDING",
        SupportingDocument:"N/A",
        price:8769
        
    },
    {
        RequestDate:"2023-02-03",
        RequestTitle:"Nashyo",
        RequestedBy:'Ira',
        viewPdf:"PENDING",
        SupportingDocument:"N/A",
        price:8769
        
    }
]



const dashboardData = fields.map((field)=>[
    field.RequestDate,
    field.RequestTitle,
    field.RequestedBy,
    field.viewPdf,
    field.SupportingDocument,
    field.price,
    <NewRequestsButtons />
])
  return (
    <div className='w-full h-screen bg-[#ECEDF2]'>
    <div className=' w-full flex flex-col gap-3 items-start '>
     <div className='w-[95%] mx-auto mt-6'>
      <h1 className='font-bold text-xl'>Incoming Requests</h1>
     </div>

     <div className='w-[97%] mx-auto overflow-x-auto '>
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
