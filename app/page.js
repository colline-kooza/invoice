import Faq from '@/components/Faq'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Invoice from '@/components/Invoice'
import Pricing from '@/components/Pricing'
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
      <Pricing/>
      <Faq/>
    </div>
  )
}
