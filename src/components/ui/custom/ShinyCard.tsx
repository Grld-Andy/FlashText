import React from "react";

interface ShinyCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

const ShinyCard: React.FC<ShinyCardProps> = ({
  children,
  className = "",
  glowColor = "rgba(59,130,246,0.8)",
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl p-8 border border-transparent
      shadow-xl transition-all duration-500 ease-in-out 
      before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-transparent
      before:bg-gradient-to-r before:from-transparent before:via-${glowColor} before:to-transparent
      before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 
      ${className}`}
      style={{
        boxShadow: `0 0 5px ${glowColor}`,
      }}
    >
      {children}
    </div>
  );
};

export default ShinyCard;
