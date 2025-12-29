import React from 'react'
import { FaHeart } from "react-icons/fa";
import { BiCoffeeTogo } from "react-icons/bi";

function JulietCoffee() {
  return (
    <div className='bg-white mx-3.5 my-8 border border-gray-300 rounded-3xl px-5 py-4'>
        <p className='font-bold'>
            Buy Juliet a Coffee
        </p>
        <div className='bg-red-100 border border-red-300 rounded-xl py-2.5 px-5 mt-4 flex items-center justify-between'>
            <p className='text-3xl'>☕</p>
            <p className='text-gray-500 font-bold'>x</p>
            <p className='border border-[#D8573F] rounded-full px-2 text-white bg-[#D8573F]'>1</p>
            <p className='border border-[#D8573F] rounded-full px-2 text-[#D8573F] bg-white'>3</p>
            <p className='border border-[#D8573F] rounded-full px-2 text-[#D8573F] bg-white'>5</p>
        </div>
        <p className='bg-gray-100 mt-3.5 rounded-xl px-3 py-3 text-gray-500 text-xs h-20'>
            Say something nice...
        </p>
        <button className='bg-[#D8573F] text-white mt-4 w-full py-3 rounded-full font-bold text-xs'>
            Support $3
        </button>
        <div className='mt-3'>
            <p className='text-xs font-bold'>
                Recent Supporters
            </p>
            <div className='flex items-center gap-2.5 mt-3'>
                <div className='bg-green-200 p-1.5 rounded-full'>
                    <BiCoffeeTogo size={27}/>
                </div>
                <div>
                    <p className='text-xs font-medium'>
                    Cathy G bought a coffee.
                </p>
                <p className='text-xs'>
                    Thanks Cathy! 
                </p>
                <FaHeart size={10}/>
                </div>
            </div>
            <div className='flex items-center gap-2.5 mt-3'>
                <div className='bg-orange-200 p-1.5 rounded-full'>
                    <BiCoffeeTogo size={27}/>
                </div>
                <div>
                    <p className='text-xs font-medium'>
                    Tony Steel bought 3 coffee.
                </p>
                <p className='text-xs'>
                    Thanks Tony! 
                </p>
                <FaHeart size={10}/>
                </div>
            </div>
        </div>
        {/* <p className='relative -top-80 right-7 bg-white w-fit p-1.5 rounded-full text-2xl border border-gray-200 shadow-2xl'>
            💯
        </p>
        <p className='relative -top-72 right-12 bg-white w-fit p-1.5 rounded-full text-2xl border border-gray-200 shadow-2xl'>
            ❤️
        </p>
        <p className='relative -top-72 right-6 bg-white w-fit p-0.5 rounded-full text-2xl border border-gray-200 shadow-2xl'>
            👋
        </p> */}
    </div>
  )
}

export default JulietCoffee