import { useState, useEffect } from "react";

const SemiCircularProgress = ({ percentage = 68 }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  const radius = 50;
  const circumference = Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex flex-col items-center justify-center">
        <div className="relative mb-4">
          <svg width="120" height="70" viewBox="0 0 120 70" className="overflow-visible">
            <path
              d="M 10 60 A 50 50 0 0 1 110 60"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M 10 60 A 50 50 0 0 1 110 60"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-3xl font-bold text-gray-900">{animatedPercentage}%</div>
          </div>
        </div>
        <div className="text-sm text-gray-500 font-medium">Successful deals</div>
      </div>
    </div>
  );
};

export default SemiCircularProgress;