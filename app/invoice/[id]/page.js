import DeatiledBtn from '@/components/DeatiledBtn'
import PreviewData from '@/components/PreviewData'
import PreviewDetailedData from '@/components/PreviewDetailedData'
import getSingleContact from '@/utils/getSingleInvoice'
import React from 'react'

export default async function page({params:{id}}) {
    const invoice =await  getSingleContact(id)
  return (
    <div className='flex flex-col gap-2 mb-10'>
        <DeatiledBtn url={invoice.id}/>
        <PreviewDetailedData data={invoice}/>
    </div>
  )
}

