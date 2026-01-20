import React from 'react'

const PerformanceChartData = () => {
    const chartData = [
        { month: "Jan", height: "35%", active: false },
        { month: "Feb", height: "65%", active: true, value: "2.33k" },
        { month: "Mar", height: "55%", active: false },
        { month: "Apr", height: "45%", active: false },
        { month: "May", height: "75%", active: false },
        { month: "Jun", height: "90%", active: false },
      ];
  return (
    <div className="flex items-end justify-between h-[180px] px-1 relative cursor-pointer">
        {chartData.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            
            <div className="relative w-full flex justify-center items-end h-[150px]">
            {/* active bar for feb */}
              {item.active && (
                <div className="absolute top-5 -left-1 z-10">
                  <div className="bg-[#FF9770] text-white text-[10px] py-1 px-2 rounded-md relative shadow-md">
                    {item.value}
                    {/* Tooltip Arrow */}
                    <div className="absolute -bottom-1 left-1/2  w-2 h-2 bg-[#FF9770] rotate-45"></div>
                  </div>
                </div>
              )}

              {/* Bar Column */}
              <div 
                style={{ height: item.height }}
                className={`w-2.5 rounded-full transition-all duration-500 ${
                  item.active ? 'bg-[#FF8F6B]' : 'bg-[#FF8F6B]/20'
                }`}
              ></div>
            </div>

            {/* Month Label */}
            <span className="text-xs font-normal text-[#030229] mt-3">
              {item.month}
            </span>
          </div>
        ))}
      </div>
  )
}

export default PerformanceChartData