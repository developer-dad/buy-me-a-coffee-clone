import React from 'react'
import PostBanner from '../assets/posts_banner.png'

function PostCard() {
  return (
        <div className='bg-white mx-5 mt-10 rounded-3xl px-4 mb-5 pb-4'>
            <p className='text-gray-500 font-bold text-sm tracking-widest pt-5'>
                POST, AUDIO & EMAIL
            </p>
            <p className='font-bold text-3xl mt-2'>
                Publish your best work
            </p>
            <p className='mt-2 text-[18px]'>
                Buy Me a Coffee makes it easy to publish free and exclusive content. Try different formats such as audio, and make it members-only to drive more memberships.
          </p>
            <div className='my-6'>
                <img src={PostBanner} alt="Post banner"/>
            </div>
        </div>
      )
}

export default PostCard