"use client";
import { ThreeDot } from '../../../../public/icons/Svg'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Reports = () => {
    const chartData = [
        { name: '10am', uv: 55 }, { name: '11am', uv: 35 }, { name: '12am', uv: 58 },
        { name: '01am', uv: 38 }, { name: '02am', uv: 25 }, { name: '03am', uv: 50 },
        { name: '04am', uv: 15 }, { name: '05am', uv: 35 }, { name: '06am', uv: 68 },
        { name: '07am', uv: 50 },
      ];
  return (
    <div className='w-[702px] h-[408px]  bg-white rounded-[10px] mx-[30px]'>
    <div className='flex justify-between items-start mt-6 mx-6'>
        <h2 className='text-lg font-bold leading-[100%] text-[#030229]'>Reports </h2>
        <span className='cursor-pointer'><ThreeDot/></span>

    </div>
    <div className="h-[300px] w-full mt-[32px] ">
    <ResponsiveContainer width="100%" height="100%">
                    {/* Negative left margin pulls the chart line to align under the "Reports" text */}
                    <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                            {/* 1. Subtle Area Gradient: Using the 4% opacity from your image */}
                            <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#5EC3FF" stopOpacity={0.04} />
                                <stop offset="100%" stopColor="#FD5DEF" stopOpacity={0.04} />
                            </linearGradient>

                            {/* 2. Bold Line Gradient: Using #5BC4FF to #FF5BEF */}
                            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#5BC4FF" />
                                <stop offset="100%" stopColor="#FF5BEF" />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        
                        <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#94a3b8', fontSize: 12 }} 
                            dy={10}
                            padding={{ left: 0, right: 0 }}
                        />
                        
                        <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#94a3b8', fontSize: 12 }} 
                        />

                        <Tooltip 
                            contentStyle={{ 
                                backgroundColor: '#000829', 
                                borderRadius: '8px', 
                                border: 'none', 
                                color: '#fff' 
                            }}
                            itemStyle={{ color: '#fff' }}
                            cursor={{ stroke: '#605BFF', strokeWidth: 2, strokeDasharray: '5 5' }} 
                        />
                        
                        <Area 
                            type="monotone" 
                            dataKey="uv" 
                            stroke="url(#lineGradient)" 
                            strokeWidth={4}
                            fillOpacity={1} 
                            fill="url(#colorUv)" 
                            // Points styled with a white border to match the design
                            dot={{ stroke: '#fff', strokeWidth: 3, r: 6, fill: '#605BFF' }}
                            activeDot={{ r: 8, strokeWidth: 0, fill: '#605BFF' }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>

   
  )
}

export default Reports