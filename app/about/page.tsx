'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { translations } from '@/i18n.config';

type Locale = 'en' | 'sv';

export default function AboutPage() {
  const [locale, setLocale] = useState<Locale>('en');
  const t = translations[locale];

  return (
    <main className="min-h-screen bg-white">
      <Navigation locale={locale} setLocale={setLocale} />

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {locale === 'sv' ? 'Om Lagenio' : 'About Lagenio'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {locale === 'sv'
              ? 'Märket för avancerad mobiltelefonteknik från Kina'
              : 'Leading the way in advanced mobile phone technology from China'}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left - Company Overview */}
          <div>
            <h2 className="text-3xl font-bold text-lagenio-blue mb-6">
              {locale === 'sv' ? 'Om Företaget' : 'About the Company'}
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                {locale === 'sv'
                  ? 'Shenzhen Lagenio Technology Co., Limited är en ledande tillverkare av smartphones och mobil teknik baserad i Guangdong, Kina. Med över 12 års erfarenhet av att designa och tillverka mobiltelefoner för några av världens största märken, är Lagenio en namn som många andra företag litar på.'
                  : 'Shenzhen Lagenio Technology Co., Limited is a leading manufacturer of smartphones and mobile technology based in Guangdong, China. With over 12 years of experience designing and manufacturing mobile phones for some of the world\'s largest brands, Lagenio is a name trusted by many companies worldwide.'}
              </p>

              <p>
                {locale === 'sv'
                  ? 'Företaget är certifierat av Alibaba som Gold Supplier med en imponerande 4.9/5 stjärnor betyg och 93.3% leveranstidsprecision. De är specialiserade på att skapa högkvalitativa, hållbara smartphones som kombinerar framtidsklar teknik med prisvärdhet.'
                  : 'The company is certified by Alibaba as a Gold Supplier with an impressive 4.9/5 star rating and 93.3% on-time delivery rate. They specialize in creating high-quality, durable smartphones that combine cutting-edge technology with affordability.'}
              </p>

              <p>
                {locale === 'sv'
                  ? 'Lagenios produktlinjer inkluderar två flaggskeppsprodukter: Rhino 1 Pro och Eagle Pro, båda designade för den europeiska marknaden med fokus på pålitlighet, prestanda och modern design.'
                  : 'Lagenio\'s product lines include two flagship products: Rhino 1 Pro and Eagle Pro, both designed for the European market with a focus on reliability, performance, and modern design.'}
              </p>
            </div>
          </div>

          {/* Right - Key Stats */}
          <div className="bg-lagenio-light-blue rounded-lg p-8 border-2 border-lagenio-blue h-fit">
            <h3 className="text-2xl font-bold text-lagenio-blue mb-6">
              {locale === 'sv' ? 'Viktiga Fakta' : 'Key Facts'}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b">
                <span className="text-3xl font-bold text-lagenio-blue">12+</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    {locale === 'sv' ? 'År av Erfarenhet' : 'Years of Experience'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {locale === 'sv'
                      ? 'Tillverkning och design av mobiltelefoner'
                      : 'Manufacturing and designing mobile phones'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b">
                <span className="text-3xl font-bold text-lagenio-blue">4.9/5</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    {locale === 'sv' ? 'Gold Supplier Rating' : 'Gold Supplier Rating'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {locale === 'sv'
                      ? 'Certifierad av Alibaba.com'
                      : 'Certified by Alibaba.com'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b">
                <span className="text-3xl font-bold text-lagenio-blue">93.3%</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    {locale === 'sv' ? 'Leveransprecision' : 'On-Time Delivery'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {locale === 'sv'
                      ? 'Garanterad leveranstid'
                      : 'Guaranteed delivery rate'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-lagenio-blue">2</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    {locale === 'sv' ? 'Flaggskeppsprodukter' : 'Flagship Products'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {locale === 'sv'
                      ? 'Rhino 1 Pro & Eagle Pro'
                      : 'Rhino 1 Pro & Eagle Pro'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Importer Section */}
        <div className="bg-gray-50 rounded-lg p-12 mb-16 border-2 border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {locale === 'sv' ? 'Svensk Importör' : 'Swedish Importer'}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border-l-4 border-lagenio-blue">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {locale === 'sv' ? 'Namn' : 'Name'}
              </h3>
              <p className="text-xl text-lagenio-blue font-semibold">Ernst-William Hertz</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-lagenio-blue">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {locale === 'sv' ? 'Roll' : 'Role'}
              </h3>
              <p className="text-gray-700">
                {locale === 'sv'
                  ? 'Svensk Representant & Ansvarig Person'
                  : 'Swedish Representative & Responsible Person'}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-lagenio-blue">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {locale === 'sv' ? 'Ansvar' : 'Responsibility'}
              </h3>
              <p className="text-gray-700">
                {locale === 'sv'
                  ? 'Marknadsföring och Försäljning Sverige'
                  : 'Marketing & Sales Sweden'}
              </p>
            </div>
          </div>

          <p className="text-gray-700 mt-6">
            {locale === 'sv'
              ? 'Ernst-William Hertz är den officiella svenska importören och representanten för Lagenio i Sverige. Han ansvarar för att föra denna revolutionära teknik till svenska konsumenter och återförsäljare, och säkerställer att högsta kvalitetsstandarder och kundservice upprätthålls.'
              : 'Ernst-William Hertz is the official Swedish importer and representative for Lagenio in Sweden. He is responsible for bringing this revolutionary technology to Swedish consumers and retailers, ensuring the highest quality standards and customer service are maintained.'}
          </p>
        </div>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {locale === 'sv' ? 'Våra Huvudvärden' : 'Our Core Values'}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border-2 border-lagenio-light-blue hover:border-lagenio-blue transition-colors">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {locale === 'sv' ? 'Kvalitet' : 'Quality'}
              </h3>
              <p className="text-gray-700">
                {locale === 'sv'
                  ? 'Vi är engagerade för att leverera högkvalitativa produkter som överträffar förväntningarna.'
                  : 'We are committed to delivering high-quality products that exceed expectations.'}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border-2 border-lagenio-light-blue hover:border-lagenio-blue transition-colors">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {locale === 'sv' ? 'Innovation' : 'Innovation'}
              </h3>
              <p className="text-gray-700">
                {locale === 'sv'
                  ? 'Vi strävar ständigt att utveckla nya och bättre teknologier för framtiden.'
                  : 'We constantly strive to develop new and better technologies for the future.'}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border-2 border-lagenio-light-blue hover:border-lagenio-blue transition-colors">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {locale === 'sv' ? 'Partnerskap' : 'Partnership'}
              </h3>
              <p className="text-gray-700">
                {locale === 'sv'
                  ? 'Vi bygger långsiktiga relationer med våra kunder och partners.'
                  : 'We build long-term relationships with our customers and partners.'}
              </p>
            </div>
          </div>
        </section>

        {/* Technology & Certifications */}
        <section className="bg-lagenio-light-blue rounded-lg p-12 border-2 border-lagenio-blue">
          <h2 className="text-3xl font-bold text-lagenio-blue mb-8">
            {locale === 'sv' ? 'Certifikationer & Standarder' : 'Certifications & Standards'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">
                {locale === 'sv' ? 'Kryningar' : 'Certifications'}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Alibaba Gold Supplier</li>
                <li>✓ CE Marked (European Compliance)</li>
                <li>✓ RoHS Compliant</li>
                <li>✓ FCC Certified (US)</li>
                <li>✓ ISO 9001 Quality Management</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">
                {locale === 'sv' ? 'Säkerhetsstandarder' : 'Safety Standards'}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Battery Safety Certified</li>
                <li>✓ Radiation Safety Testing</li>
                <li>✓ Environmental Testing</li>
                <li>✓ Quality Control Protocols</li>
                <li>✓ Warranty & After-Sales Support</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <Footer locale={locale} />
    </main>
  );
}
