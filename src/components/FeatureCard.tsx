
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="feature-card p-5 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <div className="text-crave-lilac mb-3">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
