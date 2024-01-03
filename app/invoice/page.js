import { authOptions } from '@/utils/authOptions';
import getInvoices from '@/utils/getInvoices';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';

export default async function page() {
  const invoices = await getInvoices();
  const session = await getServerSession(authOptions);
  const userId = await session?.user.id;
  const userInvoices = invoices.filter((invoice) => invoice.userId === userId);

  return (
    <>
      {session ? (
        <>
          {userInvoices ? (
            <div className="relative lg:mx-[4rem] lg:my-8 overflow-hidden">
              <div className="flex gap-4 lg:justify-between items-center">
                <h2 className="p-5 text-2xl font-semibold text-left rtl:text-right text-gray-900">
                  Invoices ({userInvoices.length})
                </h2>
                <div>
                  <Link
                    href="/invoice/new"
                    className=" flex text-sm items-center gap-2 px-4 py-2 text-white bg-red-600 rounded-lg duration-150 hover:border hover:border-sky-500 hover:text-black hover:bg-white active:bg-indigo-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path
                        fillRule="evenodd"
                        d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Create Invoice
                  </Link>
                </div>
              </div>

              {userInvoices.length > 0 ? (
                <div className="max-w-full overflow-x-auto"> 
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          INVOICE ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                          INVOICE NAME
                        </th>
                        <th scope="col" className="px-6 py-3">
                          INVOICE DATE
                        </th>
                        <th scope="col" className="px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {userInvoices?.map((invoice) => {
                        return (
                          <tr key={invoice.id} className="bg-white border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                              {invoice.id}
                            </th>
                            <td className="px-6 py-4 min-w-[200px]">{invoice.clientCompany}</td>
                            <td className="px-6 py-4 min-w-[300px]">{invoice.invoiceDate}</td>

                            <td className="px-6 py-4 text-right">
                              <Link href={`/invoice/${invoice.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                View
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center p-8">
                  <p className="text-lg text-gray-600">No invoices found. Please add some invoices.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center p-8 flex flex-col items-center justify-center gap-2">
              <p className="text-lg text-red-600">Failed to fetch invoices. Please make some.</p>
              <Link href="/invoice/new" className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                Create New
              </Link>
            </div>
          )}
        </>
      ) : (
        <div className="text-center p-8 flex flex-col items-center justify-center gap-5">
          <p className="text-lg text-red-600">Failed to access this page. Please login.</p>
          <Link href="/login" className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
            Log in
          </Link>
        </div>
      )}
    </>
  );
}
