import React from 'react'
import { GlobeDemo } from './World'

const Hero = () => {
  return (
    <div className='w-full bg-[#001125] text-white'>
        <div className='max-w-[1240px] w-full mx-auto flex lg:flex-row flex-col items-center gap-5 justify-between'>
            <div className='w-full'>
                <h1 className='text-[64px] leading-[78px] font-semibold uppercase'>Ultra-low <br/> latency vpn</h1>
            </div>
            <div className='w-full'>
                <GlobeDemo/>
            </div>
        </div>
    </div>
  )
}

export default Hero