
import { ReactNode, useState } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  editable?: boolean;
  onTitleChange?: (value: string) => void;
  onDescriptionChange?: (value: string) => void;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  editable = false,
  onTitleChange,
  onDescriptionChange 
}: FeatureCardProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDoubleClick = () => {
    if (editable) {
      setIsEditing(true);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div 
      className="feature-card p-5 rounded-lg bg-white/60 border border-gray-100 shadow-sm hover:shadow transition-all duration-300 animate-float"
      onDoubleClick={handleDoubleClick}
    >
      <div className="text-gray-700 mb-3">
        {icon}
      </div>
      
      {editable && isEditing ? (
        <input
          type="text"
          value={title}
          onChange={(e) => onTitleChange?.(e.target.value)}
          onBlur={handleBlur}
          className="text-lg font-medium text-gray-800 mb-2 w-full bg-transparent border-b border-gray-300 outline-none"
          autoFocus
        />
      ) : (
        <h3 
          className="text-lg font-medium text-gray-800 mb-2"
          title={editable ? "Double-click to edit" : ""}
        >
          {title}
        </h3>
      )}
      
      {editable && isEditing ? (
        <textarea
          value={description}
          onChange={(e) => onDescriptionChange?.(e.target.value)}
          onBlur={handleBlur}
          className="text-gray-600 text-sm w-full bg-transparent border border-gray-300 rounded p-1 outline-none resize-none"
          rows={3}
        />
      ) : (
        <p 
          className="text-gray-600 text-sm"
          title={editable ? "Double-click to edit" : ""}
        >
          {description}
        </p>
      )}
      
      {editable && !isEditing && (
        <div className="text-xs text-gray-400 mt-2 italic">
          Double-click to edit
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
