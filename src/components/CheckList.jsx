import React from "react";
import { motion } from "motion/react";
import { FaRegCheckCircle } from "react-icons/fa";

function CheckList() {
  const list = [
    {
      text: "We don't call them customers or transactions. They are your ",
      span: "supporters.",
    },
    {
      text: "You have ",
      span: "100% ownership",
      after:
        " of your supporters. We never email them, and you can export the list any time you like.",
    },
    {
      text: "You get to ",
      span: "talk to a human",
      after:
        " for help, or if you just like some advice to hit the ground running.",
    },
    {
      text: "You get paid instantly to your bank account. ",
      span: "No more 30-day delays.",
    },
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div 
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="my-12 flex justify-center items-start flex-col mx-7 md:mx-60 md:mt-30 md:items-center md:my-36"
    >
      <p className="font-bold text-3xl md:text-7xl md:leading-20 md:text-center">
        Designed for creators, <br />
        <span className="text-[#717171]">not for businesses.</span>
      </p>
      <div className="md:grid md:grid-cols-2 md:gap-12 md:mt-16" >
      {list.map((check, index) => {
        return (
          <div key={index} className="mt-7 flex items-start w-full gap-4">
            <div>
              <FaRegCheckCircle color="#222" className="size-7 md:size-10" />
            </div>
            <p className="text-[#7E7E7D] text-[20px] md:text-2xl">
              {check.text}
              <span className="text-black font-bold">{check.span}</span>
              {check.after}
            </p>
          </div>
        );
      })}
      </div>
    </motion.div>
  );
}

export default CheckList;
