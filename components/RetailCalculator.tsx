'use client';

import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

type Locale = 'en' | 'sv';

interface CalculatorProps {
  locale: Locale;
}

const SHIPPING_FEE_BASE = 1200; // Base shipping fee in SEK

const getPricePerUnit = (model: string, quantity: number): number => {
  const baseRhino = 3850;
  const baseEagle = 4250;
  const basePrice = model === 'rhino' ? baseRhino : baseEagle;

  // Volume tier discounts: 5, 10, 20, 40, 80, 120+
  if (quantity >= 120) {
    return model === 'rhino' ? 3080 : 3400; // 20% discount
  } else if (quantity >= 80) {
    return model === 'rhino' ? 3157 : 3485; // 18% discount
  } else if (quantity >= 40) {
    return model === 'rhino' ? 3272 : 3612; // 15% discount
  } else if (quantity >= 20) {
    return model === 'rhino' ? 3388 : 3740; // 12% discount
  } else if (quantity >= 10) {
    return model === 'rhino' ? 3465 : 3825; // 10% discount
  } else if (quantity >= 5) {
    return model === 'rhino' ? 3657 : 4037; // 5% discount
  }
  return basePrice;
};

export default function RetailCalculator({ locale }: CalculatorProps) {
  const [rhinoQty, setRhinoQty] = useState(1);
  const [eagleQty, setEagleQty] = useState(0);

  const rhinoPrice = getPricePerUnit('rhino', rhinoQty);
  const eaglePrice = getPricePerUnit('eagle', eagleQty);

  const rhinoSubtotal = rhinoQty * rhinoPrice;
  const eagleSubtotal = eagleQty * eaglePrice;
  const subtotal = rhinoSubtotal + eagleSubtotal;

  // Shipping scales with quantity
  const totalUnits = rhinoQty + eagleQty;
  const shippingFee = Math.max(SHIPPING_FEE_BASE, Math.floor(totalUnits / 10) * 200);

  const total = subtotal + shippingFee;

  const increment = (setter: (val: number) => void, current: number) => {
    setter(current + 1);
  };

  const decrement = (setter: (val: number) => void, current: number) => {
    if (current > 0) setter(current - 1);
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
      <div className="grid md:grid-cols-2 gap-12 mb-8">
        {/* Rhino Calculator */}
        <div className="border-2 border-lagenio-light-blue rounded-lg p-6">
          <h3 className="text-xl font-bold text-lagenio-blue mb-6">Rhino 1 Pro</h3>

          <div className="space-y-6">
            {/* Quantity Selector */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                {locale === 'sv' ? 'Antal enheter' : 'Quantity'}
              </label>
              <div className="flex items-center gap-4 bg-gray-100 rounded-lg p-2 w-fit">
                <button
                  onClick={() => decrement(setRhinoQty, rhinoQty)}
                  className="p-2 hover:bg-gray-200 rounded transition-colors"
                >
                  <FiMinus size={20} />
                </button>
                <input
                  type="number"
                  value={rhinoQty}
                  onChange={(e) => setRhinoQty(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-20 text-center font-bold text-xl border-none bg-transparent focus:outline-none"
                />
                <button
                  onClick={() => increment(setRhinoQty, rhinoQty)}
                  className="p-2 hover:bg-gray-200 rounded transition-colors"
                >
                  <FiPlus size={20} />
                </button>
              </div>
            </div>

            {/* Price Info */}
            <div className="bg-lagenio-light-blue rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">{locale === 'sv' ? 'Enhetspris' : 'Unit Price'}</span>
                <span className="font-bold">{rhinoPrice.toLocaleString('sv-SE')} SEK</span>
              </div>
              <div className="border-t border-lagenio-blue pt-2">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">{locale === 'sv' ? 'Delsumma' : 'Subtotal'}</span>
                  <span className="font-bold text-lg text-lagenio-blue">
                    {rhinoSubtotal.toLocaleString('sv-SE')} SEK
                  </span>
                </div>
              </div>
            </div>

            {/* Discount Info */}
            {rhinoQty >= 11 && (
              <div className="text-sm bg-green-100 border border-green-300 rounded p-3 text-green-800">
                ✓ {locale === 'sv' ? 'Volymrabatt applicerad!' : 'Volume discount applied!'}
              </div>
            )}
          </div>
        </div>

        {/* Eagle Calculator */}
        <div className="border-2 border-lagenio-light-blue rounded-lg p-6">
          <h3 className="text-xl font-bold text-lagenio-dark-blue mb-6">Eagle Pro</h3>

          <div className="space-y-6">
            {/* Quantity Selector */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                {locale === 'sv' ? 'Antal enheter' : 'Quantity'}
              </label>
              <div className="flex items-center gap-4 bg-gray-100 rounded-lg p-2 w-fit">
                <button
                  onClick={() => decrement(setEagleQty, eagleQty)}
                  className="p-2 hover:bg-gray-200 rounded transition-colors"
                >
                  <FiMinus size={20} />
                </button>
                <input
                  type="number"
                  value={eagleQty}
                  onChange={(e) => setEagleQty(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-20 text-center font-bold text-xl border-none bg-transparent focus:outline-none"
                />
                <button
                  onClick={() => increment(setEagleQty, eagleQty)}
                  className="p-2 hover:bg-gray-200 rounded transition-colors"
                >
                  <FiPlus size={20} />
                </button>
              </div>
            </div>

            {/* Price Info */}
            <div className="bg-lagenio-light-blue rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">{locale === 'sv' ? 'Enhetspris' : 'Unit Price'}</span>
                <span className="font-bold">{eaglePrice.toLocaleString('sv-SE')} SEK</span>
              </div>
              <div className="border-t border-lagenio-dark-blue pt-2">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">{locale === 'sv' ? 'Delsumma' : 'Subtotal'}</span>
                  <span className="font-bold text-lg text-lagenio-dark-blue">
                    {eagleSubtotal.toLocaleString('sv-SE')} SEK
                  </span>
                </div>
              </div>
            </div>

            {/* Discount Info */}
            {eagleQty >= 11 && (
              <div className="text-sm bg-green-100 border border-green-300 rounded p-3 text-green-800">
                ✓ {locale === 'sv' ? 'Volymrabatt applicerad!' : 'Volume discount applied!'}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-gradient-to-r from-lagenio-light-blue to-white border-2 border-lagenio-blue rounded-lg p-8">
        <h3 className="text-2xl font-bold text-lagenio-blue mb-6">
          {locale === 'sv' ? 'Ordersammanfattning' : 'Order Summary'}
        </h3>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center text-lg">
            <span className="text-gray-700">{locale === 'sv' ? 'Delsumma (produkter)' : 'Subtotal (Products)'}</span>
            <span className="font-bold">{subtotal.toLocaleString('sv-SE')} SEK</span>
          </div>
          <div className="flex justify-between items-center text-lg border-b-2 pb-4">
            <span className="text-gray-700">
              {locale === 'sv' ? 'DDP fraktavgift' : 'DDP Shipping Fee'}
            </span>
            <span className="font-bold text-gray-600">{shippingFee.toLocaleString('sv-SE')} SEK</span>
          </div>
          <div className="flex justify-between items-center text-2xl pt-4">
            <span className="font-bold text-gray-900">{locale === 'sv' ? 'Totalt' : 'Total'}</span>
            <span className="font-bold text-lagenio-blue text-3xl">
              {total.toLocaleString('sv-SE')} SEK
            </span>
          </div>
        </div>

        {/* Details */}
        {totalUnits > 0 && (
          <div className="bg-white rounded p-4 mb-6 text-sm text-gray-700 space-y-2">
            <p>
              <strong>{locale === 'sv' ? 'Sammanfattning:' : 'Summary:'}</strong>
            </p>
            {rhinoQty > 0 && (
              <p>
                • {rhinoQty} × Rhino 1 Pro @ {rhinoPrice.toLocaleString('sv-SE')} SEK ={' '}
                {rhinoSubtotal.toLocaleString('sv-SE')} SEK
              </p>
            )}
            {eagleQty > 0 && (
              <p>
                • {eagleQty} × Eagle Pro @ {eaglePrice.toLocaleString('sv-SE')} SEK ={' '}
                {eagleSubtotal.toLocaleString('sv-SE')} SEK
              </p>
            )}
            <p className="pt-2 border-t">
              {locale === 'sv'
                ? `Totalt: ${totalUnits} enheter + ${shippingFee.toLocaleString('sv-SE')} SEK frakt`
                : `Total: ${totalUnits} units + ${shippingFee.toLocaleString('sv-SE')} SEK shipping`}
            </p>
          </div>
        )}

        {/* CTA */}
        <button className="w-full btn btn-primary">
          {locale === 'sv' ? 'Gå till Beställning' : 'Proceed to Order'}
        </button>
      </div>

      {/* Info Box */}
      <div className="mt-8 bg-blue-50 border-l-4 border-lagenio-blue p-4 rounded">
        <p className="text-sm text-gray-700">
          <strong>{locale === 'sv' ? 'Obs:' : 'Note:'}</strong>{' '}
          {locale === 'sv'
            ? 'Frakten ökar med cirka 200 SEK för varje 10 enheter för att reflektera större volymer. Alla priser är i SEK och inkluderar 25% moms enligt EU-regler.'
            : 'Shipping increases by approximately 200 SEK per 10 units to reflect larger volumes. All prices are in SEK and include 25% VAT per EU regulations.'}
        </p>
      </div>
    </div>
  );
}
