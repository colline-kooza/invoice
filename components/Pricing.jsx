"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Pricing() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <section data-aos="fade-left" class="bg-white">
    <div class="w-full px-6 py-8  lg:py-24 lg:px-13">
        <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-10">
            <h2 class="mb-3 lg:text-4xl text-3xl font-extrabold tracking-tight text-[#020617]">Designed for business
            </h2>
            <p class="mb-5 font-light text-gray-900 sm:text-lg ">Here we focus on markets
            where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>
        <div class="lg:grid lg:grid-cols-3  sm:gap-6 lg:gap-3 lg:mx-[3rem]">
            <div
                class="flex mb-8 flex-col max-w-lg p-6 text-center text-gray-900 bg-white border border-gray-100 lg:mx-5  rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 class="mb-2 text-2xl font-semibold">Starter</h3>
                <p class="font-light text-gray-500 sm:text-sm dark:text-gray-400">Best option for small scale &amp; businesses.</p>
                <div class="flex items-baseline justify-center my-8">
                    <span class="mr-2 text-3xl font-extrabold">Free</span>
                    <span class="text-gray-500 dark:text-gray-400">/month</span>
                </div>

                <ul role="list" class="mb-8 space-y-4 text-left">
                    <li class="flex items-center space-x-3">
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className='text-sm'>Individual Designs</span>
                    </li>
                    <li class="flex items-center space-x-3">

                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className='text-sm'>No setup, or hidden fees</span>
                    </li>
                    <li class="flex items-center space-x-3">

                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className='text-sm'>Team size: <span class="font-semibold">10 customers free</span></span>
                    </li>
                    <li class="flex items-center space-x-3">

                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className='text-sm'>Premium support: <span class="font-semibold">6 months</span></span>
                    </li>
                    <li class="flex items-center space-x-3">

                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className='text-sm'>Free updates: <span class="font-semibold">6 months</span></span>
                    </li>
                </ul>
                <a href="/invoice/new"
                    class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get
                    started</a>
            </div>
            <div
                class="flex flex-col mb-8 max-w-lg p-6 text-center text-gray-900 bg-white border border-gray-100 rounded-lg lg:mx-5 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 class="mb-2 text-2xl font-semibold">Company</h3>
                <p class="font-light text-gray-500 sm:text-sm dark:text-gray-400">Best option for company scale &amp;medium businesses.</p>
                <div class="flex items-baseline justify-center my-8">
                    <span class="mr-2 text-3xl font-extrabold">$29</span>
                    <span class="text-gray-500 dark:text-gray-400">/month</span>
                </div>

                <ul role="list" class="mb-8 space-y-4 text-left">
                    <li class="flex items-center space-x-3">

                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className='text-sm'>Individual Designs</span>
                    </li>
                    <li class="flex items-center space-x-3">

                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className='text-sm'>No setup, or hidden fees</span>
                    </li>
                    <li class="flex items-center space-x-3">

                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className='text-sm'>Team size: <span class="font-semibold">20 customers free</span></span>
                    </li>
                    <li class="flex items-center space-x-3">

                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className='text-sm'>Premium support: <span class="font-semibold">1 months</span></span>
                    </li>
                    <li class="flex items-center space-x-3">

                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className='text-sm'>Free updates: <span class="font-semibold">1 months</span></span>
                    </li>
                </ul>
                <a href="/invoice/new"
                    class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get
                    started</a>
            </div>
            <div
                class="flex mb-8 flex-col lg:mx-5 max-w-lg p-6 text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 class="mb-2 text-2xl font-semibold">Premium</h3>
                <p class="font-light text-gray-500 sm:text-sm dark:text-gray-400">Best option for small scale &amp; businesses.</p>
                <div class="flex items-baseline justify-center my-8">
                    <span class="mr-2 text-3xl font-extrabold">$119</span>
                    <span class="text-gray-500 dark:text-gray-400">/month</span>
                </div>

                <ul role="list" class="mb-8 space-y-4 text-left">
                    <li class="flex items-center space-x-3">

                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className='text-sm'>Individual Designs</span>
                    </li>
                    <li class="flex items-center space-x-3">

                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className='text-sm'>No setup, or hidden fees</span>
                    </li>
                    <li class="flex items-center space-x-3">

                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className='text-sm'>Team size: <span class="font-semibold">50 customer free</span></span>
                    </li>
                    <li class="flex items-center space-x-3">

                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className='text-sm'>Premium support: <span class="font-semibold">2 weeks</span></span>
                    </li>
                    <li class="flex items-center space-x-3">

                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span className='text-sm'>Free updates: <span class="font-semibold">1 week</span></span>
                    </li>
                </ul>
                <a href="/invoice/new"
                    class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get
                    started</a>
            </div>
           
        </div>
    </div>
</section>
  )
}
