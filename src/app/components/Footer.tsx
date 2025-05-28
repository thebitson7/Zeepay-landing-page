'use client';

import Image from 'next/image';
import {
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaXTwitter,
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-white to-gray-50 pt-24 pb-12 px-6 sm:px-10 text-sm text-gray-700 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 leading-snug">
            Join <span className="text-pink-600 font-extrabold">+20,000</span> Zeepay Users
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Image
              src="/images/web-browser.png"
              alt="Web"
              width={150}
              height={50}
              className="hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="/images/google-play.png"
              alt="Google Play"
              width={150}
              height={50}
              className="hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="/images/app-store.png"
              alt="App Store"
              width={150}
              height={50}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Grid: Links & Contact */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 border-t border-gray-200 pt-12">
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-gray-700">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Zeepay</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Contact us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Info</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Zeepay Cards</a></li>
                <li><a href="#" className="hover:underline">Fees and Limits</a></li>
                <li><a href="#" className="hover:underline">Cashback</a></li>
              </ul>
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col items-end gap-3 text-sm text-right">
            <p className="font-medium text-gray-800">+90 554 677 1874</p>
            <p>info@zeepay.com.tr</p>
            <div className="flex justify-end gap-4 text-xl text-gray-700 mt-3">
              <FaLinkedin className="hover:text-blue-600 cursor-pointer transition" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
              <FaTelegram className="hover:text-blue-400 cursor-pointer transition" />
              <FaXTwitter className="hover:text-black cursor-pointer transition" />
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="text-xs text-gray-500 mt-6 border-t border-gray-200 pt-6">
          <p className="mb-2 leading-relaxed">
            6493 Sayılı Ödeme ve Menkul Kıymet Mutabakat Sistemleri, Ödeme Hizmetleri ve Elektronik Para
            Kuruluşları Hakkında Kanun
          </p>
          <button className="text-gray-700 hover:underline font-medium text-sm">
            Show Certificate ⌄
          </button>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <span>© 2023 by Zeepay. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Terms & Services</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
