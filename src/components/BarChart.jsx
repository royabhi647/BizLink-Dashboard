import { useState, useEffect } from "react";

const BarChart = () => {
  const [animate, setAnimate] = useState(false);
  
  const data = [
    { day: 'Mon', value: 65 },
    { day: 'Tue', value: 85 },
    { day: 'Wed', value: 75 },
    { day: 'Thu', value: 45 },
    { day: 'Fri', value: 90 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">New customers</h3>
      <div className="flex items-end justify-between h-32 space-x-3">
        {data.map((item, index) => (
          <div key={item.day} className="flex-1 flex flex-col items-center">
            <div 
              className={`w-full bg-gray-900 rounded-t-sm transition-all duration-700 ease-out ${
                animate ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                height: animate ? `${(item.value / maxValue) * 100}%` : '0%',
                transitionDelay: `${index * 100}ms`
              }}
            />
            <span className="text-xs text-gray-500 mt-3 font-medium">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;