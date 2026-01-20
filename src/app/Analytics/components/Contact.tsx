import Image from 'next/image'
import React from 'react'

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: string;
  img: string;
}

interface ContactProps {
  customer: Customer;
}

const Contact = ({ customer }: ContactProps) => {
  return (
    <div className='w-[253px] h-[167px] mt-15.5 mx-6 flex items-center justify-start flex-col gap-4  border-b border-gray-200' style={{fontFamily:"Nunito"}}>
        <Image 
        src={customer.img}
         alt={customer.name} 
         width={70}
         height={70}
         className='w-17.5 h-17.5 object-contain '
         />

         <div className='flex flex-col gap-2 justify-start items-center'>
            <h1 className='text-[#030229] font-semibold leading-[100%] text-[22px]'>{customer.name}</h1>
            <h2 className='font-normal text-sm leading-[100%] text-[#030229]'>UI/UX Designer</h2>

         </div>


        
    </div>
  )
}

export default Contact