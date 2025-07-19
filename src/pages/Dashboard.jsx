import BarChart from "../components/BarChart";
import SemiCircularProgress from "../components/SemiCircularProgress";
import StatsCard from "../components/StatsCard";
import PipelineColumn from "../components/PipelineColumn";

const Dashboard = () => {
  const pipelineData = {
    contacted: [
      {
        company: "ByteBridge",
        description: "Corporate and personal data protection via a turnkey web application",
        date: "16 Jan",
        progress: "2 / 0 1"
      },
      {
        company: "AI Synergy",
        description: "Innovative software based on artificial intelligence",
        date: "23 Mar",
        progress: "3 / 0 3"
      },
      {
        company: "LeadBoost Agency",
        description: "Lead attraction and automation for small businesses",
        date: "No due date",
        progress: "4 / 0 7"
      }
    ],
    negotiation: [
      {
        company: "SkillUp Hub",
        description: "Platform for professional development of specialists",
        date: "09 Mar",
        progress: "4 / 0 1"
      },
      {
        company: "Thera Well",
        description: "Platform for psychological support and consultations",
        date: "18 Mar",
        progress: "7 / 0 2"
      },
      {
        company: "SwiftCargo",
        description: "International transportation of commercial goods",
        date: "27 Apr",
        progress: "2 / 0 6"
      }
    ],
    offerSent: [
      {
        company: "FitLife Nutrition",
        description: "Nutritious food and nutraceuticals for individuals",
        date: "15 Mar",
        progress: "1 / 0 8"
      },
      {
        company: "Prime Estate",
        description: "Development of live-tier real estate in prime locations",
        date: "24 Mar",
        progress: "1 / 0 1",
        isHighlight: true
      },
      {
        company: "NextGen University",
        description: "Online education platform with focus on practical skills",
        date: "10 Apr",
        progress: "1 / 0 1"
      }
    ],
    dealClosed: [
      {
        company: "CloudSphere",
        description: "Cloud services for data storage and processing for organizations",
        date: "25 Mar",
        progress: "2 / 0 1"
      },
      {
        company: "Advantage Med",
        description: "Full-scale medical automation and social media promotion",
        date: "04 Apr",
        progress: "1 / 0 2"
      },
      {
        company: "Safebank Solutions",
        description: "Innovative financial technologies and digital payment solutions",
        date: "20 Mar",
        progress: "4 / 0 7"
      }
    ]
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <BarChart />
        <SemiCircularProgress percentage={68} />
        <StatsCard
          value="53"
          subtitle="Tasks in progress"
          hasArrow={true}
        />
        <StatsCard
          value="$ 15,890"
          subtitle="Prepayments from customers"
          hasArrow={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <PipelineColumn
          title="Contacted"
          count="12 / 11"
          cards={pipelineData.contacted}
        />
        <PipelineColumn
          title="Negotiation"
          count="17 / 9"
          cards={pipelineData.negotiation}
        />
        <PipelineColumn
          title="Offer Sent"
          count="13 / 16"
          cards={pipelineData.offerSent}
        />
        <PipelineColumn
          title="Deal Closed"
          count="12 / 11"
          cards={pipelineData.dealClosed}
        />
      </div>
    </div>
  );
};

export default Dashboard;