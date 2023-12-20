import React from 'react'
import { BsBank } from "react-icons/bs";
import {  CgSelectO } from "react-icons/cg";
import { TbDetails } from "react-icons/tb";



export default function Steps() {
  return (
    <div className='bg-gray-100 lg:mx-[4rem] mt-8 flex flex-col gap-12 p-12'>
    <h2 className='text-slate-900 flex flex-col items-center md:text-2xl text-2xl text-center lg:text-3xl font-bold '>Create Your invoice in Less than 2 Minutes</h2>
<div>
  <div>
    <ol
      class="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-3"
    >
      <li class="flex items-center justify-center gap-2 p-4">
      <TbDetails size={30} className='shirke-0'/>
        <p class="leading-none">
          <strong class="block font-medium">Transition Details </strong>
          <small class="mt-1"> Invoice Details.</small>
        </p>
      </li>

      <li class="relative flex items-center justify-center gap-2 bg-gray-50 p-4">
        <span
          class="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-gray-100 ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50 sm:block"
        >
        </span>

        <span
          class="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-gray-100 ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white sm:block"
        >
        </span>

        <BsBank className='shirke-0' size={30}/>


        <p class="leading-none">
          <strong class="block font-medium"> Bank Details </strong>
          <small class="mt-1"> Bank Details(Optional)? </small>
        </p>
      </li>

      <li class="flex items-center justify-center gap-2 p-4">
      <CgSelectO size={30} />


        <p class="leading-none">
          <strong class="block font-medium"> Select Design </strong>
          <small class="mt-1">download/email invoice</small>
        </p>
      </li>
    </ol>
  </div>
</div>
     </div>
  )
}
