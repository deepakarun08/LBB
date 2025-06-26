'use client';
import { useEffect } from 'react';

const topRowImages = [
  { src: '/images/online-counselling.jpg', title: 'Customised', subtitle: 'ONLINE COUNSELLING' },
  { src: '/images/fingerprint.jpg', title: 'SCIENTIFIC & GENETIC TOOL', subtitle: 'BASED ON FINGERPRINTS' },
  { src: '/images/recordings.jpg', title: 'ACCESS TO', subtitle: 'COUNSELLING RECORDINGS' },
];

const bottomRowImages = [
  { src: '/images/couple.jpg', title: 'Satisfied', subtitle: 'Family Counselling' },
  { src: '/images/report.jpg', title: '', subtitle: 'LIFETIME REPORT' },
  { src: '/images/trained.jpg', title: 'SPECIALISED', subtitle: 'TRAINED COUNSELLORS' },
];

export default function WhyChooseUs() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="sm:py-24 py-12 bg-[#fffbef]">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur. Ullamcorper in habitasse maecenas sit amet ultrices integer.
          Id vitae pellentesque quis eu. Nullam nunc eget in quam vitae ac orci.
        </p>
      </div>

      <div className="space-y-8">
        {/* Top Row */}
        <ScrollingRow images={topRowImages} direction="left" />

        {/* Bottom Row */}
        <ScrollingRow images={bottomRowImages} direction="right" />
      </div>
    </section>
  );
}

function ScrollingRow({ images, direction }) {
  return (
    <div className="overflow-hidden">
      <div
        className="flex whitespace-nowrap animate-[scroll_30s_linear_infinite]"
        style={{
          animationDirection: direction === 'left' ? 'normal' : 'reverse',
        }}
      >
        {[...images, ...images].map((item, idx) => (
          <ImageCard key={idx} src={item.src} title={item.title} subtitle={item.subtitle} />
        ))}
      </div>
    </div>
  );
}

function ImageCard({ src, title, subtitle }) {
  return (
    <div
      className="relative w-[450px] h-[200px] shrink-0 rounded-xl overflow-hidden bg-center bg-cover flex items-end p-4 text-white mx-2"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="p-2 rounded">
        {title && <p className="text-shadow-lg why-choose-title mb-0">{title}</p>}
        {subtitle && <p className="text-shadow-lg why-choose-subtitle mt-0">{subtitle}</p>}
      </div>
    </div>
  );
}
