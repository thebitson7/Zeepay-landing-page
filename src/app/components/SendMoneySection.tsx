'use client';

import Image from 'next/image';

export default function SendMoneySection() {
  return (
    <section className="w-full bg-white py-24 px-6 sm:px-10">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-28">
        {/* Left: Phone & Action Buttons */}
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <div className="w-[500px]">
            <Image
              src="/images/phone-ui.png"
              alt="Send Money"
              width={600}
              height={900}
              className="w-full h-auto object-contain drop-shadow-xl"
              priority
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex gap-6 justify-center">
            <button className="px-8 py-2.5 rounded-full bg-black text-white font-semibold shadow hover:scale-105 transition">
              Send
            </button>
            <button className="px-8 py-2.5 rounded-full bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition">
              Deposit
            </button>
            <button className="px-8 py-2.5 rounded-full bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition">
              Withdraw
            </button>
          </div>
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Send Money Just By A Click
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
            Ditch the hassle of traditional banking! Zeepay offers seamless money management, allowing you to deposit funds, withdraw cash, and transfer payments in seconds. Whether you're topping up your account, accessing your money on the go, or sending funds to friends and family, Zeepay makes it quick, convenient, and secure.
          </p>
          <button className="bg-[#3557C7] hover:bg-[#2c45a6] text-white px-7 py-3 rounded-md text-sm font-semibold shadow-lg transition w-fit">
            try it out
          </button>
        </div>
      </div>
    </section>
  );
}
