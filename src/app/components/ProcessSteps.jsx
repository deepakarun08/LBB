'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaRegChartBar, FaDna, FaRegSmile, FaHandsHelping } from "react-icons/fa";

const steps = [
  {
    title: 'We map your',
    description: 'Innate personality, character, learning style through your Fingerprints.',
    image: '/images/innate.png',
    icon: <FaDna />,
  },
  {
    title: 'We Identify your',
    description: 'Life Aspirations & Challenges by Identifying Your True Potential',
    image: '/images/aspirations.jpg',
    icon: <FaRegChartBar />,
  },
  {
    title: 'We help you',
    description: 'Manage 10 Pillars of a Happy Life',
    image: '/images/happy-life.jpg',
    icon: <FaRegSmile />,
  },
  {
    title: 'We help',
    description: 'Transform your life from Comfort Zone to Growth Zone.',
    image: '/images/grow.jpg',
    icon: <FaHandsHelping />,
  },
];

export default function ProcessSteps() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:py-24">
      <h2 className="text-3xl font-bold text-center mb-2">How the Process Works @ LIVES BEYOND BOUNDARIES</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        We help you live a life beyond boundaries by exploring the unique pathways within yourself so you may realize your true potential and purpose of life.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Left Side - Steps */}
        <div className="flex flex-col space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-start gap-4 p-4 min-h-[120px] rounded-xl cursor-pointer transition-all duration-300
                ${activeIndex === index
                  ? 'bg-[#5886bf] text-white'
                  : 'bg-[#f7f0e9] text-gray-800 hover:bg-blue-100 hover:translate-x-2'}
              `}
            >
              <div className="text-3xl">{step.icon}</div>
              <div>
                <h4 className={`font-bold ${activeIndex === index ? 'text-white' : 'text-black'}`}>
                  {step.title}
                </h4>
                <p className="text-sm">{step.description}</p>
                <p className="underline text-xs mt-1">read more...</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Dynamic Image */}
        <div className="w-full h-[528px] rounded-xl overflow-hidden">
          <Image
            src={steps[activeIndex].image}
            alt={steps[activeIndex].title}
            width={700}
            height={350}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
