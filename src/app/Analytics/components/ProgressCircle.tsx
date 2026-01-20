"use client";
interface ProgressCircleProps {
  percentage: number;
  color: string;
  bgColor: string;
}
const ProgressCircle = ({ percentage, color, bgColor }: ProgressCircleProps) => {
    const radius = 36; 
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
    return (
      <div className="flex flex-col items-center justify-center bg-white border border-[#F7F7F8] rounded-[15px] p-2 w-[114px] h-[114px] shadow-xs shrink-0" style={{fontFamily:"Nunito"}}>
        <div className="relative w-20 h-20 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
            {/* Background Track */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className={bgColor}
            />
            {/* Progress Bar */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="currentColor"
              strokeWidth="10" 
              strokeDasharray={circumference}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
              fill="transparent"
              className={`${color} transition-all duration-1000 ease-out`}
            />
          </svg>
         
          <span className="absolute text-xs font-bold text-[#030229] leading-[100%]">
            {percentage}%
          </span>
        </div>
      </div>
  );
};

export default ProgressCircle;