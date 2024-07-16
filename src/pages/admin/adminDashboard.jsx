import React from 'react'
import TableComponent from '../../components/table/table'
import { DownloadButton } from '../../components/buttons/buttons'

export const AdminDashboard = () => {


    const headers = ["Date of The Request","Request Title", "Requested By","Managing Director","Project manager","Office Manager","Accountant"]
    const fields = [{
        RequestDate:"2023-02-03",
        RequestTitle:"Nashyo",
        RequestedBy:'Ira',
        managingDirector:"Pending",
        Projectmanger:"APPROVED",
        OfficeManager:"PENDING",
        Accountant:"DECLINED"
    },
    {
        RequestDate:"2023-02-03",
        RequestTitle:"Nashyo",
        RequestedBy:'Ira',
        managingDirector:"Pending",
        Projectmanger:"APPROVED",
        OfficeManager:"PENDING",
        Accountant:"DECLINED"
    },
    {
        RequestDate:"2023-02-03",
        RequestTitle:"Nashyo",
        RequestedBy:'Ira',
        managingDirector:"Pending",
        Projectmanger:"APPROVED",
        OfficeManager:"PENDING",
        Accountant:"DECLINED"
    },
    {
        RequestDate:"2023-02-03",
        RequestTitle:"Nashyo",
        RequestedBy:'Ira',
        managingDirector:"Pending",
        Projectmanger:"APPROVED",
        OfficeManager:"PENDING",
        Accountant:"DECLINED"
    },
]


const dashboardData = fields.map((field)=>[
    field.RequestDate,
    field.RequestTitle,
    field.RequestedBy,
    field.managingDirector,
    field.Projectmanger,
    field.OfficeManager,
    field.Accountant
    
   

])
  return (
    <div className='w-full h-screen bg-[#ECEDF2]'>
     <div className=' w-full flex flex-col gap-3 items-start '>
     <div className='w-[95%] mx-auto mt-6'>
      <h1 className='font-bold text-lg'>Requests Approval Tracking</h1>
     </div>

     <div className='w-[95%] mx-auto border border-gray-200 '>
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
