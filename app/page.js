import Faq from '@/components/Faq'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Invoice from '@/components/Invoice'
import Pricing from '@/components/Pricing'
import Steps from '@/components/Steps'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function Page() {
  // const session= await getServerSession({authOptions})
  // console.log(session.user)
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
