import { Button } from '@/components/ui/button'
import React from 'react'
import HowItWorks from '@/components/LandingUI/HowItWorks'
import WhoItsFor from '@/components/LandingUI/WhoItsFor'
import StarBorder from '@/components/ui/starBorder'

const Landing: React.FC = () => {
  return (
    <div className='px-20 flex flex-col'>
      <header className='w-full gap-10 flex items-center flex-col justify-center min-h-[calc(100vh-70px)]'>
        <h1 className='text-5xl leading-16 font-semibold text-center'>Type Smarter, Not Harder - with FlashType!</h1>
        <h2 className='text-2xl text-slate-700 text-center max-w-[800px]'>Stop typing the same phrases over and over! Save time with instant text shortcuts. Expand snippets effortlessly and boost your productivity! </h2>
        <StarBorder className='cursor-pointer'>
          <Button className='bg-transparent text-lg py-6 px-5 cursor-pointer'>Get Started</Button>
        </StarBorder>
      </header>
      <WhoItsFor/>
      <HowItWorks/>
    </div>
  )
}

export default Landing

