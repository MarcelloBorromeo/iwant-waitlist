import { useState, useEffect } from "react";
import WaitlistForm from "@/components/WaitlistForm";
import FeatureCard from "@/components/FeatureCard";
import { SearchIcon, ScrollTextIcon, UserIcon } from "lucide-react";
const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [features] = useState([{
    icon: <SearchIcon size={24} />,
    title: "Intelligent Search",
    description: "Discover restaurants that match your preferences and dietary requirements, down to the calorie."
  }, {
    icon: <ScrollTextIcon size={24} />,
    title: "Smart Menu Builder",
    description: "Create personalized meal plans tailored to your favorite dishes and goals."
  }, {
    icon: <UserIcon size={24} />,
    title: "Personal Agent",
    description: "Your dedicated food companion that learns your taste and provides perfect recommendations."
  }]);
  useEffect(() => {
    setMounted(true);
  }, []);
  return <div className="min-h-screen flex flex-col p-4 md:p-8 bg-gradient-to-br from-crave-lilac via-crave-blue-light to-crave-lilac bg-size-200 animate-gradient-shift-enhanced">      
      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Logo in top left */}
        <div className="absolute top-0 left-0">
          
        </div>
        
        {/* Header */}
        <div className="text-center mb-12 pt-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900">
            iwant_
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto">your personal food algorithm made by humans, for humans.</p>
        </div>
        
        {/* Main section with form - now centered and horizontal */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900 text-center">join our waitlist</h2>
            <p className="text-gray-600 mb-6 text-center text-base">built for your body, designed for your life.</p>
            <WaitlistForm />
          </div>
        </div>
        
        {/* Features section */}
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-8 text-gray-900">you can look forward to...</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />)}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="w-full text-center py-4 text-gray-600 text-sm">
        <p>© 2025 iwant_. All rights reserved.</p>
      </footer>
    </div>;
};
export default Index;