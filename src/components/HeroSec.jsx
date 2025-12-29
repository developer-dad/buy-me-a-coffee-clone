import React from "react";
import { IoMdStar } from "react-icons/io";

function HeroSec() {
  return (
    <div className="flex justify-center items-center mt-10 flex-col mx-6">
      {/* loved by creator */}
      <div className="flex gap-2 mb-4">
        <div className="flex gap-0.5">
          <IoMdStar color="#2E813A" size={18}/>
          <IoMdStar color="#2E813A" size={18}/>
          <IoMdStar color="#2E813A" size={18}/>
          <IoMdStar color="#2E813A" size={18}/>
          <IoMdStar color="#2E813A" size={18}/>
        </div>
        <p className="text-[13px]">Loved by 1,000,000+ creators.</p>
      </div>
      {/* main heading */}
      <div className="mb-3">
        <p className="font-bold text-5xl text-center leading-14 text-[#222222]">
            Fund your creative work
        </p>
      </div>
      <div className="mb-5">
        <p className="text-[19px] text-center text-[#222222]">
            Accept support. Start a membership. Setup a shop. It’s easier than you think.
        </p>
      </div>
      <div className="mb-3">
        <button className="bg-yellow-300 px-9 py-3 rounded-full font-bold">
            <a href="/">Start my page</a>
        </button>
      </div>
      <div>
        <p className="text-[15px] text-gray-700">
            It’s free and takes less than a minute!
        </p>
      </div>
    </div>
  );
}

export default HeroSec;
