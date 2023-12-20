import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Invoice from '@/components/Invoice'
import Steps from '@/components/Steps'
import React from 'react'

export default function Page() {
  return (
    <div >
      <Hero/>
      <Steps/>
      <Invoice/>
      <Steps/>
      <Features/>
    </div>
  )
}
