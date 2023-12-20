import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav class="relative flex items-center justify-between sm:h-10 md:justify-center  py-4 lg:px-8 px-4 mt-2 mx-4">
    <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div class="flex items-center justify-between w-full md:w-auto">
            <Link href="" aria-label="Home">
                <img src="https://www.svgrepo.com/show/491978/gas-costs.svg" height="40" width="40" />
            </Link>
            <div class="-mr-2 flex items-center md:hidden">
                <button type="button" id="main-menu" aria-label="Main menu" aria-haspopup="true" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
        </div>
    </div>
    <div class="hidden md:flex md:space-x-10">
        <Link href=""
            class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Features</Link>
        <Link href=""
            class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Pricing</Link>
        <Link href=""
            class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Blog</Link>
        <Link href="" target="_blank"
            class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Docs</Link>
        <Link href="" target="_blank"
            class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Docs</Link>
        <Link href="" target="_blank"
            class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Docs</Link>
    </div>
    <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
        <span class="inline-flex">
            <Link href="" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-blue-600 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out">
              Login
            </Link>
        </span>
        <span class="inline-flex rounded-md shadow ml-2">
            <Link href="" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out">
            Signup
            </Link>
        </span>
    </div>
</nav>
  )
}
