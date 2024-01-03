import Image from 'next/image'
import React from 'react'
import { FaAddressBook } from 'react-icons/fa'
import { FaArrowRightToCity } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";


export default function PreviewDetailedData({data}) {
    console.log(data)
    const totalAmount=data?.tableData?.reduce((sum, row)=> {
        const total=parseFloat(row.Amount)
        if(!isNaN (total)){
            return sum + total
        }
        return sum 
    },0)
    const options={
        year:"numeric", month:"long" , day: "numeric"
    }
    const newInvoiceDate= new Date(data?.invoiceDate).toLocaleDateString(undefined , options)
    const options2={
        year:"numeric", month:"long" , day: "numeric"
    }
    const newInvoiceDue= new Date(data?.dueDate).toLocaleDateString(undefined ,options2)
  return (
  <>
  {
    data?(
      <div className='mx-4 px-2 mt-8 lg:px-[8rem] py-8 flex flex-col gap-2 tracking-[.4px] bg-slate-200 shadow-lg shadow-indigo-500/40  rounded-lg'>
        {/* details */}
        <div className='flex w-full min-h-[50vh] '>
        <div className='min-w-[49%] lg:min-w-[35%] items-start justify-start'>
            <div className='lg:w-[40%] w-[90%] h-[30%] flex items-start justify-start'>
            <Image className='w-[100%] h-[100%] object-contain' src={data?.imageUrl} alt="" width={100} height={100}/>
            </div>
            <div className='mt-5'>
                <div className='flex flex-col justify-center gap-1 lg:gap-3'>
                    <h2 className='lg:text-sm text-xs font-semibold text-[#b4a0a0]'>TO :</h2>
                    <h1 className='lg:text-[1.3rem] tracking-[.4px] text-xs font-bold text-[#525252] flex-wrap'>{data.clientCompany}</h1>
                </div>
            </div>
            <div className='mt-3'>
                <div className='flex flex-col gap-3'>
                    <h2 className='lg:text-sm text-xs font-semibold text-[#ad8484]'>Client Address : </h2>
                    <p className='lg:text-[1rem] tracking-[.4px] text-xs font-bold text-[#715e5e] flex gap-1 items-center flex-wrap'><FaArrowRightToCity className='shrink-0'/> {data.clientAddress}</p>
                </div>
            </div>
            <div className='mt-3'>
                <div className='flex flex-col gap-3'>
                    <h2 className='lg:text-sm text-xs font-semibold text-[#ad8484]'>Client City : </h2>
                    <p className='lg:text-[1rem] tracking-[.4px] text-xs font-bold text-[#715e5e] flex gap-1 items-center flex-wrap'><FaAddressBook className='shrink-0'/> {data.clientCity}</p>
                </div>
            </div>
            <div className='mt-3'>
                <div className='flex flex-col gap-3'>
                    <h2 className='lg:text-sm text-xs font-semibold text-[#ad8484]'>Client country: </h2>
                    <p className='lg:text-[1rem] tracking-[.4px] flex-wrap text-xs font-bold text-[#715e5e] flex gap-1 items-center'> <BiWorld className='shrink-0'/> {data.clientCountry}</p>
                </div>
            </div>
        </div>
        <div className='lg:min-w-[35%] hidden lg:flex'>
            <div className='flex flex-col gap-2 justify-end '>
            <h2 className='text-sm font-semibold text-[#ad8484] tracking-[.4px]'>FROM : </h2>
<h1 className='lg:text-2xl text-lg font-bold'>{data.companyName}</h1> 
<div className='lg:text-sm text-xs font-semibold text-[#ad8484]'>
{data.AuthorName}
</div> 
            </div>
        </div>
        <div className='lg:min-w-[25%] min-w-[50%] flex flex-col  p-2 md:p-2 lg:p-2 '>
            <div className='flex flex-col gap-1'>
                <div>
                    <h1 className='lg:text-6xl md:text-6xl font-bold text-4xl tracking-[6px] text-[#525252] md:justify-start md:items-start lg:justify-start lg:items-start flex items-center justify-center'>Invoice</h1>
                    <div className='line flex gap-2 lg:text-sm text-xs md:items-start md:justify-start lg:items-start lg:justify-start items-center justify-center lg:tracking-[6px]'>
                        <p className='flex items-center justify-center'>NO:{data.invoiceNumber}</p>
                    {/* <p className='overflow-hidden max-h-[20px] leading-5'>{`NO: ${data.invoiceNumber}`}</p> */}
    <span className='hidden w-px h-6 bg-red-300 md:block'></span>
    <p className='overflow-hidden max-h-[20px] leading-5 text-gray-500'>{data.invoiceDate}</p>
                    </div>
                </div>
                <div className=''>
                <div className='mt-5 '>
                <div className='flex lg:hidden md:hidden flex-col justify-center gap-3 lg:gap-2'>
                    <h2 className='lg:text-sm text-xs font-semibold text-[#b4a0a0]'>FROM :</h2>
                    <h1 className='lg:text-[1.3rem] tracking-[.4px] text-xs font-bold text-[#525252] flex-wrap'>{data.companyName}</h1>
                    <div className='lg:text-sm text-xs font-semibold text-[#ad8484]'>
                 {data.AuthorName}
                  </div> 
                </div>
            </div>
            <div className='mt-3'>
                <div className='flex flex-col gap-3'>
                    <h2 className='lg:text-sm text-xs font-semibold text-[#ad8484]'>Address : </h2>
                    <p className='lg:text-[1rem] tracking-[.4px] text-xs font-bold text-[#715e5e] flex gap-1 items-center flex-wrap'><FaArrowRightToCity className='shrink-0'/> {data.companyAddress}</p>
                </div>
            </div>
            <div className='mt-3'>
                <div className='flex flex-col gap-3'>
                    <h2 className='lg:text-sm text-xs font-semibold text-[#ad8484]'>Country : </h2>
                    <p className='lg:text-[1rem] tracking-[.4px] text-xs font-bold text-[#715e5e] flex gap-1 items-center flex-wrap'><FaAddressBook className='shrink-0'/> {data.authorCountry}</p>
                </div>
            </div>
            <div className='mt-3'>
                <div className='flex flex-col gap-3'>
                    <h2 className='lg:text-sm text-xs font-semibold text-[#ad8484]'>City: </h2>
                    <p className='lg:text-[1rem] tracking-[.4px] flex-wrap text-xs font-bold text-[#715e5e] flex gap-1 items-center'> <BiWorld className='shrink-0'/> {data.clientCountry}</p>
                </div>
            </div>
                </div>
            </div>
        </div>
        </div>
        {/* table */}
    <div class="relative overflow-x-auto mt-[.4rem] md:mt-[1px] lg:mt-[1rem]">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-black dark:text-gray-100">
            <tr>
                <th scope="col" class="px-6 py-3">
                Item Description
                </th>
                <th scope="col" class="px-6 py-3">
                ItemQty
                </th>
                <th scope="col" class="px-6 py-3">
                Price
                </th>
                <th scope="col" class="px-6 py-3">
                Tax
                </th>
                <th scope="col" class="px-6 py-3">
                Amount
                </th>
            </tr>
        </thead>
        <tbody className=''>
         {
            data?.tableData.map((row )=>{
                return(
                    <tr key={row.id} className='text-gray-900'>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {row.itemDescription}
                    </th>
                    <td class="px-6 py-4">
                    {row.itemQty}
                    </td>
                    <td class="px-6 py-4">
                    {row.Price}
                    </td>
                    <td class="px-6 py-4">
                       
                    {row.Tax}
                    </td>
                    <td class="px-6 py-4">
                    $ {row.Amount}
                    </td>
                   
                </tr>
                )
            })
         }
        </tbody>
     
    </table>
     </div>
     <hr />
        {/* terms & condition */}
    <div className='flex lg:flex-row flex-col gap-3 w-full min-h-11 mt-5'>
    <div className='lg:w-[50%] flex gap-3 flex-col'>
       <div className='flex flex-col gap-1'>
       <h2 className='lg:text-lg text-sm font-bold lg:tracking-[.9px] text-[#525252]'>TERMS & CONDITIONS</h2>
        <p className='text-sm lg:text-xs text-gray-500'>{data.notes}</p>
       </div>
       <div className='flex flex-col gap-2'>
        <p className='tracking-[.4px] font-semibold text-[#525252]'>DUE DATE :</p>
        <p className='tracking-[.4px] text-xs text-gray-500'>{data.dueDate}</p>
       </div>
    </div>
    <div className='lg:w-[50%] flex flex-col gap-3'>
     <div className='flex lg:gap-2 items-center justify-end'>
    <h2 className='lg:text-sm text-sm font-semibold lg:tracking-[.9px] text-[#525252]'>SubTotal :</h2>
    <p className='lg:text-sm text-sm font-bold lg:tracking-[.9px] '>${totalAmount.toFixed(2)}</p>
     </div>
     <div className='flex lg:gap-2 items-center justify-end'>
    <h2 className='lg:text-sm text-sm font-semibold lg:tracking-[.9px] text-[#525252]'>Discount :</h2>
     </div>
     <div className='flex items-center mt-4 justify-end'>
        <h2 className='py-2 tracking-[.4px] px-10 bg-[#ececec] font-semibold'>Total:</h2>
        <h2 className='py-2 px-8 bg-[#666666] text-white font-semibold tracking-[.4px] '>${totalAmount.toFixed(2)}</h2>
    </div>
    </div>
   
        </div>
      </div>
    ):(
        <div className="text-center p-8 flex flex-col items-center justify-center gap-2">
        <p className="text-lg text-red-600">Failed to fetch invoices. Please making some.</p>
        <button
  className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
  onClick={() => window.location.reload()}
>
  Create New
</button>
        </div>
    )
  }
  </>
  )
}
 