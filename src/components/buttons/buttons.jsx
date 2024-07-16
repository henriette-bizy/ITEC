import { GoDownload, GoTrash } from "react-icons/go";
import { IoIosAdd } from "react-icons/io";



export const DownloadButton = ()=>{

    return(
    <div className=" w-[11rem] h-[3rem] tex-white flex flex-row">
        
        <button 
      type="submit" 
      className="flex items-center justify-center gap-2 w-full py-2 px-4 hover:bg-white border border-2 font-semibold hover:text-[#4069B0] rounded-md shadow-md bg-[#4069B0] text-white">
        <span>
        <GoDownload className="text-xl" />
        </span>
        Download PDF 
        </button>
        </div>
    )
}


export const AddNewRequest = ()=>{

  return(
   
      <button 
    type="submit" 
    className="flex items-center justify-center gap-2 w-full py-2 px-4 hover:bg-[#080140] border  font-semibold text-[#080140] hover:text-white rounded-md shadow-md bg-white">
      <span>
      <IoIosAdd className="text-xl" />
      </span>
      New Request 
      </button>
     
  )
  
} 
  
export function DeleteButton() {
    return (
      <button 
      type="submit" 
      className="flex items-center justify-center  w-max py-2 px-3  border  font-semibold text-white rounded-md shadow-md bg-red-400">
        Reject
        </button>
    );
  }

  export function ApproveButton() {
    return (
      <button 
      type="submit" 
      className="flex items-center justify-center w-max py-2 px-3  border  font-semibold text-white rounded-md shadow-md bg-blue-600">
        Approve
        </button>
    );
  }





export const NewRequestsButtons = ()=>{

  return (
    <div className="flex gap-2">
     
      <ApproveButton />
      <DeleteButton />
    </div>
  )
}