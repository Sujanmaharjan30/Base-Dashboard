import React from 'react'
import { GrayLocation, GrayMail, Phone } from '../../../../public/icons/Svg'

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: string;
  img: string;
}

interface ContactInfoProps {
  customer: Customer;
}

const ContactInfo = ({ customer }: ContactInfoProps) => {
    const info =[
        {
            icons:<GrayMail/>,
            value: customer.email
        },
        {
            icons:<Phone/> ,
            value: customer.phone
        },
        {
            icons:<GrayLocation/>,
            value:"2239 Hog Camp Road Schaumburg"
        }
   

    ]
  return (
    <div className='w-[232px] h-[201px] ml-6  mt-10 ' style={{fontFamily:"Nunito"}}>

        <h1 className='text-lg leading-[100%] text-[#030229]'>Contact Info</h1>

        <div className='mt-7.5 '>
            {info.map((items,idx)=>(
                <div key={idx} className='flex gap-[11px] items-center justify-start w-full h-[55px] border-b border-gray-200 cursor-pointer' >
                    <span>{items.icons}</span>
                    <span className='text-[#030229] text-base font-normal leading-[100%] '>{items.value}</span>
                </div>

            ))}

        </div>

        
    </div>

  )
}

export default ContactInfo