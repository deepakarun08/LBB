'use client';
import Image from 'next/image';

export default function LivesBeyondBoundaries() {
  const tags = [
    "Self – Assessment", "Life vision", "Leadership", "Goal Setting", "Accountability",
    "Decision Making", "Responsibility", "Management Planning", "Confidence",
    "Growing Finance", "Self-Esteem", "Conflict Management", "Relationships",
    "Increasing Productivity", "Resilience", "Consequential Thinking"
  ];

  return (
    <section className="LBB bg-white md:py-24 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          LIVES BEYOND BOUNDARIES
        </h1>
        <p className="text-xl font-semibold mt-2">
          empowering you to grow stronger, live better, and feel truly happier.
        </p>
        <p className="text-gray-600 mt-2">
          We guide you to transform yourself by recognizing your strengths in multiple aspects of your Life.
        </p>
      </div>

      <div className="mt-12 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div className="bg-orange-50 p-4 pb-0 rounded-xl flex justify-center align-baseline">
          <Image
            src="/images/happy-girl.png"
            alt="Happy person"
            width={400}
            height={400}
            className="rounded-lg object-contain"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <p className="text-gray-700 text-justify">
            We prepare ourselves and our children how to be perfect at studies, earning money, acquiring best things in life.
            We often confuse success with happiness and give great importance to former. While success is important, it is
            much important to be happier to achieve success. Unfortunately, there is no School or Institute to prepare us for LIFE itself.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-orange-100 text-orange-600 text-sm px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Button */}
          <button className="mt-6 bg-orange-300 hover:bg-orange-400 text-white font-medium px-4 py-2 rounded transition">
            Read More…
          </button>
        </div>
      </div>
    </section>
  );
}
