"use client"
import { UploadDropzone } from '@uploadthing/react';
import React, { useState } from 'react'


export default function FormEdit() {
    const [image , setImage]=useState("")
  return (
   <form className='p-9 flex flex-col gap-[2rem] bg-slate-white shadow-lg mt-[5rem] rounded-md lg:mx-[4rem]'>
    {/* image */}
   <div className='flex justify-between items-center'>
   <div className='flex gap-2 items-center'>
   <UploadDropzone
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            setImage(res[0].url)
            alert("Upload Completed");
          }}
          onUploadError={(error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
        <div className='flex flex-col text-sm gap-1 font-[400]'>
        <h2>Upload Logo</h2>
        <p>240X340 size</p>
        <p>(PNG , JPG etc)</p>
        </div>
   </div>
    <h2 className='text-4xl tracking-[6px] font-[300]'>INVOICE</h2>
   </div>
   {/* company details */}
 <div className='w-[40%]'>
 <div class="mb-1">
    <input type="text" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-white     dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your company" required/>
  </div>  
 <div class="mb-1">
    <input type="text" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white  dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required/>
  </div>  
 <div class="mb-1">
    <input type="text" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Company Address" required/>
  </div>  
 <div class="mb-1">
    <input type="text" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country eg Uganda" required/>
  </div>  
 </div>
 {/* Client details */}
  <div className='mt-[2rem]'>
    <h2 className='font-[600] mb-3'>Bill To : </h2>
    <div className='flex justify-between'>
    <div className='w-[40%]'>
    <div class="mb-1">
    <input type="text" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-white dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Client's company" required/>
  </div>  
 <div class="mb-1">
    <input type="text" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white  dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Client's Address" required/>
  </div>  
 <div class="mb-1">
    <input type="text" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Client's city" required/>
  </div>  
 <div class="mb-1">
    <input type="text" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Client's Country eg Uganda" required/>
  </div>  
    </div>   
    <div className='w-[40%]'>
    <div class="mb-1 flex gap-1 w-full items-center">
    <label for="invoice number" class="w-[20%] font-semibold block mb-2 text-sm text-gray-900 dark:text-black">Invoice # :</label>
    <input type="number" id="text" class="w-[80%] outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-white     dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Invoice number" required/>
  </div>  
    <div class="mb-1 flex gap-1 w-full items-center">
    <label for="invoice Date" class="w-[25%] font-semibold block mb-2 text-sm text-gray-900 dark:text-black">Invoice Date :</label>
    <input type="date" id="text" class="w-[75%] outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-white dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Invoice date  " required/>
  </div>  
    <div class="mb-1 flex gap-1 w-full items-center">
    <label for="due date" class="w-[25%] font-semibold block mb-2 text-sm text-gray-900 dark:text-black">Due date :</label>
    <input type="date" id="text" class="w-[75%] outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-white  dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Invoice date  " required/>
  </div>
    </div>   
    </div>
  </div>
   </form>
  )
}
