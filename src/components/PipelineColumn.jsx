import PipelineCard from "./PipelineCard";

const PipelineColumn = ({ title, count, cards }) => {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500 font-medium">{count}</span>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
      <div className="space-y-3">
        {cards.map((card, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 100}ms` }}
            className="animate-fadeInUp"
          >
            <PipelineCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PipelineColumn;