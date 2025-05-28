'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaMoon, FaSignInAlt } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Personal');

  const tabsPrimary = ['Personal', 'Business', 'Tourists'];
  const tabsSecondary = ['Fees and Limits', 'Contact us'];

  return (
    <header className="flex justify-center bg-[#f9fafb] shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
      <div className="w-full max-w-[1200px] h-[72px] flex flex-wrap lg:flex-nowrap items-center justify-between px-4 sm:px-6">
        {/* Logo + Tabs */}
        <div className="flex items-center gap-6 flex-wrap sm:flex-nowrap">
          {/* Logo */}
          <Image
            src="/images/logo.png"
            alt="Zeepay Logo"
            width={120}
            height={40}
            className="object-contain"
          />

          {/* Primary Tabs */}
          <nav className="flex gap-2 h-[48px]">
            {tabsPrimary.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-[90px] h-full px-[12px] py-[8px] rounded-[8px] text-sm font-medium transition-all duration-200 transform ${
                  activeTab === tab
                    ? 'bg-blue-100 text-blue-900 shadow-sm'
                    : 'hover:bg-gray-100 text-gray-600 hover:scale-[1.03]'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Secondary Tabs + Actions */}
        <div className="flex items-center gap-6 mt-3 lg:mt-0 flex-wrap sm:flex-nowrap">
          {/* Secondary Tabs */}
          <div className="flex gap-5 items-center">
            {tabsSecondary.map((tab) => (
              <span
                key={tab}
                className="text-sm text-gray-700 cursor-pointer hover:text-blue-700 transition-colors duration-150"
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Theme Icon */}
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <FaMoon className="text-[18px] text-gray-700" />
            </button>

            {/* Language Selector */}
            <div className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer transition">
              <Image src="/images/us-flag.png" alt="EN Flag" width={20} height={14} />
              <span className="text-sm text-gray-700">EN</span>
              <FiChevronDown className="text-sm text-gray-700" />
            </div>

            {/* Login Button */}
            <button className="flex items-center justify-center gap-2 w-[96px] h-[48px] px-[12px] py-[8px] border border-blue-300 rounded-[8px] text-sm font-semibold text-blue-700 bg-white hover:bg-blue-50 transition-all duration-200 shadow-sm hover:scale-[1.02]">
              Login <FaSignInAlt className="text-base" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
