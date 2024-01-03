import Faq from '@/components/Faq'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Invoice from '@/components/Invoice'
import Pricing from '@/components/Pricing'
import Steps from '@/components/Steps'
import React from 'react'

export default async function Page() {

  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Steps/>
      <Invoice/>
      <Features/>
      <Pricing/>
      <Faq/>
    </div>
  )
}
