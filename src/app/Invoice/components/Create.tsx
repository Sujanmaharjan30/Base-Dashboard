"use client"
import React, { useRef, useState } from 'react'
import { Calendar2, Camera, Location2 } from '../../../../public/icons/Svg'

const Create = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isStreaming, setIsStreaming] = useState(false);

  const startCamera = async () => {
    try {

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 }
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
      }
    } catch (err) {
      console.error("Error accessing camera: ", err);
      alert("Camera access denied or not available");
    }
  };

  const fields = [
    { label: "Invoice Id", placeholder: "#876370", type: "text", halfWidth: true },
    { label: "Date", placeholder: "01/12/2021", icons: <Calendar2 />, type: "text", halfWidth: true },
    { label: "Name", placeholder: "Sujan Maharjan", type: "text", halfWidth: false },
    { label: "Email", placeholder: "sujanmaharjan@gmail.com", type: "text", halfWidth: true },
    { label: "Address", placeholder: "Kathmandu,Nepal", icons: <Location2 />, type: "text", halfWidth: true }
  ]
  return (
    <div className=' ' style={{ fontFamily: "Nunito" }}>
      <h1 className='text-[#030229] font-bold text-2xl leading-[100%] pt-7.5 ml-7.5'>Create New Invoice</h1>

      <div className='relative w-33.5 h-33.5 rounded-full my-7.5 mx-auto overflow-hidden bg-[#FAFAFB] border-2 border-dashed border-gray-200 flex items-center justify-center'>

        <video
          ref={videoRef}
          autoPlay
          playsInline
          className={`absolute inset-0 w-full h-full object-cover ${isStreaming ? 'block' : 'hidden'}`}
        />

        {!isStreaming && (
          <button onClick={startCamera} className="cursor-pointer">
            <Camera />
          </button>
        )}
      </div>
      <div className='flex flex-wrap gap-y-6 justify-between px-8'>
        {fields.map((field, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 ${field.halfWidth ? 'w-[48%]' : 'w-full'}`}
          >
            <label className='text-[#030229] font-semibold text-base leading-[100%]'>{field.label}</label>

            <div className='relative flex items-center'>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className='w-full h-12 bg-[#FAFAFB] rounded-[10px] px-4 outline-none text-sm leading-[100%]  text-[#030229] placeholder:text-gray-400'
              />

              {field.icons && (
                <span className='absolute right-4 text-[#605BFF]'>
                  {field.icons}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Create