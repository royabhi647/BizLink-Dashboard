import {MoreHorizontal, Calendar} from 'lucide-react';

const PipelineCard = ({ company, description, date, progress, isHighlight = false }) => {
  return (
    <div className={`rounded-lg p-4 shadow-sm border transition-all duration-200 cursor-pointer hover:shadow-md ${
      isHighlight ? 'bg-gray-900 text-white border-gray-800' : 'bg-white border-gray-100'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <h4 className={`font-semibold text-sm ${isHighlight ? 'text-white' : 'text-gray-900'}`}>
          {company}
        </h4>
        <button className={`${isHighlight ? 'text-gray-400' : 'text-gray-400'} hover:text-gray-600`}>
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>
      <p className={`text-xs mb-4 leading-relaxed ${
        isHighlight ? 'text-gray-300' : 'text-gray-600'
      }`}>
        {description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Calendar className={`w-3 h-3 ${isHighlight ? 'text-gray-400' : 'text-gray-500'}`} />
          <span className={`text-xs ${isHighlight ? 'text-gray-300' : 'text-gray-500'}`}>
            {date}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${
            isHighlight ? 'bg-green-400' : 'bg-green-500'
          }`}></div>
          <span className={`text-xs ${isHighlight ? 'text-gray-300' : 'text-gray-500'}`}>
            {progress}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PipelineCard;