'use client';

import Image from 'next/image';

export default function CardFeatureSection() {
  return (
    <section className="relative w-full py-24 px-6 sm:px-10 bg-gradient-to-br from-[#f3f6fb] via-[#f9f9fb] to-[#e4ecfd] overflow-hidden">
      {/* Gradient blob behind cards */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-30 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-14">
        {/* Left Text */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            <span className="block">Experience The Power Of</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Zeepay Cards
            </span>:<br />
            Control, Convenience, Rewards
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Zeepay Cards put you in charge. Manage your spending, enjoy seamless transactions,
            and earn rewards – all with the power of Zeepay Cards in your hand.
          </p>

          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
            order card
          </button>
        </div>

        {/* Right Cards Image - no box */}
        <div className="relative w-full max-w-md flex-shrink-0">
          {/* Optional glow behind image (blurred gradient only) */}
          <div className="absolute -top-10 -right-10 w-[280px] h-[280px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-2xl rounded-full z-0 pointer-events-none" />

          {/* PNG card image, no box */}
          <Image
            src="/images/cards/zeepay-cards.png"
            alt="Zeepay Cards"
            width={600}
            height={600}
            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
