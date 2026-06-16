'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';

type Locale = 'en' | 'sv';

interface NavigationProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export default function Navigation({ locale, setLocale }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#consumer', label: locale === 'sv' ? 'Konsument' : 'Consumer' },
    { href: '#retail', label: locale === 'sv' ? 'Grossist' : 'Retail' },
    { href: '#about', label: locale === 'sv' ? 'Om oss' : 'About' },
  ];

  return (
    <nav className="bg-white border-b-2 border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-lagenio-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className="text-xl font-bold text-lagenio-blue hidden sm:inline">LAGENIO</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-lagenio-blue font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Side - Language Switcher & Cart */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex gap-2 border-l-2 border-gray-200 pl-4">
            <button
              onClick={() => setLocale('en')}
              className={`px-3 py-1 rounded font-semibold transition-all ${
                locale === 'en'
                  ? 'bg-lagenio-blue text-white'
                  : 'text-gray-600 hover:text-lagenio-blue'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLocale('sv')}
              className={`px-3 py-1 rounded font-semibold transition-all ${
                locale === 'sv'
                  ? 'bg-lagenio-blue text-white'
                  : 'text-gray-600 hover:text-lagenio-blue'
              }`}
            >
              SV
            </button>
          </div>

          {/* Cart Icon */}
          <button className="relative p-2 text-gray-700 hover:text-lagenio-blue transition-colors hidden sm:flex">
            <FiShoppingCart size={24} />
            <span className="absolute top-1 right-1 w-5 h-5 bg-lagenio-blue text-white text-xs rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-lagenio-blue"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 text-gray-700 hover:text-lagenio-blue font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
