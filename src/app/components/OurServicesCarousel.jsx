'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    title: 'Finger Print Analysis',
    desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper in habitasse maecenas sit amet ultrices integer.',
    img: '/images/service1.png',
  },
  {
    title: 'Hypnotherapy',
    desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper in habitasse maecenas sit amet ultrices integer.',
    img: '/images/service2.png',
    highlight: true,
  },
  {
    title: 'Cognitive Behavioural Therapy',
    desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper in habitasse maecenas sit amet ultrices integer.',
    img: '/images/service3.png',
  },
  {
    title: 'Child Therapy',
    desc: 'Helping children grow emotionally through playful therapy sessions.',
    img: '/images/service1.png',
  },
  {
    title: 'Career Counselling',
    desc: 'Empowering career decisions through tailored sessions.',
    img: '/images/service2.png',
  },
  {
    title: 'Anxiety Management',
    desc: 'Proven techniques to reduce anxiety & improve wellbeing.',
    img: '/images/service3.png',
  },
];

export default function OurServicesCarousel() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -1000 : 1000,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#F0F7FF] py-24 px-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper in habitasse maecenas sit amet ultrices integer.
            Id vitae pellentesque quis eu. Nullam nunc eget in quam vitae ac orci. Risus blandit suspendisse dignissim
            vulputate pharetra tempus est et. Aenean id montes maecenas at arcu aliquam sit lorem in sed pretium
            eleifend risus at aliquam etiam tincidunt.
          </p>
          <button className="bg-[#5886BF] hover:bg-[#597da8] text-white px-6 py-3 rounded-md font-medium">
            Book Appointment
          </button>
        </div>

        {/* Right Side - Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar scroll-smooth gap-4 services-carousel"
          >
            {services.map((service, idx) => (
              <div
                key={idx}
                className="min-w-[250px] max-w-[250px] bg-white text-black hover:text-white hover:bg-[#597da8] rounded-xl overflow-hidden border border-[#D9D9D9] mb-1 flex flex-col hover:cursor-pointer"
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  width={250}
                  height={150}
                  className="w-full h-[150px] object-cover"
                />
                <div className="p-4 flex-1 overflow-auto ">
                   
                  <h3 className="font-bold mb-1">{service.title}</h3>
                  <p className="text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute -bottom-12 right-0 flex gap-2 mt-4">
            <button
              onClick={() => scroll('left')}
              className="p-2 bg-[#5886BF] hover:bg-[#597da8] text-white rounded-md"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 bg-[#5886BF] hover:bg-[#597da8] text-white rounded-md"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
