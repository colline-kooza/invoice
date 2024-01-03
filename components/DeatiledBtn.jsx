"use client"
import React, { useRef, useState } from 'react'
import { RiShareForwardLine } from 'react-icons/ri';
import { AiOutlineMail } from "react-icons/ai";
import toast from 'react-hot-toast';
import Link from 'next/link';
import { MdOutlinePreview } from 'react-icons/md';

export default function DeatiledBtn({url}) {
    const baseUrl=process.env.NEXT_PUBLIC_LOCALHOST;
    const [sendEmail , setSendEmail]=useState(false)
    const [loading , setLoading]=useState(false)
    const [email , setEmail]=useState()
   async function handleEmail(e){
    e.preventDefault(); 
    const invoiceUrl= `${baseUrl}/invoice/${url}`
    try {
        setLoading(true)
        const response =await fetch(`${baseUrl}/api/send`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email , invoiceUrl
            })
        })
        if(response.ok){
            setLoading(false)
            toast.success("email sent successfully")
            setSendEmail(false)
            setEmail("")
        }
    } catch (error) {
        setEmail("")
        setLoading(false)
        toast.error("email failed")
        console.log(error)
    }
    }
  return (
    <div className=''>
        <div className='flex justify-between p-8 lg:mx-[5rem]'>
        <div className='flex gap-2'>
            {
                sendEmail?(
                    <form class="flex items-center lg:flex-row flex-col gap-2">
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <AiOutlineMail />
                        </div>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="bg-slate-50 border border-slate-400 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-slate-300 dark:border-slate-300 dark:placeholder-slate-700 dark:text-slate-800 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email..." required />
                    </div>
                      <button
                      type='button'
                      onClick={handleEmail}
                    className="flex text-sm items-center gap-2 px-4 py-2.5 text-white bg-orange-700 rounded-lg duration-150  hover:border hover:border-sky-500 shrink-0 hover:text-black hover:bg-white active:bg-indigo-700">
                   <RiShareForwardLine size={20}/>
                   {
                    loading?(
                      "  Sending ...."
                    ):(
                      "Send Email"
                    )
                   }
                    </button>
                     </form>
                ):(
 <button
 onClick={()=>setSendEmail(true)}
    className="flex text-sm items-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150  hover:border hover:border-sky-500 hover:text-black hover:bg-white active:bg-indigo-700">
   <RiShareForwardLine size={20}/>
    Share
    </button>
                )
            }
        </div>
        <div>
        <Link href="/invoice"
    className="ml-6 flex text-sm items-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150  hover:border hover:border-sky-500 hover:text-black hover:bg-white active:bg-indigo-700">
   <MdOutlinePreview size={20}/>
    Invoices
    </Link>
        </div>
    </div>
    </div>
  )
}
