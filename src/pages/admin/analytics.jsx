import React from 'react'
import TableComponent from '../../components/table/table'
import { AddNewRequest, DownloadButton, NewRequestsButtons } from '../../components/buttons/buttons'

export const Analytics = () => {


    const headers = ["Submitted Date","Requisition Title", "Requested By","View PDF","Supporting Document","Total Price of Production","Status","Action"]
    const fields = [{
        RequestDate:"2023-02-03",
        RequestTitle:"Nashyo",
        RequestedBy:'Ira',
        productName:"FUEL",
        SupportingDocument:"N/A",
        price:8769,
        status:"approved"
        
    },
    {
        RequestDate:"2024-06-03",
        RequestTitle:"Ira Verite",
        RequestedBy:'Prince',
        productName:"AMATA",
        SupportingDocument:"N/A",
        price:8769,
        status:"approved"
        
    },
    {
        RequestDate:"2024-06-03",
        RequestTitle:"Ira Verite",
        RequestedBy:'Prince',
        productName:"AMATA",
        SupportingDocument:"N/A",
        price:8769,
        status:"approved"
        
    },
    {
        RequestDate:"2024-06-03",
        RequestTitle:"Ira Verite",
        RequestedBy:'Prince',
        productName:"AMATA",
        SupportingDocument:"N/A",
        price:8769,
        status:"approved"
        
    }
]



const analyticsData = fields.map((field)=>[
    field.RequestDate,
    field.RequestTitle,
    field.RequestedBy,
    field.productName,
    field.SupportingDocument,
    field.price,
    field.status,
    <DownloadButton />
])
  return (
    <div className='w-full h-screen bg-[#ECEDF2]'>
     <div className=' w-full flex flex-col gap-3 items-start '>
     <div className='w-[95%] mx-auto mt-6'>
      <h1 className='font-bold text-lg'>Analytics</h1>
     </div>

     <div className='w-[95%] mx-auto border border-gray-200  '>
     <TableComponent 
     headers={headers}
     data={analyticsData}
     title={""}
     showCheckBox={false}
     showFilter={false}
     />
     </div>
    </div>
    </div>
  )
}
