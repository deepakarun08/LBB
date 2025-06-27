import React from 'react';
import Image from 'next/image';

const FounderSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/founder-message.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center px-6 py-16 md:py-24 max-w-6xl mx-auto gap-10 md:gap-16">
        {/* Founder Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/founder-shivani.jpg" // replace with your actual image path
            alt="Shivani Sharma"
            width={400}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Message Text */}
        <div className="max-w-2xl text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            From the Founder's Desk
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            The mind behind this initiative is <strong>Shivani Sharma</strong> – Founder of LBB,
            who is a flourishing entrepreneur, a certified Master Hypnotherapist, Dermatoglyphics Expert,
            and an NLP practitioner.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            She has her fair share of accolades in the beauty industry as well. Shivani is a pioneer in the
            Nail industry, whose work has played a major role in laying the foundation of this beauty practice
            across the nation, with her company <strong>Lure Nails</strong>.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Having practiced the above for 10 years alongside her beauty business, she decided to make a platform
            for other Healers in the field of Holistic practices and Alternative Science and came up with
            <strong> LBB – LIVES BEYOND BOUNDARIES</strong>.
          </p>
          <blockquote className="italic text-md sm:text-lg leading-relaxed border-l-4 border-white pl-4 mt-6">
            “Having been in a field for over 11 years that focuses on and celebrates external beauty, I always felt
            it’s only natural that I follow my passion and take it to the next level and explore the opposite end of
            that spectrum. What we hold in our minds is what reflects on the outside, and I hope to facilitate people
            in their endeavor to enhance their inner beauty and potential the same way we facilitated several people
            to enhance the exterior.”
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
