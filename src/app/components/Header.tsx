'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaMoon, FaSignInAlt } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Personal');
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // برای جلوگیری از SSR mismatch

  const tabsPrimary = ['Personal', 'Business', 'Tourists'];
  const tabsSecondary = ['Fees and Limits', 'Contact us'];

  useEffect(() => {
    setIsMounted(true); // فقط بعد از mount شدن
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark, isMounted]);

  return (
    <header className="flex justify-center bg-[#f9fafb] dark:bg-[#121212] shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-colors duration-300">
      <div className="w-full max-w-[1200px] h-[72px] flex flex-wrap lg:flex-nowrap items-center justify-between px-4 sm:px-6">
        {/* Logo + Tabs */}
        <div className="flex items-center gap-6 flex-wrap sm:flex-nowrap">
          <Image
            src="/images/logo.png"
            alt="Zeepay Logo"
            width={120}
            height={40}
            className="object-contain"
          />

          <nav className="flex gap-2 h-[48px]">
            {tabsPrimary.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-[90px] h-full px-[12px] py-[8px] rounded-[8px] text-sm font-medium transition-all duration-200 transform ${
                  activeTab === tab
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-white shadow-sm'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 hover:scale-[1.03]'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Secondary Tabs + Actions */}
        <div className="flex items-center gap-6 mt-3 lg:mt-0 flex-wrap sm:flex-nowrap">
          <div className="flex gap-5 items-center">
            {tabsSecondary.map((tab) => (
              <span
                key={tab}
                className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-150"
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle Dark Mode"
            >
              <FaMoon className="text-[18px] text-gray-700 dark:text-gray-300" />
            </button>

            <div className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition">
              <Image src="/images/us-flag.png" alt="EN Flag" width={20} height={14} />
              <span className="text-sm text-gray-700 dark:text-gray-300">EN</span>
              <FiChevronDown className="text-sm text-gray-700 dark:text-gray-300" />
            </div>

            <button className="flex items-center justify-center gap-2 w-[96px] h-[48px] px-[12px] py-[8px] border border-blue-300 dark:border-blue-500 rounded-[8px] text-sm font-semibold text-blue-700 dark:text-blue-300 bg-white dark:bg-[#1c1c1c] hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-200 shadow-sm hover:scale-[1.02]">
              Login <FaSignInAlt className="text-base" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
