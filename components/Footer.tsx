'use client';

import Link from 'next/link';
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';

type Locale = 'en' | 'sv';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const adminLink = locale === 'sv' ? 'administr​ation' : 'admin​istration';

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-lagenio-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold">LAGENIO</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {locale === 'sv'
                ? 'Spetsen av kinesisk mobiltelefonteknik för Europa.'
                : 'The pinnacle of Chinese mobile phone technology for Europe.'}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-lagenio-blue transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-lagenio-blue transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-lagenio-blue transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-lagenio-blue transition-colors">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {locale === 'sv' ? 'Produkter' : 'Products'}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#rhino" className="hover:text-lagenio-blue transition-colors">
                  Rhino 1 Pro
                </a>
              </li>
              <li>
                <a href="#eagle" className="hover:text-lagenio-blue transition-colors">
                  Eagle Pro
                </a>
              </li>
              <li>
                <a href="#coming" className="hover:text-lagenio-blue transition-colors">
                  {locale === 'sv' ? 'Kommer Snart' : 'Coming Soon'}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {locale === 'sv' ? 'Företag' : 'Company'}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-lagenio-blue transition-colors">
                  {locale === 'sv' ? 'Om oss' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-lagenio-blue transition-colors">
                  {locale === 'sv' ? 'Kontakta' : 'Contact'}
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-lagenio-blue transition-colors">
                  {locale === 'sv' ? 'Villkor' : 'Terms'}
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-lagenio-blue transition-colors">
                  {locale === 'sv' ? 'Sekretess' : 'Privacy'}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {locale === 'sv' ? 'Support' : 'Support'}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#faq" className="hover:text-lagenio-blue transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-lagenio-blue transition-colors">
                  {locale === 'sv' ? 'Frakt' : 'Shipping'}
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-lagenio-blue transition-colors">
                  {locale === 'sv' ? 'Returer' : 'Returns'}
                </a>
              </li>
              <li>
                <a href="#warranty" className="hover:text-lagenio-blue transition-colors">
                  {locale === 'sv' ? 'Garanti' : 'Warranty'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <p className="text-gray-400 text-sm text-center">
            {locale === 'sv'
              ? `© 2026 LAGENIO. Alla rättigheter förbehållna. | Svensk importör: Ernst-William Hertz | ${adminLink}`
              : `© 2026 LAGENIO. All rights reserved. | Swedish Importer: Ernst-William Hertz | ${adminLink}`}
          </p>
        </div>

        {/* Company Info */}
        <div className="bg-gray-800 rounded-lg p-6 mt-8">
          <h3 className="font-bold mb-3">
            {locale === 'sv' ? 'Om vårt företag' : 'About our company'}
          </h3>
          <div className="text-gray-400 text-sm space-y-2">
            <p>
              <strong>{locale === 'sv' ? 'Tillverkare:' : 'Manufacturer:'}</strong> Shenzhen Lagenio
              Technology Co., Limited
            </p>
            <p>
              <strong>{locale === 'sv' ? 'Platser:' : 'Location:'}</strong> Guangdong, China
            </p>
            <p>
              <strong>{locale === 'sv' ? 'Erfarenhet:' : 'Experience:'}</strong>{' '}
              {locale === 'sv'
                ? 'Över 12 år av mobiltillverkning för ledande globala varumärken'
                : 'Over 12 years of mobile manufacturing for leading global brands'}
            </p>
            <p>
              <strong>{locale === 'sv' ? 'Rating:' : 'Rating:'}</strong> 4.9/5 Gold Supplier Status
            </p>
            <p>
              <strong>{locale === 'sv' ? 'Leveranstid från Kina:' : 'Delivery time from China:'}</strong>{' '}
              {locale === 'sv' ? 'Cirka 10 dagar' : 'Approximately 10 days'}
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 bg-gray-950 py-4 text-center text-gray-500 text-sm">
        <p>
          {locale === 'sv'
            ? 'Denna webbplats är utformad för att öka intresset för europiska kunder att köpa och testa ny teknik.'
            : 'This website is designed to increase the necessity for European customers to buy and test new technology.'}
        </p>
      </div>
    </footer>
  );
}
