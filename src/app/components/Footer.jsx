'use client';
import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white pt-12 border-t border-gray-200 text-sm text-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 text-left">

        {/* Logo and Contact */}
        <div className="md:col-span-2 space-y-4">
          <div>
            <Image src="/images/logo-black.png" alt="LBB Logo" width={150} height={64} />
            <h2 className="font-semibold text-[#5886BF] mt-2">LIVES BEYOND BOUNDARIES</h2>
          </div>

          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1" />
            <p>
              THE CLOSE NORTH, Nirvana Country, Sector 50,<br />
              Gurugram, Haryana 122018
            </p>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope />
            <a href="mailto:info@livesbeyondboundaries.com" className="hover:underline">
              info@livesbeyondboundaries.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <FaPhone />
            <a href="tel:9011201122" className="hover:underline">
              9011201122
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Our Training</a></li>
            <li><a href="#" className="hover:text-blue-600">Our Team</a></li>
            <li><a href="#" className="hover:text-blue-600">Blogs</a></li>
          </ul>
        </div>

        {/* Online Consultation */}
        <div>
          <h3 className="font-semibold mb-2">Online Consultation</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600">Child Counselling</a></li>
            <li><a href="#" className="hover:text-blue-600">Career Counselling</a></li>
            <li><a href="#" className="hover:text-blue-600">Adult Counselling</a></li>
            <li><a href="#" className="hover:text-blue-600">Special Needs Child Counselling</a></li>
          </ul>
        </div>

        {/* Associations */}
        <div>
          <h3 className="font-semibold mb-2">Associations</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600">LBB for Corporates</a></li>
            <li><a href="#" className="hover:text-blue-600">LBB for Schools</a></li>
            <li><a href="#" className="hover:text-blue-600">LBB for Mental Health Professional</a></li>
          </ul>
        </div>
      </div>

      {/* Social Icons & Bottom Row */}
      <div className="mt-8 border-t border-gray-200 pt-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Icons */}
          <div className="flex gap-4 text-xl text-gray-600">
            <a href="#" aria-label="YouTube" className="hover:text-red-600"><FaYoutube /></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-600"><FaFacebook /></a>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-gray-600">
            Copyright © 2025 Lives Beyond Boundaries. All rights reserved.
          </div>

          {/* Footer Links */}
          <div className="text-xs space-x-4 text-gray-600">
            <a href="#" className="hover:underline">Refund</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}