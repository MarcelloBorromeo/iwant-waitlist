import { useState, useEffect } from "react";
import WaitlistForm from "@/components/WaitlistForm";
import FeatureCard from "@/components/FeatureCard";
import { SearchIcon, ScrollTextIcon, UserIcon } from "lucide-react";
const Index = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-br from-crave-lilac/40 to-crave-blue/40">      
      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <img src="/lovable-uploads/60b6bde7-3549-49e9-8ea8-6ed0757bbf47.png" alt="iwant_ logo" className="w-20 h-20 mb-2" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900">
            iwant_
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto">Your personal AI food guide that knows what you want before you do.</p>
        </div>
        
        {/* Main section with form */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="order-2 md:order-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900">Join our exclusive waitlist</h2>
              <p className="text-gray-600 mb-6">
                Be among the first to experience a revolutionary way to discover food that's perfectly matched to your tastes.
              </p>
              <WaitlistForm />
            </div>
          </div>
          
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">End food decision fatigue for good.</h2>
            <p className="text-gray-700 mb-6">
              iwant_ uses AI to learn your tastes and dietary needs, making healthy eating effortless and enjoyable.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
              
              
              
            </div>
          </div>
        </div>
        
        {/* Features section */}
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-8 text-gray-900">Core Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon={<SearchIcon size={24} />} title="Intelligent Search" description="Discover restaurants that match your preferences and dietary requirements." />
            <FeatureCard icon={<ScrollTextIcon size={24} />} title="Smart Menu Builder" description="Create personalized meal plans tailored to your favorite dishes and goals." />
            <FeatureCard icon={<UserIcon size={24} />} title="Personal Agent" description="Your dedicated food companion that learns your taste and provides perfect recommendations." />
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