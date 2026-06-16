'use client';

type Locale = 'en' | 'sv';

interface HypeSectionProps {
  locale: Locale;
}

export default function HypeSection({ locale }: HypeSectionProps) {
  return (
    <div className="hype-section">
      {/* Phone Outline */}
      <div className="hype-section-phone">
        <svg viewBox="0 0 300 600" className="w-full h-full p-4">
          {/* Phone Body */}
          <rect
            x="40"
            y="30"
            width="220"
            height="540"
            rx="35"
            fill="none"
            strokeWidth="4"
            stroke="#0052CC"
          />

          {/* Screen */}
          <rect
            x="50"
            y="60"
            width="200"
            height="460"
            rx="20"
            fill="none"
            strokeWidth="2"
            stroke="#0052CC"
            opacity="0.5"
          />

          {/* Notch */}
          <ellipse
            cx="150"
            cy="80"
            rx="40"
            ry="15"
            fill="none"
            strokeWidth="2"
            stroke="#0052CC"
          />
        </svg>
      </div>

      {/* Text Content */}
      <h2 className="hype-text">
        {locale === 'sv'
          ? '✨ Kommande Sensation ✨'
          : '✨ Coming Sensation ✨'}
      </h2>

      <p className="text-lg text-gray-700 max-w-2xl mx-auto my-4 font-medium">
        {locale === 'sv'
          ? 'Vi är stolta att presentera vår senaste innovation. Förbereda dig för nästa generation av mobiltelefoner.'
          : 'We are proud to present our latest innovation. Get ready for the next generation of mobile phones.'}
      </p>

      <p className="hype-release">
        {locale === 'sv'
          ? '🚀 Lanseras på den svenska marknaden den 5 augusti'
          : '🚀 Releases on the Swedish market on the 5th of August'}
      </p>

      {/* Interest Signup */}
      <div className="mt-6 flex gap-3 justify-center flex-wrap">
        <button className="btn btn-primary">
          {locale === 'sv' ? 'Visa Intresse' : 'Express Interest'}
        </button>
        <button className="btn btn-secondary">
          {locale === 'sv' ? 'Meddela Mig' : 'Notify Me'}
        </button>
      </div>
    </div>
  );
}
