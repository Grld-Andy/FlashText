import React from "react";
import { ShieldCheck, Lock, Server, Bolt, Globe, Cpu } from "lucide-react";

const securityAndPerformanceFeatures = [
  {
    icon: <ShieldCheck size={24} className="text-pink-500" />,
    title: "Your Data, 100% Safe",
    description: "Protected with military-grade security, so only you have access.",
    points: ["Bank-level encryption", "Secure connections", "No unauthorized access"],
  },
  {
    icon: <Lock size={24} className="text-pink-500" />,
    title: "Locked & Secure",
    description: "Your account stays safe with advanced login protection.",
    points: ["Sign in with Google or GitHub", "Extra security with two-step login", "Automatic session protection"],
  },
  {
    icon: <Server size={24} className="text-pink-500" />,
    title: "Always Available, Always Fast",
    description: "Reliable and built to perform no downtime, no delays.",
    points: ["Runs 24/7 with 99.9% uptime", "Daily backups for safety", "Protected against online attacks"],
  },
  {
    icon: <Bolt size={24} className="text-pink-500" />,
    title: "Instant Speed, No Lag",
    description: "Your snippets load instantly, so you can work faster.",
    points: ["Quick response time", "Works offline", "No waiting, just results"],
  },
  {
    icon: <Globe size={24} className="text-pink-500" />,
    title: "Privacy First, No Tracking",
    description: "We respect your data, no selling, no tracking, no spying.",
    points: ["Fully privacy compliant", "Data stays yours", "No hidden monitoring"],
  },
  {
    icon: <Cpu size={24} className="text-pink-500" />,
    title: "Smart & Secure",
    description: "AI-powered protection keeps your account and data safe.",
    points: ["Detects suspicious activity", "Prevents unauthorized access", "Always learning, always improving"],
  },
];


const SecurityPerformance: React.FC = () => {
  return (
    <section className='flex gap-10 flex-col'>
        <div className='flex justify-between gap-5 flex-col md:flex-row'>
        <h1 className='text-5xl font-semibold text-nowrap'>
          Security & Performance
        </h1>
        <p className='text-slate-500 text-lg md:text-right w-full md:max-w-[550px]'>
          How FlashType keeps data safe & runs fast.
        </p>
      </div>

      <div className='grid md:grid-cols-3 gap-5 sm:grid-cols-2 grid-cols-1'>
      {securityAndPerformanceFeatures.map((feature, index) => (
        <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
          <div className="flex gap-3 items-center">
            <div>{feature.icon}</div>
            <h3 className="font-semibold text-lg">{feature.title}</h3>
          </div>
          <p className="text-gray-500 text-sm mt-2">{feature.description}</p>
          <ul className="text-gray-600 text-sm mt-2 list-disc list-inside">
            {feature.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </section>
  );
};

export default SecurityPerformance;
