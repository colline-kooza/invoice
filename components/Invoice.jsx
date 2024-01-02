"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Invoice() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos="fade-down" className='w-full flex flex-col items-center gap-4 mt-[3rem] lg:px-8'>
    <h2 className='text-blue-800 text-4xl font-bold'>Invoices</h2>
    <div className='h-[60vh]  w-full invoice'></div>
    </div>

  )
}
