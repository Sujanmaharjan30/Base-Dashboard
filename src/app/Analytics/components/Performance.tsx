import React from 'react'
import {  ThreeDot } from '../../../../public/icons/Svg'
import PerformanceChartData from './PerformanceChartData'

const Performance = () => {
  return (
    <div className='w-[252px] h-[236px] mt-10 border border-[#F7F7F8] mx-6 rounded-[7px] shadow-xs '>

        <div className='w-53 h-6 flex items-center justify-between mt-5 mx-5'>
            <h1 className='font-semibold text-lg leading-[100%] text-[#030229]'> Performance </h1>
            <span className='rotate-90 cursor-pointer'>
            <ThreeDot />
            </span>
        </div>
        <PerformanceChartData/>

    </div>
  )
}

export default Performance