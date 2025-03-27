import React from "react";

interface SecurityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SecurityCard: React.FC<SecurityCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative max-w-lg bg-zinc-900 p-6 rounded-xl border border-gray-800 shadow-lg 
      transition duration-300 hover:shadow-blue-500/50">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-blue-500 rounded-lg text-white">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 text-gray-400">{description}</p>
    </div>
  );
};

export default SecurityCard;
