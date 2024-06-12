"use client"
import { UploadDropzone } from '@uploadthing/react';
import React, { useState , useRef, useEffect,  } from 'react'
import {  IoCreate } from "react-icons/io5";
import { GrPrint } from "react-icons/gr";
import { useReactToPrint } from 'react-to-print';
import { MdOutlinePreview, MdPreview } from "react-icons/md";
import FormTable from '@/components/FormTable';
import Image from 'next/image';
import PreviewData from '@/components/PreviewData';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Page() {
  useEffect(() => {
    AOS.init();
  }, [])
  const baseUrl=process.env.NEXT_PUBLIC_LOCALHOST;
  const router=useRouter()
  const { data: session, status} = useSession()
  const userId=session?.user?.id
  const [loading , setLoading]=useState(false)
  const invoiceRef = useRef();
    const [image , setImage]=useState("")
    const [data , setData]=useState()
    const [Id , setId]=useState("")
    const [preview , setPreview]=useState(false)
    const [tableData , setTableData]=useState([])
    
    const [formData , setFormData]=useState({
        companyName:"",
        AuthorName:"",
        companyAddress:"",
        authorCountry:"",
        clientCompany:"",
        clientAddress:"",
        clientCity:"",
        clientCountry:"",
        invoiceNumber:"",
        invoiceDate:"",
        dueDate:"",
        notes:""
    })
    function handInputChange(e){
      const {name , value}=e.target
      setFormData(
        {...formData , userId,[name]:value})
    }
   async function handleSubmit(e){
      e.preventDefault()
      const invoices={
        ...formData , image ,tableData 
      }   
       setData(invoices)
      try {
        setLoading(true)
        const response = await fetch(`${baseUrl}/api/invoicer`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            invoiceData:{
              ...invoices
            },
            tableData
          }),
        });
        if(response.ok){
          const data=await response.json()
          const invoiceId = data?.invoice?.id;
          setId(invoiceId);
          setId(invoiceId)
          setLoading(false)
          toast.success('Successfully created an invoice!')
          setPreview(!preview)
        }
      } catch (error) {
        setLoading(false)
        console.log(error)
        toast.error("Something went wrong.")

      }
    }
    function transporter(newTableData){
      setTableData(newTableData)
    }
    const handlePrint = useReactToPrint({
      content: () => invoiceRef.current,
    });
    if (status === "unauthenticated") {
      router.push('/login');
      return;
    }
   
  return (
   <>
   {
    status ==="loading"?(
      <div className='w-full h-screen flex items-center justify-center'>
      <span class="loader w-full h-screen flex items-center justify-center mb-[2rem]"></span>
    </div>
    ):(
<>
{
  status === "loading" ? (
    <div className='w-full h-screen flex items-center justify-center'>
      <span class="loader w-full h-screen flex items-center justify-center mb-[2rem]"></span>
    </div>
  ) : status === "authenticated" && (
    <>
      <div className='lg:p-10 md:p-10 bg-slate-100'>
      <div className='lg:p-10 md:p-10 p-2'>
    <div className='flex gap-2 md:justify-between lg:justify-between'>
    <div className='flex gap-1 lg:gap-2'>
    <button
    onClick={()=>setPreview(!preview)}
     className="flex text-sm items-center gap-2 px-4 md:py-2 lg:py-2 hover:text-white hover:bg-indigo-600 font-[400] rounded-lg duration-150 border border-sky-500 text-black bg-white active:bg-indigo-700">
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
   
    </div>
    <div>
    <div className='flex gap-2'>
    <Link
  href="/invoice" 
 className="flex text-sm items-center gap-2 px-4 py-2 hover:text-white hover:bg-indigo-600 font-[400] rounded-lg duration-150 border border-sky-500 text-black bg-white active:bg-indigo-700">
<MdOutlinePreview size={16} className='text-xs lg:text-sm' />
invoices
    </Link>
    <button
    type='button' onClick={handlePrint}
 className="flex text-sm items-center gap-2 px-4 py-2 hover:text-white hover:bg-indigo-600 font-[400] rounded-lg duration-150 border border-sky-500 text-black bg-white active:bg-indigo-700">
<GrPrint />
Print
    </button>
    </div>
    </div>
    </div>
    {
        preview?(
    <>
     {/* Preview */}
     <div ref={invoiceRef}
     >
   <PreviewData data={data}/>
     </div>
    </>
        ):(
        <>
        {/* form */}
 <form data-aos="fade-right" data-aos-duration="800" onSubmit={handleSubmit} className='lg:px-9 md:px-4 py-6 px-1 lg:py-10 flex flex-col gap-[2rem] shadow-xl  mt-[3rem] rounded-md lg:mx-[4rem]'>
{/* image */}
<div className='flex w-full justify-center lg:justify-between items-center'>
<div className='flex flex-col md:flex-row lg:flex-row gap-2 items-center'>
<div> 
   {
    image?(
      <div className='flex flex-col items-center justify-center'>
        <Image className='w-[50%] h-[80%] object-contain rounded-lg shrink-0' src={image} alt="" width={400} height={400}/>
      </div>
    ):(
      <div className='lg:w-full flex items-center'>
    <UploadDropzone
    className="text-sm"
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        setImage(res[0].url)
        alert("Upload Completed");
      }}
      onUploadError={(error) => {
        alert(`ERROR! ${error.message}`);
      }}
    />
      </div>
    )
   }
   </div>
   {
    image?(""):(
      <div className='flex flex-col text-xs lg:text-sm gap-1 font-[400] items-center'>
      <h2 className='font-sm font-bold'>Upload Company Logo</h2>
      <p className='hidden lg:flex md:flex '>240 x 240 pixels @ 72 DPI,</p>
      <p >Maximum size of 4MB.</p>
      </div>
    )
   }
</div>
<div className=' hidden md:flex lg:flex'>
  <h2 className='lg:text-5xl md:text-4xl tracking-[6px] font-[300]'>INVOICE</h2>
</div>

</div>
{/* company details */}
<div className='lg:w-[40%] md:w-[40%] w-[80%] '>
<div class="mb-1">
<input onChange={handInputChange} type="text" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-white dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.companyName} placeholder="Your company" name='companyName' required/>
</div>  
<div class="mb-1">
<input onChange={handInputChange} type="text" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white  dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.AuthorName} name='AuthorName' placeholder="Your Name" required/>
</div>  
<div class="mb-1">
<input onChange={handInputChange} type="text" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.companyAddress} name='companyAddress' placeholder="Company Address" required/>
</div>  
<div class="mb-1">
<input onChange={handInputChange} type="text" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.authorCountry} name='authorCountry' placeholder="Country eg Uganda" required/>
</div>  
</div>
{/* Client details */}
<div className='mt-[1rem]'>
<h2 className='font-[600] mb-3'>Bill To : </h2>
<div className='flex justify-between'>
<div className='lg:w-[40%] md:w-[40%] w-[55%] flex flex-col gap-2'>
<div class="mb-1">
<input onChange={handInputChange} type="text" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-white dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.clientCompany} name='clientCompany' placeholder="Your Client's company" required/>
</div>  
<div class="mb-1">
<input onChange={handInputChange} type="text" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white  dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.clientAddress} name='clientAddress' placeholder="Client's Address" required/>
</div>  
<div class="mb-1">
<input onChange={handInputChange} type="text" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.clientCity} name='clientCity' placeholder="Client's city" required/>
</div>  
<div class="mb-1">
<input onChange={handInputChange} type="text" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.clientCountry} name='clientCountry' placeholder="Client's Country eg Uganda" required/>
</div>  
</div>   
<div className='w-[40%] '>
<div class="mb-1 flex lg:flex-row md:flex-row flex-col md:gap-1 lg:gap-1 w-full md:items-center lg:items-center">
<label for="invoice number" class="lg:w-[20%] w-[70%] font-semibold block mb-2 text-sm text-gray-900 dark:text-black">Invoice # :</label>
<input onChange={handInputChange} type="number" id="text" class="lg:w-[80%] md:w-[80%] w-[100%] outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-white dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.invoiceNumber} name='invoiceNumber' placeholder="Invoice number" required/>
</div>  
<div class="mb-1 flex lg:flex-row md:flex-row flex-col md:gap-1 lg:gap-1 w-full md:items-center lg:items-center">
<label for="invoice Date" class="lg:w-[20%] w-[70%] font-semibold block mb-2 text-sm text-gray-900 dark:text-black">Invoice Date :</label>
<input onChange={handInputChange} type="date" id="text" class="lg:w-[80%] md:w-[80%] w-[100%] outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-white dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.invoiceDate} name='invoiceDate' placeholder="Invoice date" required/>
</div>  
<div class="mb-1 flex lg:flex-row md:flex-row flex-col md:gap-1 lg:gap-1 w-full md:items-center lg:items-center">
<label for="due date"  class="lg:w-[20%] w-[70%] font-semibold block mb-2 text-sm text-gray-900 dark:text-black">Due date :</label>
<input onChange={handInputChange} type="date" id="text" class="lg:w-[80%] md:w-[80%] w-[100%] outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-white dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={formData.dueDate} name='dueDate' placeholder="due date" required/>
</div>
</div>   
</div>
</div>
{/* FormTable */}
<FormTable transporter={transporter}/>
{/* textarea */}
<div className='flex flex-col gap-2 mt-4'>
<label for="message" class="block text-sm font-bold text-black">Comments :</label>
<textarea id="message" value={formData.notes} name='notes'required onChange={handInputChange} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:white dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your comments here..."></textarea>
</div>
{/* onSubmit */}
<div className='lg:w-[30%] min-w[30%]'>
{
loading ? (
<button
type="submit"
className="flex text-sm items-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150  hover:border hover:border-sky-500 hover:text-black hover:bg-white active:bg-indigo-700 mt-[1rem]">
  <IoCreate size={20} />
  Creating Invoice....
</button>
):(
<button
type="submit"
className="flex text-sm items-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150  hover:border hover:border-sky-500 hover:text-black hover:bg-white active:bg-indigo-700 mt-[1rem]">
  <IoCreate size={20} />
  Create Invoice
</button>
)
}
</div>
</form>
        </>
        )
    }

</div>
      </div>
    </>
  )
}
</>
    )
   }
   </>
  )
}
