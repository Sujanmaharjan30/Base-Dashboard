"use client";
import { ThreeDot } from '../../../../public/icons/Svg'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Analytics = () => {
    const data = [
        { name: 'Sale', value: 50, color: '#5B93FF' },
        { name: 'Distribute', value: 25, color: '#FFD66B' },
        { name: 'Return', value: 25, color: '#FF8F6B' },
    ];
  return (
    <div className='w-[430px] h-[408px] bg-white rounded-[10px] flex flex-col 'style={{fontFamily:"Nunito"}}>
        <div className='flex justify-between items-start mx-[25px] mt-[25px]'>
            <h1 className='font-bold leading-[100%] text-lg text-[#030229]'>Analytics</h1>
            <span className='cursor-pointer'><ThreeDot/></span>
        </div>
        <div className='relative flex-1 min-h-0'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        {/* Background Track (The light gray circle) */}
                        <Pie
                            data={[{ value: 1 }]}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={100}
                            fill="#F4F7FE"
                            dataKey="value"
                            isAnimationActive={false}
                            stroke="none"
                        />
                        {/* 3. Actual Data Segments */}
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={80} // Matches background
                            outerRadius={100}
                            paddingAngle={10} // Creates the gap between colors
                            dataKey="value"
                            cornerRadius={40} // Rounded "pill" ends
                            startAngle={90}
                            endAngle={450}
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* Center Text Overlay */}
                <div className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none translate-y-[-10px]'>
                    <span className='text-[32px] font-bold text-[#030229] leading-tight'>80%</span>
                    <span className='text-sm text-gray-400 font-medium'>Transactions</span>
                </div>
            </div>

            {/* Custom Legend (at the bottom) */}
            <div className='flex justify-center items-center gap-[41px] pb-[30px]'>
                {data.map((item, index) => (
                    <div key={index} className='flex items-center gap-2'>
                        <div 
                            className='w-3 h-3 rounded-[3px]' 
                            style={{ backgroundColor: item.color }} 
                        />
                        <span className='text-sm text-[#030229] font-medium'>{item.name}</span>
                    </div>
                ))}
            </div>

    </div>
  )
}

export default Analytics