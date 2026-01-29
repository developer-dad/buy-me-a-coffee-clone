import React from "react";
import { motion } from "motion/react";
import membershipBanner from "../assets/membership_banner.png";
import PostBanner from "../assets/posts_banner.png";
import ShopBanner from "../assets/shops_banner.png";
import SuppostBanner from "../assets/suppost_banner.png";

function Cards() {
  const list = [
    {
      card: "SUPPORT",
      heading: "Give your audience an easy way to say thanks.",
      text: "Buy Me a Coffee makes supporting fun and easy. In just a couple of taps, your fans can make the payment (buy you a coffee)   and leave a message.",
      image: SuppostBanner,
    },
    {
      card: "MEMBERSHIP",
      heading: "Start a membership for your biggest fans.",
      text: "Earn a recurring income by accepting monthly or yearly subscriptions. Share exclusive content, or just give them a way to support your work on an ongoing basis.",
      image: membershipBanner,
    },
    {
      card: "SHOP",
      heading: "Introducing Shop, the creative way to sell.",
      text: "The things you’d like to sell probably do not belong in a Shopify store. Shop is designed from the ground up with creators in mind. Whether it’s a 1-1 Zoom call, art commissions, or an ebook, Shop is for you.",
      image: ShopBanner,
    },
    {
      card: "POST, AUDIO & EMAIL",
      heading: "Publish your best work",
      text: "Buy Me a Coffee makes it easy to publish free and exclusive content. Try different formats such as audio, and make it members-only to drive more memberships.",
      image: PostBanner,
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {list.map((item, index) => (
        <motion.div
          key={index}
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white mx-5 mt-10 rounded-3xl px-4 mb-5 pb-4"
        >
          <motion.p
            variants={itemVariant}
            className="text-gray-500 font-bold text-sm tracking-widest pt-5"
          >
            {item.card}
          </motion.p>

          <motion.p variants={itemVariant} className="font-bold text-3xl mt-2">
            {item.heading}
          </motion.p>

          <motion.p variants={itemVariant} className="mt-2 text-[18px]">
            {item.text}
          </motion.p>

          <motion.img
            variants={itemVariant}
            src={item.image}
            alt={item.card}
            className="mt-4"
          />
        </motion.div>
      ))}
    </div>
  );
}

export default Cards;
