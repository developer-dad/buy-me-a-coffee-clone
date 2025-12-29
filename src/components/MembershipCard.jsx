import React from 'react'
import membershipBanner from '../assets/membership_banner.png'

function MembershipCard() {
  return (
    <div className='bg-white mx-5 mt-10 rounded-3xl px-4 mb-5 pb-4'>
        <p className='text-gray-500 font-bold text-sm tracking-widest pt-5'>
            MEMBERSHIP
        </p>
        <p className='font-bold text-3xl mt-2'>
            Start a membership for <br />your biggest fans.
        </p>
        <p className='mt-2 text-[18px]'>
            Earn a recurring income by accepting monthly or yearly subscriptions. Share exclusive content, or just give them a way to support your work on an ongoing basis.
        </p>
        <img src={membershipBanner} alt="Membership banner"/>
    </div>
  )
}

export default MembershipCard