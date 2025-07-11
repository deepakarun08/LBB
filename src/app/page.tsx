'use client';
import './styles/style.css';
import Image from 'next/image';
import { FaYoutube, FaInstagram, FaFacebook, FaPhoneAlt, } from 'react-icons/fa';
import { Briefcase, Smile, HeartHandshake, Users } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessSteps from './components/ProcessSteps';
import StatsBanner from './components/StatsBanner';
import OurServicesCarousel from './components/OurServicesCarousel';
import PodcastPlayer from './components/PodcastPlayer';
import TestimonialCarousel from './components/TestimonialCarousel';
import FounderSection from './components/FounderSection';
import ContactForm from "./components/ContactForm";
import LivesBeyondBoundaries from "./components/LivesBeyondBoundaries";
import Footer from './components/Footer';

type DropdownName =
  | 'about'
  | 'services'
  | 'training'
  | 'tools'
  | 'assessments'
  | 'associations';

const slides = [
  {
    title: 'CONNECT WITH US TO CONTINUE YOUR JOURNEY',
    subtitle: 'We help you to be Better, Stronger and Happier!',
    tags: ['Psychologist', 'Psychiatrist', 'Psychoanalyst'],
    badges: [
      { label: 'Adult Counselling', position: 'top-0 left-1/2' },
      { label: 'Relationship Counselling', position: 'top-0 right-0' },
      { label: 'Child Assessments', position: 'bottom-10 left-1/2' },
      { label: 'Career Counselling', position: 'bottom-0 right-0' },
    ]
  },
  // Add more slides here if needed
];

const options = [
  {
    title: 'Get Career Counselling',
    icon: <Briefcase className="w-8 h-8 text-[#628FC9]" />,
    gradient: 'bg-gradient-to-r from-blue-100 to-blue-200',
    page: '/career-counselling',
  },
  {
    title: 'Get Your Child’s Counselling',
    icon: <Smile className="w-8 h-8 text-orange-400" />,
    gradient: 'bg-gradient-to-r from-orange-100 to-orange-200',
    page: '/special-need-child-counselling',
  },
  {
    title: 'Get Relationship Counselling',
    icon: <HeartHandshake className="w-8 h-8 text-[#628FC9]" />,
    gradient: 'bg-gradient-to-r from-sky-100 to-sky-200',
    page: '/adult-counselling',
  },
  {
    title: 'Get Family Counselling',
    icon: <Users className="w-8 h-8 text-orange-400" />,
    gradient: 'bg-gradient-to-r from-orange-100 to-orange-200',
    page: '/adult-counselling',
  },
];



