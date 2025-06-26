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
import ContactForm from "./components/ContactForm";
import LivesBeyondBoundaries from "./components/LivesBeyondBoundaries";
import Footer from './components/Footer';

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
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    gradient: 'bg-gradient-to-r from-blue-100 to-blue-200',
  },
  {
    title: 'Get Your Child’s Counselling',
    icon: <Smile className="w-8 h-8 text-orange-400" />,
    gradient: 'bg-gradient-to-r from-orange-100 to-orange-200',
  },
  {
    title: 'Get Relationship Counselling',
    icon: <HeartHandshake className="w-8 h-8 text-sky-500" />,
    gradient: 'bg-gradient-to-r from-sky-100 to-sky-200',
  },
  {
    title: 'Get Family Counselling',
    icon: <Users className="w-8 h-8 text-orange-400" />,
    gradient: 'bg-gradient-to-r from-orange-100 to-orange-200',
  },
];



export default function Home() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isTrainingDropdownOpen, setTrainingDropdownOpen] = useState(false);
  const [isToolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [isAssessmentsDropdownOpen, setAssessmentsDropdownOpen] = useState(false);
  const [isAssociationsDropdownOpen, setAssociationsDropdownOpen] = useState(false);


  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <div>
      <header className='header md:h-[830] sm:h-auto'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex flex-row'>
            <div className="basis-3/12 flex social items-center">
              <div className="flex gap-4 text-white">
                <FaYoutube className="w-6 h-6" />
                <FaInstagram className="w-6 h-6" />
                <FaFacebook className="w-6 h-6" />
              </div>
            </div>
            <div className="basis-6/12 flex logo-container items-center justify-center py-8">
              <div className='logo'>
                <Image src="/images/logo.png" alt='LBB logo' width={230} height={98} layout="responsive" ></Image>
              </div>
            </div>
            <div className="basis-3/12 callToAction flex items-end justify-center text-white flex-col">
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
                      onClick={() => setAboutDropdownOpen(!isAboutDropdownOpen)}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-[#0b2b76]"
                    >
                      About LBB
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      {isAboutDropdownOpen && (
                        <div className="absolute text-left top-10 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                          <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</Link>
                          <Link href="/ourTeam" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Team</Link>
                          <Link href="/eventsAndUpdates" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Latest Events & Updates</Link>
                        </div>
                      )}
                    </button>



                    <button
                      onClick={() => setServicesDropdownOpen(!isServicesDropdownOpen)}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-[#0b2b76]"
                    >
                      Our Services
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      {isServicesDropdownOpen && (
                        <div className="absolute text-left top-10 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                          <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Finger Print Analysis</Link>
                          <Link href="/ourTeam" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hypnotherapy</Link>
                          <Link href="/eventsAndUpdates" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cognitive Behavioral Therapy</Link>
                          <Link href="/eventsAndUpdates" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">NLP - Neuro Linguistic Progrmming </Link>
                        </div>
                      )}
                    </button>



                    <button
                      onClick={() => setTrainingDropdownOpen(!isTrainingDropdownOpen)}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-[#0b2b76]"
                    >
                      Trainings
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      {isTrainingDropdownOpen && (
                        <div className="absolute text-left top-10 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                          <Link href="/Dermatoglyphics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dermatoglyphics Online Certification Training</Link>
                          <Link href="/AQ-Coach" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AQ Coach Certification Training</Link>
                        </div>
                      )}
                    </button>



                    <button
                      onClick={() => setToolsDropdownOpen(!isToolsDropdownOpen)}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-[#0b2b76]"
                    >
                      Counselling & Tools
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      {isToolsDropdownOpen && (
                        <div className="absolute text-left top-10 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                          <Link href="/child-fingerprints" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Decode Your Child's Fingerprints</Link>
                          <Link href="/career-counselling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Career Counselling</Link>
                          <Link href="/adult-counselling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Adult Counselling</Link>
                          <Link href="/special-child-counselling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Special Needs Child Counselling</Link>
                          <Link href="/special-child-counselling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Online Workshops for kids</Link>
                          <Link href="/counselling-tools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Counselling Tools & Techniques</Link>
                        </div>
                      )}
                    </button>



                    <button
                      onClick={() => setAssociationsDropdownOpen(!isAssociationsDropdownOpen)}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-[#0b2b76]"
                    >
                      Associations
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      {isAssociationsDropdownOpen && (
                        <div className="absolute text-left top-10 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                          <Link href="/lbb-corporates" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">LBB For Corporates</Link>
                          <Link href="/career-counselling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">LBB For Schools</Link>
                          <Link href="/adult-counselling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">LBB for Mental Health Professionals</Link>
                        </div>
                      )}
                    </button>



                    <button
                      onClick={() => setAssessmentsDropdownOpen(!isAssessmentsDropdownOpen)}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-[#0b2b76]"
                    >
                      Assessments
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>

                      {isAssessmentsDropdownOpen && (
                        <div className="absolute text-left top-10 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                          <Link href="/lbb-corporates" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Multiple Intelligence</Link>
                          <Link href="/career-counselling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Inborn Communication Style</Link>
                          <Link href="/adult-counselling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">VARK Learning Styles</Link>
                          <Link href="/adult-counselling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Holland Career Assessment</Link>
                        </div>
                      )}
                    </button>

                    <Link href="/submit-fingerprints" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-[#0b2b76]">Submit Your Fingerprints</Link>
                    <Link href="/blogs" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-[#0b2b76]">Blogs</Link>
                    <Link href="/contact-us" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-[#0b2b76]">Contact Us</Link>

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
                  onClick={() => setAboutDropdownOpen(!isAboutDropdownOpen)}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 flex justify-between items-center"
                >
                  About LBB
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isAboutDropdownOpen && (
                  <div className="pl-6">
                    <Link href="/about" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">About Us</Link>
                    <Link href="/ourTeam" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Our Team</Link>
                    <Link href="/eventsAndUpdates" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Latest Events & Updates</Link>
                  </div>
                )}

                <button
                  onClick={() => setServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 flex justify-between items-center"
                >
                  Our Services
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isServicesDropdownOpen && (
                  <div className="pl-6">
                    <Link href="/about" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Finger Print Analysis</Link>
                    <Link href="/ourTeam" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Hypnotherapy</Link>
                    <Link href="/eventsAndUpdates" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">Cognitive Behavioral Therapy</Link>
                    <Link href="/eventsAndUpdates" className="block py-1 text-sm text-gray-700 hover:bg-gray-100">NLP - Neuro Linguistic Progrmming </Link>
                  </div>
                )}

              </div>

              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">About</Link>
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
                <button className="bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-lg shadow">
                  Book Appointment Now
                </button>
                <button className="border border-white text-white px-5 py-2 rounded-lg hover:bg-white/10 transition">
                  Get a Discovery Call
                </button>
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
            <div
              key={index}
              className={`rounded-xl shadow-md p-5 cursor-pointer flex items-center space-x-4 transition-transform hover:scale-105 ${item.gradient}`}
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div className="font-semibold text-gray-800">{item.title}</div>
            </div>
          ))}
        </div>
      </header>


      <ProcessSteps />
      <StatsBanner />



      {/* Section Name: Life Beyond Boundaries */}

      <LivesBeyondBoundaries />
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
