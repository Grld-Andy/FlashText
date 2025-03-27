import React from 'react'
import { PenLine, Code, Briefcase, Globe } from "lucide-react";
import ShinyCard from '@/components/ui/custom/ShinyCard'

const WhoItsFor: React.FC = () => {
    const users = [
        {
            icon: <PenLine size={40} className="text-blue-500" />,
            title: "Writers",
            glowColor: 'blue',
            description: "Speed up writing with smart snippets and text templates.",
        },
        {
            icon: <Code size={40} className="text-green-500" />,
            title: "Developers",
            glowColor: 'green',
            description: "Store and reuse code snippets instantly.",
        },
        {
            icon: <Briefcase size={40} className="text-orange-500" />,
            title: "Businesses",
            glowColor: 'orange',
            description: "Automate repetitive emails and customer replies.",
        },
        {
            icon: <Globe size={40} className="text-purple-500" />,
            title: "Marketers",
            glowColor: "purple",
            description: "Craft engaging campaigns with reusable content blocks.",
        }
    ];

    return (
        <section className='flex gap-10 flex-col mt-10 md:flex-row'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-5xl font-semibold md:flex-0 flex-1'>Who It's For</h1>
                <p className='text-slate-500 text-lg flex-1'>FlashType is built for anyone who types frequently. Save time and
                boost productivity.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {users.map((user, index) => (
                <ShinyCard
                    key={index}
                    glowColor={user.glowColor}
                    className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg"
                >
                    {user.icon}
                    <h3 className="text-2xl font-semibold mt-4">{user.title}</h3>
                    <p className="text-gray-600 text-center mt-2">{user.description}</p>
                </ShinyCard>
                ))}
            </div>
        </section>
    );
};

export default WhoItsFor