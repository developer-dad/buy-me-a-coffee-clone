import React from "react";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

function Footer() {
  const [openApp, setopenApp] = useState(false);
  const [openRes, setopenRes] = useState(false);

  const toggleApps = () => {
    setopenApp((prev) => !prev);
    setopenRes(false);
  };

  const toggleResources = () => {
    setopenRes((prev) => !prev);
    setopenApp(false);
  };

  return (
    <div className="mx-3 my-7">
      <div className="flex justify-between font-bold">
        <p>About</p>
        <p>Help Center</p>

        <div className="relative cursor-pointer" onClick={toggleApps}>
          <div className="flex items-center gap-1">
            <p className="hover:text-gray-600">Apps</p>
            <IoIosArrowUp color="#717171" className={`transition-transform duration-300 ${openApp ? "rotate-180" : "rotate-0"}`}/>
          </div>
          <div
            className={`absolute font-medium bg-white px-3 py-2.5 -top-32 -left-8 rounded-3xl shadow-2xl border-gray-200 border ${
              openApp ? "block" : "hidden"
            }`}
          >
            <div className="flex justify-start items-center gap-1.5 px-5 py-2 rounded-2xl hover:bg-gray-200 ">
              <FaApple size={25} />
              <p className="text-[18px]">iOS</p>
            </div>
            <div className="flex justify-start items-center gap-1.5 px-5 py-2 rounded-2xl hover:bg-gray-200 ">
              <FaAndroid size={25} />
              <p className="text-[18px]">Android</p>
            </div>
          </div>
        </div>

        <div
          className="relative cursor-pointer w-fit"
          onClick={toggleResources}
        >
          <div className="flex items-center gap-1">
            <p className="hover:text-gray-600">Resources</p>
            <IoIosArrowUp color="#717171" className={`transition-transform duration-300 ${openRes ? "rotate-180" : "rotate-0"}`}/>
          </div>
          <div
            className={`absolute font-medium bg-white px-3 py-2.5 -top-86 w-60 -left-40 rounded-3xl shadow-2xl border-gray-200 border ${
              openRes ? "block" : "hidden"
            }`}
          >
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
