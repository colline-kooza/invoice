import Image from 'next/image'
import React from 'react'
import { FaAddressBook } from 'react-icons/fa'
import { FaArrowRightToCity } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";

export default function PreviewDetailedData({ data }) {
    const totalAmount = data?.tableData?.reduce((sum, row) => {
        const total = parseFloat(row.Amount)
        return !isNaN(total) ? sum + total : sum
    }, 0)

    const options = { year: "numeric", month: "long", day: "numeric" }
    const newInvoiceDate = new Date(data?.invoiceDate).toLocaleDateString(undefined, options)
    const newInvoiceDue = new Date(data?.dueDate).toLocaleDateString(undefined, options)

    return (
        <>
            {data ? (
                <div className="mx-4 px-4 mt-8 lg:px-24 py-8 flex flex-col gap-8 tracking-[.4px] bg-white shadow-lg rounded-lg">
                    {/* Details */}
                    <div className="flex flex-row lg:flex-row w-full min-h-[50vh] lg:space-x-6">
                        <div className="flex-1 flex flex-col space-y-6">
                            <div className="w-28 h-28 mx-auto lg:mx-0">
                                <Image className="w-full h-full object-contain" src={data?.imageUrl} alt="" width={100} height={100} />
                            </div>
                            <div className=" lg:text-left">
                                <h2 className="text-sm font-semibold text-gray-600">TO:</h2>
                                <h1 className="text-lg font-bold text-gray-800">{data.clientCompany}</h1>
                            </div>
                            <div className="text-left">
                                <h2 className="text-sm font-semibold text-gray-600">Client Address:</h2>
                                <p className="text-sm font-bold text-gray-700 flex items-center justify-center lg:justify-start"><FaArrowRightToCity className="mr-2" /> {data.clientAddress}</p>
                            </div>
                            <div className="text-left">
                                <h2 className="text-sm font-semibold text-gray-600">Client City:</h2>
                                <p className="text-sm font-bold text-gray-700 flex items-center justify-center lg:justify-start"><FaAddressBook className="mr-2" /> {data.clientCity}</p>
                            </div>
                            <div className="text-left">
                                <h2 className="text-sm font-semibold text-gray-600">Client Country:</h2>
                                <p className="text-sm font-bold text-gray-700 flex items-center justify-center lg:justify-start"><BiWorld className="mr-2" /> {data.clientCountry}</p>
                            </div>
                        </div>
                        <div className="hidden lg:flex flex-1 flex-col space-y-2 items-end">
                            <h2 className="text-sm font-semibold text-gray-600">FROM:</h2>
                            <h1 className="text-2xl font-bold text-gray-800">{data.companyName}</h1>
                            <div className="text-sm font-semibold text-gray-600">{data.AuthorName}</div>
                        </div>
                        <div className="flex-1 flex flex-col items-center lg:items-end space-y-5">
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 ">Invoice</h1>
                            <div className="flex flex-col lg:flex-row lg:space-x-2 text-sm text-gray-600">
                                <p className="lg:mb-0 mb-2">NO: {data.invoiceNumber}</p>
                                <span className="hidden lg:inline-block w-px h-6 bg-gray-300"></span>
                                <p>{newInvoiceDate}</p>
                            </div>
                            <div className="lg:hidden flex flex-col space-y-2 ">
                                <h2 className="text-xs font-semibold text-gray-600 text-end">FROM:</h2>
                                <h1 className="text-xs font-bold text-gray-800 text-end">{data.companyName}</h1>
                                <div className="text-xs font-semibold text-gray-600 text-end">{data.AuthorName}</div>
                            </div>
                        </div>
                    </div>
                    {/* Table */}
                    <div className="relative overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Item Description</th>
                                    <th scope="col" className="px-6 py-3">Item Qty</th>
                                    <th scope="col" className="px-6 py-3">Price</th>
                                    <th scope="col" className="px-6 py-3">Tax</th>
                                    <th scope="col" className="px-6 py-3">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.tableData.map((row) => (
                                    <tr key={row.id} className="bg-white border-b hover:bg-gray-50">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900">{row.itemDescription}</th>
                                        <td className="px-6 py-4">{row.itemQty}</td>
                                        <td className="px-6 py-4">{row.Price}</td>
                                        <td className="px-6 py-4">{row.Tax}</td>
                                        <td className="px-6 py-4">${row.Amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <hr />
                    {/* Terms & Conditions */}
                    <div className="flex flex-col lg:flex-row justify-between mt-5 space-y-4 lg:space-y-0">
                        <div className="lg:w-1/2 space-y-2">
                            <h2 className="text-lg font-bold text-gray-800">TERMS & CONDITIONS</h2>
                            <p className="text-sm text-gray-500">{data.notes}</p>
                            <div className="space-y-1">
                                <p className="text-sm font-semibold text-gray-800">DUE DATE:</p>
                                <p className="text-sm text-gray-500">{newInvoiceDue}</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-2">
                            <div className="flex justify-end space-x-4">
                                <h2 className="text-sm font-semibold text-gray-800">SubTotal:</h2>
                                <p className="text-sm font-bold text-gray-800">${totalAmount.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <h2 className="text-sm font-semibold text-gray-800">Discount:</h2>
                                <p className="text-sm font-bold text-gray-800">$0.00</p>
                            </div>
                            <div className="flex justify-end space-x-4 bg-gray-100 p-4 rounded">
                                <h2 className="text-lg font-bold text-gray-800">Total:</h2>
                                <h2 className="text-lg font-bold text-gray-800">${totalAmount.toFixed(2)}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center p-8 flex flex-col items-center justify-center gap-2">
                    <p className="text-lg text-red-600">Failed to fetch invoices. Please create some.</p>
                    <button
                        className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                        onClick={() => window.location.reload()}
                    >
                        Create New
                    </button>
                </div>
            )}
        </>
    )
}
