'use client';

import { FiCheck, FiX } from 'react-icons/fi';

type Locale = 'en' | 'sv';

interface PhoneModel {
  name: string;
  display: string;
  processor: string;
  ram: string;
  storage: string;
  camera: string;
  battery: string;
  design: string;
  connectivity: string;
  color: string;
  price: number;
}

interface SpecComparisonProps {
  rhinoSpecs: PhoneModel;
  eagleSpecs: PhoneModel;
  locale: Locale;
}

export default function SpecificationComparison({
  rhinoSpecs,
  eagleSpecs,
  locale,
}: SpecComparisonProps) {
  const specs = [
    { key: 'display', label: locale === 'sv' ? 'Skärm' : 'Display' },
    { key: 'processor', label: 'Processor' },
    { key: 'ram', label: 'RAM' },
    { key: 'storage', label: locale === 'sv' ? 'Lagring' : 'Storage' },
    { key: 'camera', label: locale === 'sv' ? 'Kamera' : 'Camera' },
    { key: 'battery', label: locale === 'sv' ? 'Batteri' : 'Battery' },
    { key: 'design', label: locale === 'sv' ? 'Design & Material' : 'Design' },
    { key: 'connectivity', label: locale === 'sv' ? '5G-anslutning' : 'Connectivity' },
  ];

  return (
    <div className="mt-12 mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        {locale === 'sv' ? 'Specifikationsjämförelse' : 'Specification Comparison'}
      </h2>

      <div className="overflow-x-auto">
        <table className="spec-table">
          <thead>
            <tr>
              <th className="text-left w-1/4">{locale === 'sv' ? 'Specifikation' : 'Specification'}</th>
              <th className="text-center w-3/8">{rhinoSpecs.name}</th>
              <th className="text-center w-3/8">{eagleSpecs.name}</th>
            </tr>
          </thead>
          <tbody>
            {specs.map((spec) => (
              <tr key={spec.key}>
                <td className="font-semibold text-gray-900">{spec.label}</td>
                <td className="text-center text-gray-700">
                  {rhinoSpecs[spec.key as keyof PhoneModel]}
                </td>
                <td className="text-center text-gray-700">
                  <span className="font-semibold text-lagenio-blue">
                    {eagleSpecs[spec.key as keyof PhoneModel]}
                  </span>
                </td>
              </tr>
            ))}
            <tr className="bg-lagenio-light-blue font-semibold">
              <td>{locale === 'sv' ? 'Pris' : 'Price'}</td>
              <td className="text-center text-gray-900">
                {rhinoSpecs.price.toLocaleString('sv-SE')} SEK
              </td>
              <td className="text-center text-lagenio-blue">
                {eagleSpecs.price.toLocaleString('sv-SE')} SEK
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Comparison Summary */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-lagenio-light-blue rounded-lg p-8 border-2 border-lagenio-blue">
          <h3 className="text-xl font-bold text-lagenio-blue mb-4">Rhino 1 Pro</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FiCheck className="text-lagenio-blue text-xl" />
              <span>{locale === 'sv' ? 'Balanserad prestanda' : 'Balanced performance'}</span>
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-lagenio-blue text-xl" />
              <span>{locale === 'sv' ? 'Utmärkt värde för pengarna' : 'Excellent value for money'}</span>
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-lagenio-blue text-xl" />
              <span>{locale === 'sv' ? 'Robust design' : 'Robust design'}</span>
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-lagenio-blue text-xl" />
              <span>{locale === 'sv' ? 'Imponerande kamera' : 'Impressive camera'}</span>
            </li>
          </ul>
          <button className="btn btn-primary w-full mt-6">
            {locale === 'sv' ? 'Välj Rhino' : 'Choose Rhino'}
          </button>
        </div>

        <div className="bg-lagenio-light-blue rounded-lg p-8 border-2 border-lagenio-dark-blue">
          <h3 className="text-xl font-bold text-lagenio-dark-blue mb-4">Eagle Pro</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FiCheck className="text-lagenio-dark-blue text-xl" />
              <span>{locale === 'sv' ? 'Överlägsen prestanda' : 'Superior performance'}</span>
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-lagenio-dark-blue text-xl" />
              <span>{locale === 'sv' ? 'Snabbaste mobilen på marknaden' : 'Fastest phone on the market'}</span>
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-lagenio-dark-blue text-xl" />
              <span>{locale === 'sv' ? '120W supersnabb laddning' : '120W super-fast charging'}</span>
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-lagenio-dark-blue text-xl" />
              <span>{locale === 'sv' ? 'Premium materialval' : 'Premium materials'}</span>
            </li>
          </ul>
          <button className="btn btn-primary w-full mt-6">
            {locale === 'sv' ? 'Välj Eagle' : 'Choose Eagle'}
          </button>
        </div>
      </div>
    </div>
  );
}
