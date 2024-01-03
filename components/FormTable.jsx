"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { IoAddSharp } from 'react-icons/io5'

export default function FormTable({transporter}) {
    const [tableData , setTableData]=useState([
        {
        itemDescription:"",
        itemQty:"",
        Price:"",
        Tax:"",
        Amount:""
        },
        {
            itemDescription:"",
            itemQty:"",
            Price:"",
            Tax:"",
            Amount:""
            }
    ])
    function addRow(){
        setTableData([...tableData ,{
            itemDescription:"",
            itemQty:"",
            Price:"",
            Tax:"",
            Amount:""
            }
        ])
    }
    function removeRow(index){
        const updatedData=[...tableData]
        updatedData.splice(index , 1)
        setTableData(updatedData)
    }
    function handleChange(index , e){
   const {name , value}=e.target
   const updatedData=[...tableData]
   updatedData [index][name]=value;

   if(name==="itemQty"|| name==="Price"){
    const  qty=parseFloat(updatedData[index].itemQty)
    const  price=parseFloat(updatedData[index].Price)
    if(!isNaN(qty)&& !isNaN(price)){
    updatedData[index].Amount=(qty*price).toFixed(2)
    }else{
        updatedData[index].Amount="";
    }
   }
   setTableData(updatedData)
   transporter(updatedData)
    }
  return (
<div className="relative overflow-x-auto ">
    <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-800 uppercase bg-slate-200 font-semibold">
            <tr>
                <th scope="col" className="lg:px-6 px-10 py-3 text-xs">
                Item Description
                </th>
                <th scope="col" className="px-6 py-3">
                Qty
                </th>
                <th scope="col" className="px-6 py-3">
                Price
                </th>
                <th scope="col" className="px-6 py-3">
                TAX
                </th>
                <th scope="col" className="px-6 py-3">
                Amount
                </th>
                <th scope="col" className="px-6 py-3">
                Action
                </th>
            </tr>
        </thead>
        <tbody>
        {
            tableData.map((row , index)=>{
                return(
                    <tr key={index}>
                    <th scope="row" className="lg:px-6 min-w-[200px] py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <input type="text" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"  name='itemDescription' value={row.itemDescription} placeholder="Item Description" onChange={(e)=>handleChange(index , e)} required/>
                    </th>
                    <td className="px-6 py-4 min-w-[120px]">
                    <input type="number" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"  name='itemQty' value={row.itemQty}  placeholder="2" onChange={(e)=>handleChange(index , e)} required/>
                    </td>
                    <td className="px-6 py-4 min-w-[120px]">
                    <input type="number" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"  name='Price' value={row.Price}  placeholder="200" onChange={(e)=>handleChange(index , e)} required/>
                    </td>
                    <td className="px-6 py-4 min-w-[180px]">
                    <input type="number" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"  name='Tax' value={row.Tax}  placeholder="15.5" onChange={(e)=>handleChange(index , e)} required/>
                    </td>
                    <td className="px-6 py-4  min-w-[220px]">
                    <input type="number" id="text" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"  name='Amount' value={row.Amount}  placeholder="1000" onChange={(e)=>handleChange(index , e)} required/>
                    </td>
                    <td className="px-6 py-4">
                        <button type='button' onClick={()=>removeRow(index)} href="#" className=" text-red-600 dark:text-red-500 hover:underline font-semibold">Remove</button>
                    </td>
            </tr>
                )
            })
        }
        </tbody>
        <button
        onClick={addRow}
         type="button"
         className="flex text-sm items-center mt-3 gap-1 hover:text-blue-700 font-bold text-purple-600">
        <IoAddSharp size={20}/>
        Add line Item
       </button>
    </table>
</div>

  )
}
