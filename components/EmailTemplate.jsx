
import React from 'react'

export default function EmailTemplate({invoiceUrl}) {
  return (
    <div>
    <h1 className='text-sm font-bold font-mono'>Click here to view your invoice,
    <a href={invoiceUrl}> view invoice </a>
    </h1>
    </div>
  )
}
