import Image from 'next/image'
import React from 'react'

export default function Previewdata({data}) {
    // console.log(data)
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
   <div className='px-9 mt-3 relative py-8 flex flex-col gap-[2rem] bg-slate-100 shadow-xl rounded-md lg:mx-[10rem]' >
    {/* image */}
    <div className='flex justify-between items-center'>
   <div className='w-[30%] h-[25vh]'>
   <Image className='w-[80%] h-[80%] object-contain' src={data?.imageUrl} alt="" width={100} height={100}/>
   </div>
    <h2 className='text-4xl tracking-[6px] font-[300]'>INVOICE</h2>
    </div>
     {/* company details */}
    <div className='w-[70%] flex flex-col gap-1 text-gray-500'>
    <h2 className=" text-sm">{data?.companyName}</h2>
    <h2 className="text-sm ">{data?.AuthorName}</h2>
    <h2 className=" text-sm ">{data?.companyAddress}</h2>
    <h2 className=" text-sm ">{data?.authorCountry}</h2>
    </div>
    {/* Client details */}
     <div className='mt-[1rem]'>
    <h2 className='font-[600] mb-3'>Bill To : </h2>
    <div className='flex justify-between w-full'>
    <div className='w-[45%] flex flex-col gap-1 text-gray-500'>
    <h2 className=" text-sm text-gray-500">{data?.clientCompany}</h2>
    <h2 className="text-sm text-gray-500">{data?.clientAddress}</h2>
    <h2 className=" text-sm text-gray-500">{data?.clientCity}</h2>
    <h2 className=" text-sm text-gray-500">{data?.clientCountry}</h2>
    </div>
    <div className='lg:w-[50%] w-[45%]'>
    <div className="mb-1 flex gap-1 w-full items-center">
    <div className="w-[20%] font-semibold block mb-2 text-sm text-gray-900 dark:text-black">Invoice #: </div>
    <h2 className=" text-sm text-gray-500">{data?.invoiceNumber}</h2>     
    </div>  
    <div className="mb-1 flex gap-1 w-full items-center">
    <div className="w-[25%] font-semibold block mb-2 text-sm text-gray-900 dark:text-black">Invoice Date: </div>
    <h2 className=" text-sm text-gray-500">{newInvoiceDate}</h2>     
    </div>  
    <div className="mb-1 flex gap-1 w-full items-center">
    <div  className="w-[25%] font-semibold block mb-2 text-sm text-gray-900 dark:text-black">Due date:</div>
    <h2 className=" text-sm text-gray-500">{newInvoiceDue}</h2>
         </div>
    </div>
    </div>
     </div>
     {/* table */}
     <div class="relative overflow-x-auto ">
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
            data?.tableData.map((row , i)=>{
                return(
                    <tr key={i} className='text-gray-900'>
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
        <tfoot>
            <tr class="font-semibold text-gray-900 ">
                <th scope="row" class="px-6 py-3 text-base">Total</th>
                <td class="px-6 py-3">${totalAmount.toFixed(2)}</td> 
            </tr>
        </tfoot>
    </table>
     </div>
     {/* notes */}
    <div className='flex flex-col gap-2 ml-[2rem]'>
            <h2 className='text-black font-semibold'>Notes :</h2>
            <p className='text-gray-700 text-sm'>{data?.notes}</p>
    </div>
      {/* footer */}
      <div className='flex justify-end'>
        <img className='w-[100px] h-[100px] object-contain' src="/powered.png" alt="" />
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
