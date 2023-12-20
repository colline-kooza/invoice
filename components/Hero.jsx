import Link from 'next/link'
import React from 'react'
import {FaAngleRight, FaArrowDown } from "react-icons/fa"


export default function Hero() {
  return (
    <div class="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-8 lg:py-24 xl:py-4 lg:mt-3 xl:mt-5" data-aos="fade-right" data-aos-duration="800">
          <div class="pr-2 md:mb-14 py-4 md:py-0">
            <h1 class="text-4xl font-semibold text-blue-900 xl:text-5xl lg:text-2xl"><span class="block w-full">Free Invoice Generator</span> for your business!</h1>
            <p class="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Empowering you to make better financial decisions, Create , manage , and track ,Recurring Invoices download as PDF , Email and print Invoices 
            </p>
            <div class="mt-4 ">
              <Link href="" class="inline-flex flex gap-2 font-semibold items-center px-5 py-3 text-sm text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600">Create Invoice <FaArrowDown/></Link>
            </div>
          </div>
          <div class="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
            <img id="heroImg1" class="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png" alt="Awesome hero page image" width="500" height="488"/>
          </div>
        </div>
  )
}
