import React from 'react'

const Notes = () => {
  return (
    <div className='md:w-[478px] ml-4 md:ml-12.5 flex flex-col mt-7  ' style={{ fontFamily: "OpenSans" }}>
      <h1 className='text-[#1F2229] text-[8px] leading-[100%]'>NOTES</h1>

      <span className='text-[#828691] text-[8px] leading-[13px] mt-3.5'>All amounts are in dollars. Please make the payment within 15 days from the issue of date of this invoice. Tax is not charged on the basis of paragraph 1 of Article 94 of the Value Added Tax Act (I am not liable for VAT).</span>

      <span className='text-[#828691] text-[8px] leading-[13px] mt-2'>Thank you for you confidence in my work.</span>
      <span className='text-[#828691] text-[8px] leading-[13px] mt-px'>Signiture</span>


    </div>
  )
}

export default Notes