import React from 'react'
import SpotlightCard from '../ui/custom/SpotlightCard'
import { Rocket, Check } from 'lucide-react'

const HowItWorks: React.FC = () => {
    const card_detail = [
      {icon: Rocket, glow: 'rgba(50, 255, 255, 0.25)', bgColor: 'red', title:"Create Shortcuts", text:"Save your most-used phrases and snippets."},
      {icon: Rocket, glow: 'rgba(255, 50, 255, 0.25)', bgColor: 'red', title:"Expand Instantly", text:"Type a shortcut, and FlashType does the rest."},
      {icon: Check, glow: 'rgba(255, 255, 50, 0.25)', bgColor: 'red', title:"Boost Productivity", text:"Save hours of repetitive typing every week!"}
    ]
  return (
    <section className='flex gap-10 flex-col my-30'>
        <div className='flex justify-between gap-10 flex-col md:flex-row'>
          <h1 className='text-5xl font-semibold text-nowrap'>How FlashText Works</h1>
          <p className='text-slate-500 text-xl text-right w-full md:max-w-[550px]'>Save time by setting up shortcuts for frequently used text. Type less, work faster, and boost your productivity with FlashType!</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
          {
            card_detail.map((card,index) => (
              <SpotlightCard
                className={`bg-neutral-900 flex gap-2 flex-col text-white`}
                key={index}
                spotlightColor={card.glow}
                >
                <div>
                  <card.icon size={40}/>
                </div>
                <h2 className='text-2xl font-bold'>{card.title}</h2>
                <p className=''>{card.text}</p>
              </SpotlightCard>
            ))
          }
        </div>
      </section>
  )
}

export default HowItWorks