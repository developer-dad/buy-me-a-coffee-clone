import React from "react";
import { motion } from "motion/react";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoIosGlobe } from "react-icons/io";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { PiHeartDuotone } from "react-icons/pi";
import { MdSecurity } from "react-icons/md";

function Features() {
  const list = [
    {
      logo: BsCalendar2DateFill,
      size: 30,
      heading: "Not just a membership",
      text: "Creators who previously only used Patreon noticed a massive increase in earnings after accepting one-off payments.",
    },
    {
      logo: IoIosGlobe,
      size: 35,
      heading: "6 new languages",
      text: "We now support Spanish, French, Italian, German and Ukrainian—making it easier for your global audience to support you.",
    },
    {
      logo: MdOutlineMarkEmailRead,
      size: 35,
      heading: "Email marketing",
      text: "Email marketing Instead of paying separately for email marketing tools like Mailchimp, send unlimited emails to your fans for free.",
    },
    {
      logo: PiHeartDuotone,
      size: 35,
      heading: "Being friendly converts",
      text: "ICYMI, we make it simple and fun for your supporters. While you cannot put a number on feelings, it tends to show on the results.",
    },
    {
      logo: MdSecurity,
      size: 35,
      heading: "Your privacy comes first",
      text: "Receive fan support safely without disclosing your identity or address. We’ll do the heavy-lifting.",
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
      className="bg-white mx-5 mt-10 rounded-3xl px-5 mb-5 py-5"
    >
      <p className="font-bold text-3xl">
        Make 20% or more, <br />
        <span className="text-[#717171]">compared to other platforms.</span>
      </p>
      {list.map((item, index) => {
        const Icon = item.logo;
        return (
          <div key={index} className="mt-9">
            <div>
              <Icon size={item.size} />
            </div>
            <p className="text-xl font-bold mt-2">{item.heading}</p>
            <p className="text-[#717171] text-[18px] mt-2">{item.text}</p>
          </div>
        );
      })}
    </motion.div>
  );
}

export default Features;
