
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: FeatureCardProps) => {
  return (
    <div 
      className="feature-card p-5 rounded-lg bg-white/60 border border-gray-100 shadow-sm hover:shadow transition-all duration-300 flex flex-col items-center text-center"
    >
      <div className="text-gray-700 mb-3 flex justify-center">
        {icon}
      </div>
      
      <h3 className="text-lg font-medium text-gray-800 mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
