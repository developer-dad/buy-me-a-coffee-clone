import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className='mx-3 my-7'>
        <div className='flex justify-between font-bold'>
            <p>About</p>
            <p>Help Center</p>
            <p>Apps</p>
            <p>Resources</p>
        </div>
        <div className='flex justify-center gap-6 mt-5'>
            <FaXTwitter size={25}/>
            <IoLogoYoutube size={25}/>
            <FaInstagram size={25}/>
        </div>
        <div className='text-[#434343] flex justify-center gap-6 mt-7'>
            <div className='flex justify-center items-center gap-0.5'>
                <FaRegCopyright/>   
            <p>
                Buy Me a Coffee
            </p>
            </div>
            <p>
                Privecy
            </p>
            <p>
                Terms
            </p>
        </div>
    </div>
  )
}

export default Footer