import React from "react";
import { IoMdStar } from "react-icons/io";

function HeroSec() {
  return (
    <div className="flex justify-center items-center mt-10 flex-col mx-6 md:h-screen md:-mt-10 md:gap-5">
      {/* loved by creator */}
      <div className="flex gap-2 mb-4">
        <div className="flex gap-0.5">
          <IoMdStar color="#2E813A" className="size-6 md:size-8"/>
          <IoMdStar color="#2E813A" className="size-6 md:size-8"/>
          <IoMdStar color="#2E813A" className="size-6 md:size-8"/>
          <IoMdStar color="#2E813A" className="size-6 md:size-8"/>
          <IoMdStar color="#2E813A" className="size-6 md:size-8"/>
        </div>
        <p className="text-[13px] md:text-xl">Loved by 1,000,000+ creators.</p>
      </div>
      {/* main heading */}
      <div className="hidden md:block" >
      <div className="mb-3">
        <p className="font-bold text-5xl text-center leading-14 text-[#222222] md:text-8xl md:leading-26">
            Fund your <br className="hidden md:block" /> creative work
        </p>
      </div>
      <div className="mb-5">
        <p className="text-[19px] text-center text-[#222222] md:text-[25px]">
            Accept support. Start a membership. Setup a shop. It’s easier <br className="hidden md:block" /> than you think.
        </p>
      </div>
      </div>
      <div className="hidden md:flex md:flex-col md:items-center" >
      <div className="mb-3">
        <button className="bg-yellow-300 px-9 py-3 rounded-full font-bold md:px-12 md:py-4 md:text-[22px]">
            <a href="/">Start my page</a>
        </button>
      </div>
      <div>
        <p className="text-[15px] text-gray-700 md:text-[18px]">
            It’s free and takes less than a minute!
        </p>
      </div>
      </div>
    </div>
  );
}

export default HeroSec;
