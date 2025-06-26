'use client';

import { useState, useEffect } from 'react';
import { PlayCircle } from 'lucide-react';
import { FaPlay } from "react-icons/fa";

const podcastVideos = [
  {
    id: 1,
    title: 'Episode 1',
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: '/videos/thumb1.png',
  },
  {
    id: 2,
    title: 'Episode 2',
    videoSrc: 'https://www.w3schools.com/html/movie.mp4',
    thumbnail: '/videos/thumb2.png',
  },
  {
    id: 3,
    title: 'Episode 3',
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: '/videos/thumb3.png',
  },
];

export default function PodcastPlayer() {
  const [selectedVideo, setSelectedVideo] = useState(podcastVideos[0]);

  useEffect(() => {
    setSelectedVideo(podcastVideos[0]);
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#faa988] to-[#ffe9dc] py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Our Podcast Episodes</h2>
        <p className="text-white mb-6 text-sm max-w-xl mx-auto">
          Real conversations, raw emotions, and honest stories that break the silence around mental health.
          Let's talk, heal, and grow together.
        </p>

        {/* Main Video */}
        <div className="aspect-video w-full rounded-lg overflow-hidden mb-6">
          <video key={selectedVideo.videoSrc} controls autoPlay className="w-full h-full object-cover">
            <source src={selectedVideo.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Thumbnails */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {podcastVideos.map((video) => (
            <div
              key={video.id}
              className={`relative group w-40 cursor-pointer overflow-hidden rounded-md border-2 ${
                selectedVideo.id === video.id ? 'border-orange-500' : 'border-transparent'
              }`}
              onClick={() => setSelectedVideo(video)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition duration-200 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black opacity-50">
                <FaPlay className='text-white' />
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="bg-[#F9A684] text-white px-6 py-2 rounded-md font-medium hover:bg-[#f99284] transition">
          Watch More Podcast Videos
        </button>
      </div>
    </section>
  );
}
