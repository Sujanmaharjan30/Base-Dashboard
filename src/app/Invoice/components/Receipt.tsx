import Image from 'next/image'
import React from 'react'

const Receipt = () => {
    return (
        <div className='mt-4.5  md:w-[528px]  bg-[#FBFBFB] '>
            <div className='flex justify-between items-center'>
                <Image
                    src="/Images/ReceiptLogo.png"
                    alt="logo"
                    width={30}
                    height={44}
                    className='w-7.5 h-11 mt-9 ml-4 md:ml-8 '
                />
                <div className='flex flex-col gap-px text-[8px]'>
                    <div className='flex gap-1.5 justify-start items-center mr-7' style={{ fontFamily: "OpenSans" }}>
                        <span className='text-[#0099FF] font-normal' >@</span>
                        <span className='text-[8px] leading-[100%] font-normal text-[#828691]'>your.mail@gmail.com</span>

                    </div>
                    <div className='flex gap-1.5 justify-center items-center ' style={{ fontFamily: "OpenSans" }}>
                        <span className='text-[#0099FF] font-normal' >m</span>
                        <span className='text-[8px] leading-[100%] font-normal text-[#828691]'>+386 989 271 3115</span>

                    </div>


                </div>

            </div>

            <div className='flex gap-33 md:gap-[291px] mt-9 ml-4 md:ml-[31px]'>
                {/* Recipients */}
                <div className='flex flex-col items-start justify-start mb-6.5' style={{ fontFamily: "OpenSans" }}>
                    <h3 className='text-xs text-[#030229] ' >RECIPIENTS</h3>
                    <div className='flex flex-col text-[8px] text-[#828691] leading-[13px] mt-3.5'>
                        <span>JOHAN SMITH</span>
                        <span>4304 Liberty Avenue</span>
                        <span>92680 Tustin, CA</span>
                        <span>Vat no.: 12345678</span>


                    </div>
                    <div className='flex flex-col gap-px text-[8px] mt-3.5'>
                        <div className='flex gap-1 justify-start items-center ' style={{ fontFamily: "OpenSans" }}>
                            <span className='text-[#0099FF] font-normal' >@</span>
                            <span className='text-[8px] leading-[100%] font-normal text-[#828691]'>your.mail@gmail.com</span>

                        </div>
                        <div className='flex gap-1.5 justify-start items-center ' style={{ fontFamily: "OpenSans" }}>
                            <span className='text-[#0099FF] font-normal' >m</span>
                            <span className='text-[8px] leading-[100%] font-normal text-[#828691]'>+386 989 271 3115</span>

                        </div>
                    </div>

                </div>
                {/* invoice */}
                <div className='flex flex-col ' style={{ fontFamily: "OpenSans" }}>
                    <h1 className='text-xl font-semibold text-[#030229]'>Invoice</h1>

                    <div className='flex flex-col text-right text-[8px] leading-[100%] mt-2.5 gap-px'>
                        <span className='text-[#1F2229]'> INVOICE NO.</span>
                        <span className='text-[#828691]'>001/2021</span>

                    </div>
                    <div className='flex flex-col text-right text-[8px] leading-[100%] mt-3.5 gap-px'>
                        <span className='text-[#1F2229]'> INVOICE Date</span>
                        <span className='text-[#828691]'>January 1, 2021</span>

                    </div>

                </div>



            </div>

        </div>
    )
}

export default Receipt