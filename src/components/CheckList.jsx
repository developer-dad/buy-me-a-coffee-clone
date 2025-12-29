import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";

function CheckList() {
  return (
    <div className='my-12 flex justify-center items-start flex-col mx-4'>
        <p className='font-bold text-3xl '>Designed for creators, <br /><span className='text-[#717171]'>not for businesses.</span></p>
        <div className='mt-7 flex items-start w-full gap-4'>
                <div>
                    <FaRegCheckCircle size={25} color='#7E7E7D'/>
                </div>
                <p className='text-[#7E7E7D] text-[20px]'>
                    We don't call them <br /> "customers" or transactions. <br /> They are your <span className='text-black font-bold'>supporters.</span>
                </p>
        </div>
        <div className='mt-7 flex items-start w-full gap-4'>
                <div>
                    <FaRegCheckCircle size={25} color='#7E7E7D'/>
                </div>
                <p className='text-[#7E7E7D] text-[20px]'>
                    You have <span className='text-black font-bold'>100% ownership</span> of your supporters. We never <br />email them, and you can <br /> export the list any time you <br />like.
                </p>
        </div>
        <div className='mt-7 flex items-start w-full gap-4'>
                <div>
                    <FaRegCheckCircle size={25} color='#7E7E7D'/>
                </div>
                <p className='text-[#7E7E7D] text-[20px]'>
                    You get to <span className='text-black font-bold'>talk to a human</span> for help, or if you just like some advice to hit the ground <br /> running.
                </p>
        </div>
        <div className='mt-7 flex items-start w-full gap-4'>
                <div>
                    <FaRegCheckCircle size={25} color='#7E7E7D'/>
                </div>
                <p className='text-[#7E7E7D] text-[20px]'>
                   You get paid instantly to your bank account. <span className='text-black font-bold'>No more 30-day delays.</span>
                </p>
        </div>
    </div>
  )
}

export default CheckList