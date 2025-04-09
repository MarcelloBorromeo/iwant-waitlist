
import { useState, useEffect } from "react";
import WaitlistForm from "@/components/WaitlistForm";
import FeatureCard from "@/components/FeatureCard";
import AnimatedFoodIcons from "@/components/AnimatedFoodIcons";
import { SearchIcon, ScrollTextIcon, UserIcon } from "lucide-react";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <div className="animated-gradient-bg min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      <AnimatedFoodIcons />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-violet-700 via-purple-700 to-blue-700 bg-clip-text text-transparent drop-shadow-sm animate-float">
            Crave Companion
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Your personal AI food guide that knows what you want before you do
          </p>
        </div>
        
        {/* Main section with form */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="order-2 md:order-1">
            <div className="card-glass rounded-2xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-6">Join our exclusive waitlist</h2>
              <p className="text-gray-600 mb-6">
                Be among the first to experience a revolutionary way to discover food that's perfectly matched to your tastes and nutritional needs.
              </p>
              <WaitlistForm />
            </div>
          </div>
          
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              End food decision fatigue forever
            </h2>
            <p className="text-gray-700 mb-6">
              Crave Companion uses AI to learn your tastes and dietary needs, making healthy eating effortless and enjoyable. No more scrolling through endless menus or wondering what to cook.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
              <span className="py-1 px-3 text-sm bg-white/30 rounded-full backdrop-blur-sm">Personalized Nutrition</span>
              <span className="py-1 px-3 text-sm bg-white/30 rounded-full backdrop-blur-sm">Restaurant Discovery</span>
              <span className="py-1 px-3 text-sm bg-white/30 rounded-full backdrop-blur-sm">AI-Powered</span>
            </div>
          </div>
        </div>
        
        {/* Features section */}
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-8">Core Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<SearchIcon size={24} />} 
              title="Intelligent Restaurant Search"
              description="Discover restaurants that match your culinary preferences and dietary requirements."
            />
            <FeatureCard 
              icon={<ScrollTextIcon size={24} />} 
              title="Smart Menu Builder"
              description="Effortlessly create personalized meal plans tailored to your favorite dishes and nutritional goals."
            />
            <FeatureCard 
              icon={<UserIcon size={24} />} 
              title="Iwant_ Agent"
              description="Your dedicated culinary companion that learns your cravings and provides perfect recommendations."
            />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="w-full text-center py-4 text-gray-600 text-sm">
        <p>© 2025 Crave Companion. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
