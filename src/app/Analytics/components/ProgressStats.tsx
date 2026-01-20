import ProgressCircle from './ProgressCircle';

const ProgressStats = () => {
  const stats = [
    { id: 1, percentage: 70, color: "text-[#FFD66B]", bgColor: "text-[#FFF9E7]" }, 
    { id: 2, percentage: 60, color: "text-[#5B93FF]", bgColor: "text-[#F0F5FF]" }, 
  ];

  return (
    <div className="flex gap-6 px-6 mt-6">
      {stats.map((stat) => (
        <ProgressCircle 
          key={stat.id}
          percentage={stat.percentage} 
          color={stat.color} 
          bgColor={stat.bgColor} 
        />
      ))}
    </div>
  );
};
export default ProgressStats