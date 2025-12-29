import React from "react";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";

function Footer() {

    const [open, setopen] = useState(false)
    const [openn, setopenn] = useState(false)

    const toggleApps = () => {
        setopen(!open)
        setopenn(false)
    }

    const toggleResources = () => {
        setopenn(!openn)
        setopen(false)
    }

  return (
    <div className="mx-3 my-7">
      <div className="flex justify-between font-bold">
        <p>About</p>
        <p>Help Center</p>

        <div className="relative cursor-pointer" onClick={toggleApps}>
          <p className="hover:text-gray-600">Apps</p>
          <div className={`absolute font-medium bg-white px-3 py-2.5 -top-32 -left-8 rounded-3xl shadow-2xl border-gray-200 border ${open ? "block" : "hidden"}`}>
            <div className="flex justify-start items-center gap-1.5 px-5 py-2 rounded-2xl hover:bg-gray-200 ">
                <FaApple size={25}/>
                <li className="text-[18px]">iOS</li>
            </div>
            <div className="flex justify-start items-center gap-1.5 px-5 py-2 rounded-2xl hover:bg-gray-200 ">
                <FaAndroid size={25}/>
                <li className="text-[18px]">Android</li>
            </div>
          </div>
        </div>

        <div className="relative cursor-pointer w-37" onClick={toggleResources}>
          <p className="hover:text-gray-600">Resources</p>
          <div className={`absolute font-medium bg-white px-3 py-2.5 -top-86 -left-24 rounded-3xl shadow-2xl border-gray-200 border ${openn ? "block" : "hidden"}`}>
            <div className="flex justify-start items-center gap-1.5 px-5 py-2 rounded-2xl hover:bg-gray-200 ">
                <p className="text-[18px]">Feature Request</p>
            </div>
            <div className="flex justify-start items-center gap-1.5 px-5 py-2 rounded-2xl hover:bg-gray-200 ">
                <p className="text-[18px]">Buttons</p>
            </div>
            <div className="flex justify-start items-center gap-1.5 px-5 py-2 rounded-2xl hover:bg-gray-200 ">
                <p className="text-[18px]">QR Code</p>
            </div>
            <div className="flex justify-start items-center gap-1.5 px-5 py-2 rounded-2xl hover:bg-gray-200 ">
                <p className="text-[18px]">Stream Alerts</p>
            </div>
            <div className="flex justify-start items-center gap-1.5 px-5 py-2 rounded-2xl hover:bg-gray-200 ">
                <p className="text-[18px]">ko-Fi Comparision</p>
            </div>
            <div className="flex justify-start items-center gap-1.5 px-5 py-2 rounded-2xl hover:bg-gray-200 ">
                <p className="text-[18px]">Patreon Comparision</p>
            </div>
            <div className="flex justify-start items-center gap-1.5 px-5 py-2 rounded-2xl hover:bg-gray-200 ">
                <p className="text-[18px]">Security Policies</p>
            </div>
          </div>
        </div>

      </div>
      <div className="flex justify-center gap-6 mt-5">
        <FaXTwitter size={25} />
        <IoLogoYoutube size={25} />
        <FaInstagram size={25} />
      </div>
      <div className="text-[#434343] flex justify-center gap-6 mt-7">
        <div className="flex justify-center items-center gap-0.5">
          <FaRegCopyright />
          <p>Buy Me a Coffee</p>
        </div>
        <p>Privecy</p>
        <p>Terms</p>
      </div>
    </div>
  );
}

export default Footer;
