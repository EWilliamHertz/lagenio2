export type Locale = 'en' | 'sv';

export const locales: Locale[] = ['en', 'sv'];
export const defaultLocale: Locale = 'en';

export const translations: Record<Locale, Record<string, any>> = {
  en: {
    nav: {
      consumer: 'Consumer',
      retail: 'Retail',
      about: 'About',
      admin: 'Admin',
    },
    consumer: {
      overview: 'Overview',
      rhinoPro: 'Rhino 1 Pro',
      eaglePro: 'Eagle Pro',
      comingSoon: 'Coming Soon',
      releaseDate: 'Releases on the Swedish market on the 5th of August',
      comparisonTable: 'Specification Comparison',
      specs: {
        display: 'Display',
        processor: 'Processor',
        ram: 'RAM',
        storage: 'Storage',
        camera: 'Camera',
        battery: 'Battery',
        design: 'Design',
        connectivity: '5G Connectivity',
      },
    },
    retail: {
      title: 'Retail & Bulk Orders',
      calculator: 'Price Calculator',
      quantity: 'Quantity',
      unitPrice: 'Unit Price (SEK)',
      subtotal: 'Subtotal',
      shippingFee: 'DDP Shipping Fee',
      total: 'Total',
      shippingNotice: 'Note: Until larger quantities are moved to our Swedish warehouse, all phones are shipped directly from China with approximately 10 days delivery time.',
      currency: 'SEK',
    },
    common: {
      language: 'Language',
      selectModel: 'Select Model',
      addToCart: 'Add to Cart',
      orderNow: 'Order Now',
      viewDetails: 'View Details',
      loading: 'Loading...',
      error: 'An error occurred',
    },
  },
  sv: {
    nav: {
      consumer: 'Konsument',
      retail: 'Grossist',
      about: 'Om oss',
      admin: 'Admin',
    },
    consumer: {
      overview: 'Översikt',
      rhinoPro: 'Rhino 1 Pro',
      eaglePro: 'Eagle Pro',
      comingSoon: 'Kommer Snart',
      releaseDate: 'Lanseras på den svenska marknaden den 5 augusti',
      comparisonTable: 'Specifikationsjämförelse',
      specs: {
        display: 'Skärm',
        processor: 'Processor',
        ram: 'RAM',
        storage: 'Lagring',
        camera: 'Kamera',
        battery: 'Batteri',
        design: 'Design',
        connectivity: '5G-anslutning',
      },
    },
    retail: {
      title: 'Grossist & Bulkorder',
      calculator: 'Prisräknare',
      quantity: 'Antal',
      unitPrice: 'Enhetspris (SEK)',
      subtotal: 'Delsumma',
      shippingFee: 'DDP Fraktavgift',
      total: 'Totalt',
      shippingNotice: 'Obs: Tills större mängder flyttas till vårt svenska lager levereras alla telefoner direkt från Kina med cirka 10 dagar leveranstid.',
      currency: 'SEK',
    },
    common: {
      language: 'Språk',
      selectModel: 'Välj Modell',
      addToCart: 'Lägg till i Varukorg',
      orderNow: 'Beställ Nu',
      viewDetails: 'Visa Detaljer',
      loading: 'Laddar...',
      error: 'Ett fel uppstod',
    },
  },
};

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
}
