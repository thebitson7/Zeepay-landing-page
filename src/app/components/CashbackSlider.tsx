'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/images/cashback/starbucks.jpg',
  '/images/cashback/zara.jpg',
  '/images/cashback/netflix.jpg',
  '/images/cashback/spotify.jpg',
];

const INTERVAL = 4000;

export default function CashbackWithIntro() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setCurrent((prev) => (prev + 1) % images.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="w-full bg-white py-20 px-6 sm:px-10 lg:px-16">
      {/* Header */}
      <div className="max-w-[1100px] mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Earn Instant Cashback
          </span>{' '}
          As You Spend
        </h2>
        <p className="text-gray-600 text-lg sm:text-base max-w-2xl mx-auto">
          No need to puzzle over how to earn and spend your cashback. Zeepay Cashback is straightforward
          and immediate — no discount codes, just instant rewards. Earn without stress or conditions.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start gap-14 lg:gap-20">
        {/* Left Info */}
        <div className="w-full lg:w-1/3 flex flex-col items-center text-center gap-4 pt-4">
          <Image src="/images/logos/starbucks.png" alt="Starbucks" width={70} height={70} />
          <h3 className="text-2xl font-semibold text-gray-800">Starbucks</h3>
          <p className="text-sm text-gray-500">1 April - 30 June</p>
          <span className="inline-block mt-2 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm">
            Up to 4%
          </span>
          <a
            href="#"
            className="text-blue-600 text-sm hover:underline mt-1 inline-block font-medium"
          >
            More Info →
          </a>
        </div>

        {/* Right Slider */}
        <div className="w-full lg:w-2/3 relative rounded-3xl overflow-hidden shadow-xl h-[420px] border border-gray-100">
          {/* Base image to avoid flashing */}
          <motion.img
            key={`prev-${prev}`}
            src={images[prev]}
            alt="Previous"
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          />
          {/* Animated new image */}
          <motion.img
            key={`current-${current}`}
            src={images[current]}
            alt="Current"
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
            {images.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
