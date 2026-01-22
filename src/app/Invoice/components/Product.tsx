import React from 'react'
import { Arrow, DeleteIcon1, Plus } from '../../../../public/icons/Svg'

const Product = () => {
    const Description = [
        {
            name: "ipod 2021 ", rate: 1000, qty: "10 pcs", amount: 10000
        },
        {
            name: "Apple Mackbook ", rate: 1500, qty: "10 pcs", amount: 150000
        },
        {
            name: "iphone 12", rate: 885, qty: "10 pcs", amount: 8850
        },
    ]
    return (
        <div className='w-[calc(100%-32px)] md:w-[506px] mt-5 ml-4 md:ml-7.5'>

            <div className=' flex justify-between items-center ' style={{ fontFamily: "Nunito" }}>
                <h1 className='font-semibold text-base leading-[100%] text-[#030229]'>Product Description </h1>

                <button className='w-8.5 h-8.5 bg-[#605BFF] flex items-center justify-center rounded-[10px] cursor-pointer'>
                    <span><Plus /></span>
                </button>

            </div>
            <div className='overflow-x-auto no-scrollbar '>
                <div className='min-w-[450px]'>



                    <div className='grid grid-cols-[2fr_1fr_1fr_1fr_0.5fr] text-sm font-normal leading-[100%] text-[#030229] whitespace-nowrap my-4 '>
                        <span className='flex gap-2.5 items-end'>Product Name  <Arrow /></span>
                        <span className='flex gap-2.5 items-end'>Rate <Arrow /></span>
                        <span className='flex gap-2.5 items-end'>QTY <Arrow /></span>
                        <span className='flex gap-2.5 items-end'>Amount <Arrow /></span>

                    </div>

                    <div className='mt-[15px] '>
                        {Description.map((items, idx) => (
                            <div key={idx} className='grid grid-cols-[2fr_1fr_1fr_1fr_0.5fr] h-10.5 border-b border-gray-200 text-sm font-normal leading-[100%]'>
                                <span className='flex items-center justify-start text-[#0068DD]'>{items.name}</span>
                                <span className='flex items-center justify-start text-[#030229] '>$ {items.rate}</span>
                                <span className='flex items-center justify-start text-[#030229]'>{items.qty}</span>
                                <span className='flex items-center justify-start  text-[#2B9943]'>$ {items.amount}</span>

                                <div className='w-8 h-8 rounded-full bg-[#E71D36]/5 flex justify-center items-center cursor-pointer mt-1 '>
                                    <span><DeleteIcon1 /></span>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className='flex gap-7.5 mx-7.5 mt-9  mb-10'>
                <button className='w-full h-[45px] border border-[#605BFF]/20 text-[#605BFF] text-sm md:text-base leading-[100%] rounded-[10px] mb-6 cursor-pointer'>Send Invoice
                </button>
                <button className='w-full h-[45px] border  text-white text-sm md:text-base bg-[#605BFF] leading-[100%] rounded-[10px] mb-6 cursor-pointer'>Create Invoice
                </button>
            </div>
        </div>
    )
}

export default Product