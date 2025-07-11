'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote:
      '“I was struggling with anxiety and sleepless nights for months. Traditional methods didn’t work for me. That’s when I tried hypnotherapy through Lives Beyond Boundaries. Just a few sessions helped me uncover deep-rooted patterns and release them gently. I now feel calmer, more in control, and finally sleep peacefully. It truly changed my life.”',
    author: 'Ritika Sharma, Gurgaon',
  },
  {
    quote:
      '“Lives Beyond Boundaries helped me reconnect with myself during a tough phase. Their sessions are deeply transformative. I recommend them to anyone who wants clarity and inner peace.”',
    author: 'Anand Tiwari, Mumbai',
  },
  {
    quote:
      '“I never thought counselling would make such a difference. It gave me tools to manage my emotions better and build stronger relationships.”',
    author: 'Sneha Mehta, Delhi',
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <section className="w-full bg-white py-12 sm:py-24 px-4">
      {/* Image Grid */}
      <div className="flex flex-wrap justify-center gap-4 px-4 max-w-7xl mx-auto hidden sm:flex">
        {[
          '/images/testimonials-banner.png'
        ].map((img, idx) => (
          <div
            key={idx}
            className={`rounded-lg overflow-hidden ${
              idx >= 8 ? 'hidden lg:block' : ''
            } sm:w-full object-cover`}
          >
            <img src={img} alt={`Person ${idx + 1}`} className="w-full h-full object-cover hidden md:block" />
          </div>
        ))}
      </div>
       
    

      {/* Testimonial Section */}
      <div className="mt-0 sm:mt-12 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Voices Beyond Boundaries
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Real stories from real people — sharing how Lives Beyond Boundaries helped them transform their lives for the better.
        </p>

            <div className="max-w-4xl mx-auto aspect-video w-full rounded-lg overflow-hidden mb-8 mt-12">
          <video key="" controls autoPlay className="w-full h-full object-cover">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <blockquote className="text-gray-700 italic mb-4">
          {testimonials[currentIndex].quote}
        </blockquote>
        <p className="font-semibold text-gray-800">
          — {testimonials[currentIndex].author}
        </p>

        {/* Navigation Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === idx ? 'bg-[#5886BF]' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
