import React from 'react'
import Image from 'next/image'
import Image1 from '../public/logo.png'
import { GiMountainCave } from 'react-icons/gi'
const Navbar = () => {
    return (
        <div className='container mx-auto absolute top-0'>
            <div className='flex justify-between items-center px-14 text-white py-4 font-body'>
                <div className='flex items-center gap-x-4'>
                    <a href='#' className='flex flex-row items-center gap-x-4'>
                        <GiMountainCave className='text-black text-[3rem] ' />
                        <h3 className='text-xl'>Lingua</h3>
                    </a>
                </div>
                <div>
                    <ul className='flex flex-row gap-x-6 items-center text-xl'>
                        <a href='#' className='hover:scale-105 transition-all duration-300 hover:mx-1'>
                            <li>Home</li>
                        </a>
                        <a href='#' className='hover:scale-105 transition-all duration-300 hover:mx-1'>
                            <li>Contact</li>
                        </a>
                        <a href='#' className='hover:scale-105 transition-all duration-300 hover:mx-1'>
                            <li>Menu</li>
                        </a>
                    </ul>
                </div>
                <button
                    className='btn bg-transparent rounded-3xl py-1 px-4 text-xl border-solid border-2 hover:scale-105 transition-all duration-200 hover:bg-slate-400
                '>
                    Buy Now!
                </button>
            </div>
        </div>
    )
}

export default Navbar
