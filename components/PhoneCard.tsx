'use client';

import { FiCheck } from 'react-icons/fi';

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

interface PhoneCardProps {
  model: PhoneModel;
  locale: Locale;
}

export default function PhoneCard({ model, locale }: PhoneCardProps) {
  return (
    <div className="phone-card">
      {/* Phone Image Section */}
      <div className="phone-card-image">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Phone Outline */}
          <svg
            viewBox="0 0 300 600"
            className="w-full max-w-xs h-auto"
            style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }}
          >
            {/* Phone Body */}
            <rect
              x="40"
              y="30"
              width="220"
              height="540"
              rx="35"
              fill="currentColor"
              className="text-gray-800"
              strokeWidth="2"
              stroke="#0052CC"
            />

            {/* Screen */}
            <rect
              x="50"
              y="60"
              width="200"
              height="460"
              rx="20"
              fill="#1a1a1a"
              strokeWidth="1"
              stroke="#0052CC"
              opacity="0.8"
            />

            {/* Notch */}
            <rect
              x="110"
              y="60"
              width="80"
              height="25"
              rx="10"
              fill="#000000"
            />

            {/* Highlight for depth */}
            <circle cx="150" cy="150" r="60" fill="none" stroke="#0052CC" opacity="0.3" strokeWidth="2" />
          </svg>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none">
            <span className="text-2xl font-bold text-lagenio-blue drop-shadow-lg">{model.name}</span>
          </div>
        </div>
      </div>

      {/* Phone Details */}
      <div className="phone-card-body">
        <h3 className="phone-card-title">{model.name}</h3>

        {/* Key Features */}
        <ul className="phone-card-specs">
          <li>
            <div className="flex items-start gap-2">
              <FiCheck className="text-lagenio-blue mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">{locale === 'sv' ? 'Skärm' : 'Display'}</div>
                <div className="text-sm text-gray-600">{model.display}</div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-start gap-2">
              <FiCheck className="text-lagenio-blue mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">{locale === 'sv' ? 'Processor' : 'Processor'}</div>
                <div className="text-sm text-gray-600">{model.processor}</div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-start gap-2">
              <FiCheck className="text-lagenio-blue mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">{locale === 'sv' ? 'RAM' : 'RAM'}</div>
                <div className="text-sm text-gray-600">{model.ram}</div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-start gap-2">
              <FiCheck className="text-lagenio-blue mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">{locale === 'sv' ? 'Lagring' : 'Storage'}</div>
                <div className="text-sm text-gray-600">{model.storage}</div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-start gap-2">
              <FiCheck className="text-lagenio-blue mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">{locale === 'sv' ? 'Kamera' : 'Camera'}</div>
                <div className="text-sm text-gray-600">{model.camera}</div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-start gap-2">
              <FiCheck className="text-lagenio-blue mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">{locale === 'sv' ? 'Batteri' : 'Battery'}</div>
                <div className="text-sm text-gray-600">{model.battery}</div>
              </div>
            </div>
          </li>
        </ul>

        {/* Price */}
        <div className="mt-6 pt-6 border-t-2 border-gray-100">
          <div className="text-sm text-gray-600 mb-2">{locale === 'sv' ? 'Från' : 'From'}</div>
          <div className="text-3xl font-bold text-lagenio-blue">
            {model.price.toLocaleString('sv-SE')} {locale === 'sv' ? 'kr' : 'SEK'}
          </div>
          <div className="text-xs text-gray-500 mt-2">{locale === 'sv' ? 'Systemkrav gäller' : 'Terms apply'}</div>
        </div>

        {/* CTA Button */}
        <button className="w-full mt-6 btn btn-primary">
          {locale === 'sv' ? 'Lägg till i Varukorg' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
