'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f7f9fc] via-[#f2f4f8] to-[#f9fafb] dark:from-[#111111] dark:via-[#1a1a1a] dark:to-[#121212] py-20 px-6 sm:px-12 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6 tracking-tight">
            The <span className="text-pink-500">All-In-One Wallet</span><br />
            App For Managing<br />
            Your Money
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Take control of your finances with Zeepay. Send & receive money free, manage bills,
            budget effectively, and get rewarded for spending.
          </p>

          <Link
            href="#"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.03]"
          >
            Get the App →
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/hero-phone.png"
            alt="Zeepay App"
            width={520}
            height={650}
            className="drop-shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
