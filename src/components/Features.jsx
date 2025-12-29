import React from "react";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoIosGlobe } from "react-icons/io";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { PiHeartDuotone } from "react-icons/pi";
import { MdSecurity } from "react-icons/md";

function Features() {
  return (
    <div className="bg-white mx-5 mt-10 rounded-3xl px-5 mb-5 py-5">
        <p className='font-bold text-3xl'>Make 20% or more, <br /><span className='text-[#717171]'>compared to other platforms.</span></p>
        <div className="mt-9">
            <div><BsCalendar2DateFill size={30}/></div>
            <p className="text-xl font-bold mt-2">
                Not just a membership
            </p>
            <p className="text-[#717171] text-[18px] mt-2">
                Creators who previously only used Patreon noticed a massive increase in earnings after accepting one-off payments.
            </p>
        </div>
        <div className="mt-9">
            <div><IoIosGlobe size={35}/></div>
            <p className="text-xl font-bold mt-2">
                6 new languages
            </p>
            <p className="text-[#717171] text-[18px] mt-2">
                We now support Spanish, French, Italian, German and Ukrainian—making it easier for your global audience to support you.
            </p>
        </div>
        <div className="mt-9">
            <div><MdOutlineMarkEmailRead size={35}/></div>
            <p className="text-xl font-bold mt-2">
                Email marketing
            </p>
            <p className="text-[#717171] text-[18px] mt-2">
                Email marketing Instead of paying separately for email marketing tools like Mailchimp, send unlimited emails to your fans for free.
            </p>
        </div>
        <div className="mt-9">
            <div><PiHeartDuotone size={35}/></div>
            <p className="text-xl font-bold mt-2">
                Being friendly converts
            </p>
            <p className="text-[#717171] text-[18px] mt-2">
                ICYMI, we make it simple and fun for your supporters. While you cannot put a number on feelings, it tends to show on the results.
            </p>
        </div>
        <div className="mt-9">
            <div><MdSecurity size={35}/></div>
            <p className="text-xl font-bold mt-2">
                Your privacy comes first
            </p>
            <p className="text-[#717171] text-[18px] mt-2">
                Receive fan support safely without disclosing your identity or address. We’ll do the heavy-lifting.
            </p>
        </div>
    </div>
  );
}

export default Features;