export default function Home() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownName | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];
  const toggleDropdown = (dropdownName: DropdownName) => {
    setOpenDropdown(prev => (prev === dropdownName ? null : dropdownName));
  };


  return (
    <div>
      <header className='header md:h-[830] sm:h-auto'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex flex-row'>
            <div className="basis-3/12 social items-center hidden sm:flex">
              <div className="flex gap-4 text-white">
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"><FaYoutube className="w-6 h-6" /></a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"><FaInstagram className="w-6 h-6" /></a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"><FaFacebook className="w-6 h-6" /></a>
              </div>
            </div>
            <div className="basis-12/12 sm:basis-6/12 flex logo-container items-center justify-center py-8 cursor-pointer">
              <Link href="/"><div className='logo'>
                <Image src="/images/logo.png" alt='LBB logo' width={230} height={98} layout="responsive" ></Image>
              </div></Link>
            </div>
            <div className="basis-3/12 callToAction flex items-end justify-center text-white flex-col hidden sm:flex">
              <div className='flex items-center'><FaPhoneAlt size={20} /> <div className='text-2xl ml-3 font-bold'>Call Us!</div></div>
              <div className='font-normal text-2x'>9810019611</div>
            </div>
          </div>
        </div>
        <nav>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
            <div className="flex justify-between h-[48px]">
              <div className="flex">

                <div className="hidden lg:ml-0 sm:ml-6 sm:flex sm:space-x-8">


                  <div className="relative navlinks">
                    <button
                      onClick={() => toggleDropdown('about')}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-[#0b2b76] cursor-pointer"
                    >
                      About LBB
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      {openDropdown === 'about' && (
                        <div className="absolute text-left top-10 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                          <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</Link>
                          <Link href="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Team</Link>
                          <Link href="/media" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Latest Events & Updates</Link>
                        </div>
                      )}
                    </button>



                    <button
                      onClick={() => toggleDropdown('services')}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-[#0b2b76] cursor-pointer"
                    >
                      Our Services
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      {openDropdown === 'services' && (
                        <div className="absolute text-left top-10 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                          <Link href="/fingerprint-analysis" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Finger Print Analysis</Link>
                          <Link href="/hypnotherapy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hypnotherapy</Link>
                          <Link href="/cognitive-behavior-therapy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cognitive Behavioral Therapy</Link>
                          <Link href="/neuro-linguistic-programming" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">NLP - Neuro Linguistic Progrmming </Link>
                        </div>
                      )}
                    </button>



                    <button
                      onClick={() => toggleDropdown('training')}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-[#0b2b76] cursor-pointer"
                    >
                      Trainings
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      {openDropdown === 'training' && (
                        <div className="absolute text-left top-10 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                          <Link href="/dermatoglyphics-online-certification-training" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dermatoglyphics Online Certification Training</Link>
                          <Link href="/adversity-quotient-coach-training" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AQ Coach Certification Training</Link>
                        </div>
                      )}
                    </button>



                    <button
                      onClick={() => toggleDropdown('tools')}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-[#0b2b76] cursor-pointer"
                    >
                      Counselling & Tools
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      {openDropdown === 'tools' && (
                        <div className="absolute text-left top-10 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                          <Link href="/child-counselling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Decode Your Child's Fingerprints</Link>
                          <Link href="/career-counselling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Career Counselling</Link>
                          <Link href="/adult-counselling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Adult Counselling</Link>
                          <Link href="/special-need-child-counselling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Special Needs Child Counselling</Link>
                          <Link href="/online-workshops-for-kids" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Online Workshops for kids</Link>
                          <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Counselling Tools & Techniques</Link>
                        </div>
                      )}
                    </button>



                    <button
                      onClick={() => toggleDropdown('associations')}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-[#0b2b76] cursor-pointer"
                    >
                      Associations
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      {openDropdown === 'associations' && (
                        <div className="absolute text-left top-10 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                          <Link href="/corporates" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">LBB For Corporates</Link>
                          <Link href="/schools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">LBB For Schools</Link>
                          <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">LBB for Mental Health Professionals</Link>
                        </div>
                      )}
                    </button>



                    <button
                      onClick={() => toggleDropdown('assessments')}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-[#0b2b76] cursor-pointer"
                    >
                      Assessments
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>

                      {openDropdown === 'assessments' && (
                        <div className="absolute text-left top-10 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                          <Link href="/quiz/multiple-intelligence" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Multiple Intelligence</Link>
                          <Link href="/quiz/inborn-communication-style" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Inborn Communication Style</Link>
                          <Link href="/quiz/vark-learning-styles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">VARK Learning Styles</Link>
                          <Link href="/quiz/holland-career-assessment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Holland Career Assessment</Link>
                        </div>
                      )}
                    </button>

                    <Link href="/submit-your-fingerprints" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-[#0b2b76] cursor-pointer">Submit Your Fingerprints</Link>
                    <Link href="/blog" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-[#0b2b76] cursor-pointer">Blogs</Link>
                    <Link href="/contact-us" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-[#0b2b76] cursor-pointer">Contact Us</Link>

                  </div>
                </div>
              </div>

              {/* Mobile menu toggle */}
              <div className="-mr-0 flex items-center sm:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="sm:hidden px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Home</Link>

              <div>
                <button
                  onClick={() => toggleDropdown('about')}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 flex justify-between items-center"
                >
                  About LBB
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openDropdown === 'about' && (
                  <div className="pl-6">
                    <Link href="/about" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">About Us</Link>
                    <Link href="/team" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Our Team</Link>
                    <Link href="/media" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Latest Events & Updates</Link>
                  </div>
                )}

                <button
                  onClick={() => toggleDropdown('services')}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 flex justify-between items-center"
                >
                  Our Services
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openDropdown === 'services' && (
                  <div className="pl-6">
                    <Link href="/fingerprint-analysis" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Finger Print Analysis</Link>
                    <Link href="/hypnotherapy" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Hypnotherapy</Link>
                    <Link href="/cognitive-behavior-therapy" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Cognitive Behavioral Therapy</Link>
                    <Link href="/neuro-linguistic-programming" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">NLP - Neuro Linguistic Progrmming </Link>
                  </div>
                )}

                <button
                  onClick={() => toggleDropdown('training')}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 flex justify-between items-center"
                >
                  Trainings
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openDropdown === 'training' && (
                  <div className="pl-6">
                    <Link href="/dermatoglyphics-online-certification-training" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Dermatoglyphics Online Certification Training</Link>
                    <Link href="/adversity-quotient-coach-training" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">AQ Coach Certification Training</Link>
                  </div>
                )}

                <button
                  onClick={() => toggleDropdown('tools')}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 flex justify-between items-center"
                >
                  Counselling & Tools
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openDropdown === 'tools' && (
                  <div className="pl-6">
                    <Link href="/child-counselling" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Decode Your Child's Fingerprints</Link>
                    <Link href="/career-counselling" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Career Counselling</Link>
                    <Link href="/adult-counselling" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Adult Counselling</Link>
                    <Link href="/special-need-child-counselling" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Special Needs Child Counselling</Link>
                    <Link href="/online-workshops-for-kids" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Online Workshops for kids</Link>
                    <Link href="/" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Counselling Tools & Techniques</Link>
                  </div>
                )}

                <button
                  onClick={() => toggleDropdown('associations')}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 flex justify-between items-center"
                >
                  Associations
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openDropdown === 'associations' && (
                  <div className="pl-6">
                    <Link href="/corporates" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">LBB For Corporates</Link>
                    <Link href="/schools" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">LBB For Schools</Link>
                    <Link href="/" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">LBB for Mental Health Professionals</Link>
                  </div>
                )}

                <button
                  onClick={() => toggleDropdown('assessments')}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 flex justify-between items-center"
                >
                  Assessments
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openDropdown === 'assessments' && (
                  <div className="pl-6">
                    <Link href="/quiz/multiple-intelligence" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Multiple Intelligence</Link>
                    <Link href="/quiz/inborn-communication-style" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Inborn Communication Style</Link>
                    <Link href="/quiz/vark-learning-styles" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">VARK Learning Styles</Link>
                    <Link href="/quiz/holland-career-assessment" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Holland Career Assessment</Link>
                  </div>
                )}

              </div>

              <Link href="/submit-your-fingerprints" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Submit Your Fingerprints</Link>
              <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Blogs</Link>
              <Link href="/contact-us" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Contact Us</Link>
            </div>
          )}
        </nav>
        <section className="w-full py-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10 relative">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {slide.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 text-sm rounded-full bg-white/30 text-white font-medium border border-white/40">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight">
                {slide.title}
              </h1>
              <p className="text-white text-lg">{slide.subtitle}</p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact-us">
                <button className="bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-lg shadow">
                  Book Appointment Now
                </button></Link>
                <Link href="/contact-us">
                <button className="border border-white text-white px-5 py-2 rounded-lg hover:bg-white/10 transition">
                  Get a Discovery Call
                </button></Link>
              </div>
            </div>

            {/* Right: Image Grid */}
            <div className="relative gap-4">
              <Image src="/images/bannerImg.png" alt="Persons" width={684}
                height={508}
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 py-8">
          {options.map((item, index) => (
            <Link key={index} href={item.page}><div
              key={index + item.gradient}
              className={`rounded-xl shadow-md p-5 cursor-pointer flex items-center space-x-4 transition-transform hover:scale-105 ${item.gradient}`}
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div className="font-semibold text-gray-800 header-buttons">{item.title}</div>
            </div></Link>
          ))}
        </div>
      </header>


      <ProcessSteps />
      <StatsBanner />
      {/* Section Name: Life Beyond Boundaries */}

      <LivesBeyondBoundaries />
      <FounderSection />
      {/* Section Name: Why Choose Us */}
      <>  <WhyChooseUs /></>

      <><OurServicesCarousel /></>
      <PodcastPlayer />
      <TestimonialCarousel />
      <ContactForm />
      <Footer />
    </div>


  );
}
