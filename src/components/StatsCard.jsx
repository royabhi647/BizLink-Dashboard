import {ArrowRight} from 'lucide-react';

const StatsCard = ({ value, subtitle, hasArrow = false }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
          <div className="text-sm text-gray-500 font-medium">{subtitle}</div>
        </div>
        {hasArrow && (
          <div className="ml-4">
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;