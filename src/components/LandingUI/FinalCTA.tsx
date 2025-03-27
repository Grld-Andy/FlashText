import React from "react";
import { Button } from "../ui/button";
import StarBorder from "../ui/starBorder";

const FinalCTA: React.FC = () => {
  return (
    <section className="my-16 text-center items-center flex flex-col gap-3">
      <h2 className="text-5xl font-semibold">Get started today</h2>
      <p className="text-lg text-gray-500">Boost your productivity with FlashType.</p>
      <StarBorder className='cursor-pointer'>
        <Button className='bg-transparent text-lg py-6 px-5 cursor-pointer'>Get Started</Button>
      </StarBorder>
    </section>
  );
};

export default FinalCTA;
