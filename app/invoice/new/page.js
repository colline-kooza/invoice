"use client"
import React, { useState } from 'react'
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { GrPrint } from "react-icons/gr";
import { RiShareForwardLine } from "react-icons/ri";
import { MdPreview } from "react-icons/md";
import FormEdit from '@/components/FormEdit';



export default function Page() {
    const [preview , setPreview]=useState(false)
  return (
    <div className='p-10'>
        <div className='flex justify-between'>
        <div className='flex gap-2'>
        <button
        onClick={()=>setPreview(!preview)}
         className="flex text-sm items-center gap-2 px-4 py-2 hover:text-white hover:bg-indigo-600 font-[400] rounded-lg duration-150 border border-sky-500 text-black bg-white active:bg-indigo-700">
   {
    preview?(
        <div className='flex gap-2'>
        <MdPreview size={20}/>
        Edit Form
            </div>
    ):(
    <div className='flex gap-2'>

    <MdPreview size={20}/>
    Preview
    </div>
    )
   }
        </button>
        <button
    className="flex text-sm items-center gap-2 px-4 py-2 hover:text-white hover:bg-indigo-600 font-[400] rounded-lg duration-150 border border-sky-500 text-black bg-white active:bg-indigo-700">
    <IoChevronDownCircleOutline size={20}/>
    Download
        </button>
        <button
     className="flex text-sm items-center gap-2 px-4 py-2 hover:text-white hover:bg-indigo-600 font-[400] rounded-lg duration-150 border border-sky-500 text-black bg-white active:bg-indigo-700">
    <GrPrint />
    Print
        </button>
        </div>
        <div>
        <div className='flex gap-2'>
        <button
         className="flex text-sm items-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150  hover:border hover:border-sky-500 hover:text-black hover:bg-white active:bg-indigo-700">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
    </svg>
    Save online
        </button>
        <button
    className="flex text-sm items-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150  hover:border hover:border-sky-500 hover:text-black hover:bg-white active:bg-indigo-700">
   <RiShareForwardLine size={20}/>
    Share
        </button>
        </div>
        </div>
        </div>
        {
            preview?(
        <>
         {/* Preview */}
        <h2>Preview</h2>
        </>
            ):(
            <>
            {/* form */}
         
         <FormEdit/>
            </>
            )
        }

    </div>
  )
}
