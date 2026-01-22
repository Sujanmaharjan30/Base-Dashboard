import Image from 'next/image'
import React from 'react'
import { InlineDot, Paperclip, Phone1, Send, Smile, Video } from '../../../../public/icons/Svg'

const View = () => {
  const icons = [Phone1, Video, InlineDot]
  return (
    <div className='md:w-[764px] bg-white rounded-[10px] h-[200px] md:h-[839px] flex flex-col justify-between md:mt-7.5 mx-4 md:mx-0'>

      <div className='mx-4 md:mx-7.5 flex justify-between items-center mt-7.5'>
        <div className='flex gap-2'>
          <Image
            src="/Images/Active.png"
            alt="active"
            width={36}
            height={36}
          />
          <h1 className='text-black font-normal text-base leading'>Sujan maharjan</h1>
        </div>
        <div className=' gap-3 flex '>
          {icons.map((Icon, index) => (
            <button
              key={index}
              className='w-9 h-9 bg-[#F7F7F8] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer'
            >
              <Icon />
            </button>
          ))}
        </div>
      </div>
      <div className=' p-4 md:p-7.5'>
        <div className='w-full h-[60px] bg-[#F7F7F8] rounded-[15px] flex items-center px-5 gap-4'>
          <button className="cursor-pointer hover:text-gray-600 transition-colors">
            <Paperclip />
          </button>

          <div className="w-px h-6 bg-gray-300 mx-1"></div>

          <input
            type="text"
            placeholder="Type a message..."
            className='flex-1 bg-transparent border-none outline-none text-[#030229] placeholder:text-[#A0A0A0] text-sm'
          />

          <button className=" cursor-pointer hover:text-gray-600 transition-colors">
            <Smile />
          </button>

          <button className="  hover:scale-110  cursor-pointer transition-transform">
            <Send />
          </button>
        </div>
      </div>
    </div>
  )
}

export default View