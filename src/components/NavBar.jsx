import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiHeartOutline } from "react-icons/ti";
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import logo from "../assets/logo.png";

function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <div className="h-16 bg-white flex justify-between items-center px-2.5">
        {/* left */}
        <div className="flex items-center gap-1.5">
          {/* hamburger */}
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <GiHamburgerMenu size={22} />
          </button>

          {/* logo */}
          <img src={logo} alt="logo" width={22} />
        </div>

        {/* right */}
        <div className="flex items-center gap-2">
          <button className="hidden md:block">Log in</button>
          <button className="bg-yellow-300 px-4 py-2 rounded-full">
            Start my Page
          </button>
        </div>
      </div>

      {/* FULLSCREEN MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          {/* close button */}
          <div className="flex justify-start p-4">
            <button className="text-xl" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          {/* blank menu area (you can add links later) */}
          <div className="flex flex-col p-6 items-start justify-start h-full gap-6">
            <p className="text-xl font-medium">FAQ</p>
            <div className="flex items-center gap-1.5">
              <p className="text-xl font-medium">Wall of </p>
              <TiHeartOutline size={25} className="pt-1"/>
            </div>
            <p className="text-xl font-medium">Help center</p>
            <div className="flex items-center gap-1.5">
              <FaApple size={25} className="pt-1"/>
              <p className="text-xl font-medium">iOS</p>
            </div>
            <div className="flex items-center gap-1.5">
              <FaAndroid size={25} className="pt-1"/>
              <p className="text-xl font-medium">Android</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
