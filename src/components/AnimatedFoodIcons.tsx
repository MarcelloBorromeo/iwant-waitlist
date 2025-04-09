
import { useEffect, useState } from "react";

interface FoodIcon {
  emoji: string;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const AnimatedFoodIcons = () => {
  const [icons, setIcons] = useState<FoodIcon[]>([]);
  
  useEffect(() => {
    // Create food icons when component mounts
    const foodEmojis = ["🥗", "🍎", "🥑", "🍲", "🥦", "🍜", "🍇", "🍙"];
    const newIcons = Array.from({ length: 8 }).map((_, i) => ({
      emoji: foodEmojis[i % foodEmojis.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 30 + Math.random() * 20,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10
    }));
    setIcons(newIcons);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="absolute food-icon animate-pulse-soft"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            fontSize: `${icon.size}px`,
            animationDelay: `${icon.delay}s`,
            animationDuration: `${icon.duration}s`,
            opacity: 0.7,
            zIndex: 0
          }}
        >
          {icon.emoji}
        </div>
      ))}
    </div>
  );
};

export default AnimatedFoodIcons;
