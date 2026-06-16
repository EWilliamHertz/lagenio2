'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RetailCalculator from '@/components/RetailCalculator';
import { translations } from '@/i18n.config';

type Locale = 'en' | 'sv';

export default function RetailPage() {
  const [locale, setLocale] = useState<Locale>('en');
  const t = translations[locale];

  return (
    <main className="min-h-screen bg-white">
      <Navigation locale={locale} setLocale={setLocale} />

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {locale === 'sv' ? 'Grossist & Bulkorder' : 'Retail & Bulk Orders'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            {locale === 'sv'
              ? 'Beställ i volym och få bästa möjliga priser. Perfekt för återförsäljare och företag.'
              : 'Order in volume and get the best possible prices. Perfect for retailers and businesses.'}
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-lagenio-light-blue border-2 border-lagenio-blue rounded-lg p-6 mb-12">
          <h3 className="font-bold text-lagenio-blue mb-3">
            {locale === 'sv' ? '📦 Viktig Information' : '📦 Important Notice'}
          </h3>
          <p className="text-gray-700">
            {locale === 'sv'
              ? 'Tills vi kan flytta större volymer enheter till vårt svenska lager kommer alla telefoner att skeppas direkt från China med en ungefärlig leveranstid på 10 dagar (DDP frakt ingår).'
              : 'Until we move larger quantities of units to our Swedish warehouse, all phones will be shipped directly from China with approximately 10 days delivery time (DDP shipping included).'}
          </p>
        </div>

        {/* Calculator Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {locale === 'sv' ? 'Prisräknare' : 'Price Calculator'}
          </h2>
          <RetailCalculator locale={locale} />
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {locale === 'sv' ? 'Volympris' : 'Volume Pricing'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Rhino Pricing */}
            <div className="border-2 border-lagenio-blue rounded-lg p-8">
              <h3 className="text-2xl font-bold text-lagenio-blue mb-6">Rhino 1 Pro</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">{locale === 'sv' ? '1-4 enheter' : '1-4 units'}</span>
                  <span className="font-bold text-lg">3,850 SEK</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b bg-yellow-50 px-2 py-1 rounded">
                  <span className="text-gray-700">{locale === 'sv' ? '5-9 enheter' : '5-9 units'} <span className="text-yellow-700 font-semibold">-5%</span></span>
                  <span className="font-bold">3,657 SEK</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b bg-green-50 px-2 py-1 rounded">
                  <span className="text-gray-700">{locale === 'sv' ? '10-19 enheter' : '10-19 units'} <span className="text-green-700 font-semibold">-10%</span></span>
                  <span className="font-bold">3,465 SEK</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b bg-green-50 px-2 py-1 rounded">
                  <span className="text-gray-700">{locale === 'sv' ? '20-39 enheter' : '20-39 units'} <span className="text-green-700 font-semibold">-12%</span></span>
                  <span className="font-bold">3,388 SEK</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b bg-green-50 px-2 py-1 rounded">
                  <span className="text-gray-700">{locale === 'sv' ? '40-79 enheter' : '40-79 units'} <span className="text-green-700 font-semibold">-15%</span></span>
                  <span className="font-bold">3,272 SEK</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b bg-green-50 px-2 py-1 rounded">
                  <span className="text-gray-700">{locale === 'sv' ? '80-119 enheter' : '80-119 units'} <span className="text-green-700 font-semibold">-18%</span></span>
                  <span className="font-bold">3,157 SEK</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b bg-green-100 px-2 py-1 rounded">
                  <span className="text-gray-900 font-semibold">{locale === 'sv' ? '120+ enheter' : '120+ units'} <span className="text-green-800 font-bold">-20%</span></span>
                  <span className="font-bold text-lg">3,080 SEK</span>
                </div>
              </div>
            </div>

            {/* Eagle Pricing */}
            <div className="border-2 border-lagenio-dark-blue rounded-lg p-8">
              <h3 className="text-2xl font-bold text-lagenio-dark-blue mb-6">Eagle Pro</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">{locale === 'sv' ? '1-4 enheter' : '1-4 units'}</span>
                  <span className="font-bold text-lg">4,250 SEK</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b bg-yellow-50 px-2 py-1 rounded">
                  <span className="text-gray-700">{locale === 'sv' ? '5-9 enheter' : '5-9 units'} <span className="text-yellow-700 font-semibold">-5%</span></span>
                  <span className="font-bold">4,037 SEK</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b bg-green-50 px-2 py-1 rounded">
                  <span className="text-gray-700">{locale === 'sv' ? '10-19 enheter' : '10-19 units'} <span className="text-green-700 font-semibold">-10%</span></span>
                  <span className="font-bold">3,825 SEK</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b bg-green-50 px-2 py-1 rounded">
                  <span className="text-gray-700">{locale === 'sv' ? '20-39 enheter' : '20-39 units'} <span className="text-green-700 font-semibold">-12%</span></span>
                  <span className="font-bold">3,740 SEK</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b bg-green-50 px-2 py-1 rounded">
                  <span className="text-gray-700">{locale === 'sv' ? '40-79 enheter' : '40-79 units'} <span className="text-green-700 font-semibold">-15%</span></span>
                  <span className="font-bold">3,612 SEK</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b bg-green-50 px-2 py-1 rounded">
                  <span className="text-gray-700">{locale === 'sv' ? '80-119 enheter' : '80-119 units'} <span className="text-green-700 font-semibold">-18%</span></span>
                  <span className="font-bold">3,485 SEK</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b bg-green-100 px-2 py-1 rounded">
                  <span className="text-gray-900 font-semibold">{locale === 'sv' ? '120+ enheter' : '120+ units'} <span className="text-green-800 font-bold">-20%</span></span>
                  <span className="font-bold text-lg">3,400 SEK</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-lagenio-light-blue rounded-lg p-8 border-2 border-lagenio-blue">
          <h2 className="text-2xl font-bold text-lagenio-blue mb-6">
            {locale === 'sv' ? 'Varför välja oss?' : 'Why Choose Us?'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">
                ✓ {locale === 'sv' ? 'Autentiska produkter' : 'Authentic Products'}
              </h4>
              <p className="text-gray-700">
                {locale === 'sv'
                  ? 'Direktimporterad från tillverkaren Shenzhen Lagenio Technology Co.'
                  : 'Directly imported from manufacturer Shenzhen Lagenio Technology Co.'}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">
                ✓ {locale === 'sv' ? 'Konkurrensdugligt pris' : 'Competitive Pricing'}
              </h4>
              <p className="text-gray-700">
                {locale === 'sv'
                  ? 'Volymprisrabatter upp till 16% på stora beställningar'
                  : 'Volume discounts up to 16% on large orders'}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">
                ✓ {locale === 'sv' ? 'Snabb frakt' : 'Fast Shipping'}
              </h4>
              <p className="text-gray-700">
                {locale === 'sv'
                  ? 'DDP levering från China inom cirka 10 dagar'
                  : 'DDP delivery from China within approximately 10 days'}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">
                ✓ {locale === 'sv' ? 'Dedikerad support' : 'Dedicated Support'}
              </h4>
              <p className="text-gray-700">
                {locale === 'sv'
                  ? 'Personlig serviceman för alla bulkorder och frågor'
                  : 'Personal support for all bulk orders and inquiries'}
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer locale={locale} />
    </main>
  );
}
