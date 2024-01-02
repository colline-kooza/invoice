"use client"
import { signOut, useSession } from "next-auth/react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
    const [state, setState] = useState(false)
    const [popupVisible, setPopupVisible] = useState(false);
    const handleInitialClick = () => {
      setPopupVisible(!popupVisible);
    };
       const { data: session, status} = useSession()
       const pathName=usePathname()
       if (pathName.startsWith("/invoice/") && pathName !== "/invoice/new") {
           return null;
         }
       const navigation = [
           { title: "Free Tools", path: "/" },
           { title: "Features", path: "/" },
           { title: "Customers", path: "/" },
           { title: "Pricing", path: "/" }
       ]
   
  return (
    <nav className="bg-white border-b w-full md:static md:text-sm md:border-none">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link  href="/">
                        <img
                            src="/invoicerLogo.png"
                            width={180}
                            height={150}
                            alt="make invoice"
                        />
                    </Link>
                    <div className="md:hidden flex items-center gap-2">
                        <button className="text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                <div className="flex gap-1 lg:hidden md:hidden">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                </div>
                                )
                            }
                        </button>
                      {
                        status==="authenticated"?(
                            <button onClick={handleInitialClick}
                            className="bg-green-700 font-semibold py-1 px-3.5 md:hidden lg:hidden flex items-center justify-center text-lg text-white rounded-[50%]">{session.user.name[0]}</button>
                        ):(
                           ""
                        )
                      }
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-gray-700 hover:text-indigo-600">
                                        <a href={item.path} className="block">
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        <span className='hidden w-px h-6 bg-red-300 md:block'></span>
                     {
                        status === "loading"?(
                            <div className='flex items-center justify-center'>
                         <span class="loader1 flex items-center justify-center mb-[1rem]"></span>
                         </div>
                        ):(
                            <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                            {
                                    status === "authenticated"?(
                                    <li>
                                    <Link onClick={()=>signOut()} href="/register" className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                                       Log Out
                                    </Link>
                                   </li>
                                    ):(
                                     <li>
                                    <Link href="/register" className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                                        Register
                                    </Link>
                                </li>
                                    )
                                }
                               {
                                status==="authenticated"?( 
                                <button onClick={handleInitialClick}
                                className="bg-green-700 font-semibold py-1 px-3 hidden lg:flex items-center justify-center text-lg text-white rounded-[50%]">{session.user.name[0]}</button>
                                ):(
                                    <li>
                                    <Link href="/login" className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none">
                                        Log in
                                    </Link>
                                </li>
                                )
                               }
                            </div>
                        )
                     }
                    </ul>
                </div>
            </div>
            {popupVisible && status === 'authenticated' && (
        <div className="z-30 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg flex gap-2 items-center justify-center flex-col">
          <button 
            className="bg-green-700 font-semibold py-2 px-4 flex items-center justify-center text-2xl text-white rounded-[50%]">{session.user.name[0]}</button>
            <h2 className="text-lg font-semibold ">{session.user.name}</h2>
            <p className="text-gray-500">{session.user.email}</p>
            <button
              className="mt-4 shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded"
              onClick={handleInitialClick}
            >
              Close
            </button>
          </div>
        </div>
             )}
        </nav>
  )
}
