import React from 'react'
import Carousel from './Carousel'
import Image from 'next/image'
import Image1 from '../public/1.jpg'
import Image2 from '../public/2.jpg'
import Image3 from '../public/3.jpg'
import Image4 from '../public/4.jpg'
import Image5 from '../public/5.jpg'

const imageItems = [
    <Image className='h-full w-full' src={Image1} alt='img1' />,
    //img2
    <Image className='h-full w-full' src={Image2} alt='img2' />,
    <Image className='h-full w-full' src={Image3} alt='img3' />,
    <Image className='h-full w-full' src={Image4} alt='img4' />,
    <Image className='h-full w-full' src={Image5} alt='img5' />,
]
const Hero = () => {
    return (
        <section className='container mx-auto'>
            <div className=' mx-4 p-4 border-solid border-2 min-h-screen flex flex-col items-center justify-center gap-y-10'>
                <div className='w-[600px] text-[4rem] font-bold text-center mb-4 font-body'>
                    <h2 className='text-[#3F4847]'>Your Dream Exploration Forest</h2>
                </div>
                <div className='btn bg-[#F9FCFE] bg-opacity-50 p-6 text-2xl font-bold cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-slate-400 font-body'>
                    <h3>Get an Instant Estimation</h3>
                </div>
            </div>
            <Carousel items={imageItems} />
        </section>
    )
}

export default Hero
