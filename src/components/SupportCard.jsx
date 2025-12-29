import React from 'react'
import JulietCoffee from './JulietCoffee'

function SupportCard() {
  return (
    <div className='bg-white mx-5 mt-10 rounded-3xl px-4 mb-5 pb-4'>
        <p className='text-gray-500 font-bold text-sm tracking-widest pt-5'>
            SUPPORT
        </p>
        <p className='font-bold text-3xl mt-2'>
            Give your audience an easy way to say thanks.
        </p>
        <p className='mt-2 text-[18px]'>
            Buy Me a Coffee makes <br />supporting fun and easy. In just a <br />couple of taps, your fans can make <br />the payment (buy you a coffee) <br />and leave a message.
        </p>
        <JulietCoffee/>
    </div>
  )
}

export default SupportCard