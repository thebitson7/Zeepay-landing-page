'use client';

import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white py-28 px-6 sm:px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-start">
        {/* Left - Features */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          {/* Main Feature */}
          <div className="bg-[#F9FAFB] border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300">
            <span className="inline-flex items-center px-4 py-1.5 text-xs font-semibold bg-pink-100 text-pink-800 rounded-full mb-4">
              🎁 Gift Cards
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug mb-4">
              Make Memories, Not Decisions: Gift Cards Made Easy with Zeepay
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Forget gift-giving dilemmas! Zeepay Gift Cards let you choose the perfect present for everyone — from gamers to shopaholics. Send them instantly and ditch the stress. Zeepay makes gifting easy so you can focus on making memories.
            </p>
          </div>

          {/* Small Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Discounts */}
            <div className="bg-[#F9FAFB] rounded-xl px-6 py-5 shadow-sm border border-gray-200 hover:shadow-md transition">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-rose-100 text-rose-800 rounded-full mb-3">
                💸 Discounts
              </span>
              <p className="text-gray-800 text-base font-medium leading-snug">
                Discounts at Your Favorite Places
              </p>
            </div>

            {/* Insurance */}
            <div className="bg-[#F9FAFB] rounded-xl px-6 py-5 shadow-sm border border-gray-200 hover:shadow-md transition">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-pink-100 text-pink-800 rounded-full mb-3">
                🛡 Insurance
              </span>
              <p className="text-gray-800 text-base font-medium leading-snug">
                Simplify Your Life with Instant Insurance
              </p>
            </div>
          </div>
        </div>

        {/* Right - Cards Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[600px]"> {/* increased from 520px */}
            <Image
              src="/images/cards/cards.png"
              alt="Gift Cards"
              width={700}  // increased for better rendering
              height={480}
              className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
