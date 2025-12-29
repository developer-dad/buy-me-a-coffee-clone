import React from 'react'
import ShopBanner from '../assets/shops_banner.png'

function ShopCard() {
  return (
      <div className='bg-white mx-5 mt-10 rounded-3xl px-4 mb-5 pb-4'>
          <p className='text-gray-500 font-bold text-sm tracking-widest pt-5'>
              SHOP
          </p>
          <p className='font-bold text-3xl mt-2'>
              Introducing Shop, the creative way to sell.
          </p>
          <p className='mt-2 text-[18px]'>
              The things you’d like to sell probably do not belong in a Shopify store. Shop is designed from the ground up with creators in mind. Whether it’s a 1-1 Zoom call, art commissions, or an ebook, Shop is for you.
        </p>
          <img src={ShopBanner} alt="Shop banner"/>
      </div>
    )
}

export default ShopCard