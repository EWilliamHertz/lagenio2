'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import PhoneCard from '@/components/PhoneCard';
import SpecificationComparison from '@/components/SpecificationComparison';
import HypeSection from '@/components/HypeSection';
import Footer from '@/components/Footer';
import { translations } from '@/i18n.config';

type Locale = 'en' | 'sv';

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en');
  const [activeTab, setActiveTab] = useState<'overview' | 'rhino' | 'eagle'>('overview');
  const t = translations[locale];

  const rhinoSpecs = {
    name: 'Rhino 1 Pro',
    display: '6.7" AMOLED 120Hz',
    processor: 'Snapdragon 8 Gen 3',
    ram: '12GB / 16GB',
    storage: '256GB / 512GB',
    camera: '200MP Main + 50MP Telephoto + 50MP Ultra Wide',
    battery: '5000mAh + 100W Fast Charge',
    design: 'Titanium Frame, IP68 Water & Dust Resistant',
    connectivity: '5G (Sub-6 & mmWave)',
    color: 'Black',
    price: 3850,
  };

  const eagleSpecs = {
    name: 'Eagle Pro',
    display: '6.5" OLED 144Hz',
    processor: 'Snapdragon 8 Gen 3 Leading Version',
    ram: '12GB / 16GB',
    storage: '256GB / 512GB',
    camera: '108MP Main + 48MP Periscope + 40MP Ultra Wide',
    battery: '5200mAh + 120W HyperCharge',
    design: 'Ceramic Shield, IP69K Water & Dust Resistant',
    connectivity: '5G + WiFi 7',
    color: 'Midnight Blue',
    price: 4250,
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation locale={locale} setLocale={setLocale} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Consumer Section */}
        <section className="mb-16">
          {/* Tab Navigation */}
          <div className="flex gap-4 mb-12 border-b-2 border-gray-200 overflow-x-auto pb-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-semibold whitespace-nowrap transition-all ${
                activeTab === 'overview'
                  ? 'text-lagenio-blue border-b-4 border-lagenio-blue pb-2'
                  : 'text-gray-600 hover:text-lagenio-blue'
              }`}
            >
              {locale === 'sv' ? 'Översikt' : 'Overview'}
            </button>
            <button
              onClick={() => setActiveTab('rhino')}
              className={`px-6 py-3 font-semibold whitespace-nowrap transition-all ${
                activeTab === 'rhino'
                  ? 'text-lagenio-blue border-b-4 border-lagenio-blue pb-2'
                  : 'text-gray-600 hover:text-lagenio-blue'
              }`}
            >
              Rhino 1 Pro
            </button>
            <button
              onClick={() => setActiveTab('eagle')}
              className={`px-6 py-3 font-semibold whitespace-nowrap transition-all ${
                activeTab === 'eagle'
                  ? 'text-lagenio-blue border-b-4 border-lagenio-blue pb-2'
                  : 'text-gray-600 hover:text-lagenio-blue'
              }`}
            >
              Eagle Pro
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div>
              {/* Hype Section for New Model */}
              <HypeSection locale={locale} />

              {/* Specification Comparison */}
              <SpecificationComparison
                rhinoSpecs={rhinoSpecs}
                eagleSpecs={eagleSpecs}
                locale={locale}
              />
            </div>
          )}

          {/* Rhino 1 Pro Tab */}
          {activeTab === 'rhino' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <PhoneCard
                model={rhinoSpecs}
                locale={locale}
              />
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Rhino 1 Pro</h2>
                <p className="text-gray-600 mb-4 text-lg">
                  {locale === 'sv'
                    ? 'Robust prestanda möter elegant design. Rhino 1 Pro är den ultimata telefonen för dem som kräver det bästa av både världar.'
                    : 'Robust performance meets elegant design. Rhino 1 Pro is the ultimate phone for those who demand the best of both worlds.'}
                </p>
                <ul className="space-y-3 mb-8">
                  {Object.entries(rhinoSpecs).map(([key, value]) => {
                    if (!['name', 'price', 'color'].includes(key)) {
                      return (
                        <li key={key} className="flex justify-between items-start border-b pb-2">
                          <span className="font-semibold text-gray-700 capitalize w-1/3">
                            {t.consumer.specs[key as keyof typeof t.consumer.specs] || key}
                          </span>
                          <span className="text-gray-600 text-right w-2/3">{value}</span>
                        </li>
                      );
                    }
                  })}
                </ul>
                <div className="flex gap-4">
                  <button className="btn btn-primary">
                    {locale === 'sv' ? 'Lägg till i Varukorg' : 'Add to Cart'}
                  </button>
                  <button className="btn btn-secondary">
                    {locale === 'sv' ? 'Visa Detaljer' : 'View Details'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Eagle Pro Tab */}
          {activeTab === 'eagle' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <PhoneCard
                model={eagleSpecs}
                locale={locale}
              />
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Eagle Pro</h2>
                <p className="text-gray-600 mb-4 text-lg">
                  {locale === 'sv'
                    ? 'Den snabbaste och mest kraftfulla telefonen. Eagle Pro representerar spetsen av mobil teknologi.'
                    : 'The fastest and most powerful phone. Eagle Pro represents the pinnacle of mobile technology.'}
                </p>
                <ul className="space-y-3 mb-8">
                  {Object.entries(eagleSpecs).map(([key, value]) => {
                    if (!['name', 'price', 'color'].includes(key)) {
                      return (
                        <li key={key} className="flex justify-between items-start border-b pb-2">
                          <span className="font-semibold text-gray-700 capitalize w-1/3">
                            {t.consumer.specs[key as keyof typeof t.consumer.specs] || key}
                          </span>
                          <span className="text-gray-600 text-right w-2/3">{value}</span>
                        </li>
                      );
                    }
                  })}
                </ul>
                <div className="flex gap-4">
                  <button className="btn btn-primary">
                    {locale === 'sv' ? 'Lägg till i Varukorg' : 'Add to Cart'}
                  </button>
                  <button className="btn btn-secondary">
                    {locale === 'sv' ? 'Visa Detaljer' : 'View Details'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      <Footer locale={locale} />
    </main>
  );
}
